variable "instance_count" {
  default = "1"
}

variable "disk_img" {
  default = "file:///Dados/Vms/centos7.0"
}

variable "vm_network_addresses" {
  description = "Configura Rede"
  default     = "192.168.36.0/24"
}

variable "vm_addresses" {
  default = {
    "0" = "192.168.36.10"

  }

}

variable "vm_network_name" {
  description = "Define o nome da rede no KVM"
  default     = "teste"
}

variable "domain_name" {
  default = "teste"
}

#Provider
provider "libvirt" {
  uri = "qemu:///system"
}

#Imagem
resource "libvirt_volume" "os_image" {
  name   = "os_image"
  pool   = "Dados"
  source = var.disk_img
}

#Volume
resource "libvirt_volume" "volume" {
  name           = "teste-${count.index}"
  pool           = "Dados"
  base_volume_id = libvirt_volume.os_image.id
  count          = var.instance_count
}

#Rede
resource "libvirt_network" "vm_network" {

  name      = var.vm_network_name
  addresses = ["${var.vm_network_addresses}"]
  domain    = var.domain_name
  mode      = "nat"
  dhcp {
    enabled = false
  }

  dns {
    local_only = true
  }

  autostart = true
}

#VM
resource "libvirt_domain" "domain" {
  name   = "teste-${count.index}"
  memory = "1024"
  vcpu   = "2"

  network_interface {
    network_id     = libvirt_network.vm_network.id
    hostname       = "teste-${count.index}"
    addresses      = ["${var.vm_addresses[count.index]}"]
    wait_for_lease = true

  }

  disk {
    volume_id = libvirt_volume.volume[count.index].id
  }
  count = var.instance_count
}


output "Disco" {
  value = libvirt_volume.volume.*.id
}

output "Rede" {
  value = libvirt_network.vm_network.id
}

output "IP" {
  value = libvirt_domain.domain.*.network_interface.0.addresses
}

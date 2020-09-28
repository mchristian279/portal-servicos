variable "instance_count" {
  default = "qtdInstances-replace"
}

variable "disk_img" {
  default = "file:///Dados/Vms/systemOperation-replace"
}

variable "vm_network_addresses" {
  description = "Configura Rede"
  default     = "network-subnetIp-replace/network-subnetMask-replace"
}

variable "vm_addresses" {
  default = {
    "0" = "vmIps-replace"

  }

}

variable "vm_network_name" {
  description = "Define o nome da rede no KVM"
  default     = "network-name-replace"
}

variable "domain_name" {
  default = "domain-replace"
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
  name           = "vmNameInstance-replace-${count.index}"
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
  name   = "cloudera-${count.index}"
  memory = "memory-replace"
  vcpu   = "vCPU-replace"

  network_interface {
    network_id     = libvirt_network.vm_network.id
    hostname       = "vmNameInstance-replace-${count.index}"
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

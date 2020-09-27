<template>
  <v-container>
    <v-row align="center">
      <v-form ref="form">
        <v-text-field
          v-model="form.datacenterName"
          label="Datacenter Name"
        ></v-text-field>
        <v-select
          v-model="form.systemOperation"
          :items="systemsOperations"
          label="Template S.O"
          required
        ></v-select>
        <v-text-field
          v-model="form.qtdInstances"
          label="Instances"
          type="number"
          required
        >
        </v-text-field>
        <v-text-field v-model="form.vmName" label="VM Name" required>
        </v-text-field>
        <v-text-field
          v-model="form.memory"
          label="Memory"
          type="number"
          required
        >
        </v-text-field>
        <v-text-field v-model="form.vCPU" label="vCPU" required> </v-text-field>
        <v-text-field v-model="form.network.name" label="Network Name" required>
        </v-text-field>
        <v-text-field
          v-model="form.network.subnetIp"
          label="Subnet IP"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="form.network.subnetMask"
          label="Subnet Mask"
          required
        >
        </v-text-field>
        <v-text-field v-model="form.vmIps" label="VM IPs" required>
        </v-text-field>
        <v-text-field v-model="form.domain" label="Domain" required>
        </v-text-field>

        <v-btn color="success" class="mr-4" @click="submit">
          Submit
        </v-btn>

        <v-btn color="error" class="mr-4" @click="cancel">
          Cancel
        </v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
import datacenterService from "@/service/datacenterService";

export default {
  data: function() {
    return {
      systemsOperations: ["CentOS-7", "Windows"],
      form: {
        datacenterName: "",
        systemOperation: null,
        qtdInstances: 0,
        vmName: "",
        memory: 0,
        vCPU: 0,
        network: {
          name: "",
          subnetIp: "",
          subnetMask: ""
        },
        vmIps: [],
        domain: ""
      }
    };
  },

  methods: {
    submit() {
      datacenterService.vmProvision(this.form);
    },

    cancel() {}
  }
};
</script>

<style scoped></style>

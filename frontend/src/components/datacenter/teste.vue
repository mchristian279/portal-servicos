<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-row>
        <v-layout row wrap>
          <v-form ref="form">
            <v-layout row wrap>
              <v-flex>
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
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex>
                <v-text-field
                  v-model="form.vmNameInstance"
                  label="VM Name"
                  required
                >
                </v-text-field>

                <v-text-field
                  v-model="form.memory"
                  label="Memory"
                  type="number"
                  required
                >
                </v-text-field>

                <v-text-field v-model="form.vCPU" label="vCPU" required>
                </v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex>
                <v-text-field
                  v-model="form.network.name"
                  label="Network Name"
                  required
                >
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
                />

                <v-text-field v-model="form.vmIps" label="VM IPs" required />

                <v-text-field v-model="form.domain" label="Domain" required />
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex>
                <v-btn class="mr-4" color="primary" @click="submit">
                  Launch<v-icon right dark>mdi-play-circle-outline</v-icon>
                </v-btn>

                <v-btn class="mr-4" color="secondary" @click="cancel">
                  Cancel<v-icon right dark>mdi-close-circle-outline</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-layout>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import datacenterService from "@/service/datacenterService";

export default {
  data: function() {
    return {
      systemsOperations: ["CentOS-7", "Windows"],
      form: {
        systemOperation: null,
        qtdInstances: 0,
        vmNameInstance: "",
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

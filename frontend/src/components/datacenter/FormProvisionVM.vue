<template>
  <v-container fluid="true">
    <v-form ref="form">
      <v-layout row wrap>
        <v-flex>
          <v-select
            class="ma-0, input-template-so"
            filled
            rounded
            dense
            v-model="form.systemOperation"
            :items="systemsOperations"
            label="Template S.O"
            required
          ></v-select>
        </v-flex>
        <v-flex>
          <v-text-field
            class="ma-0 pa-0"
            filled
            rounded
            dense
            v-model="form.qtdInstances"
            label="Instances"
            type="number"
            required
          >
          </v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            class="input-name ma-0 pa-0"
            filled
            rounded
            dense
            v-model="form.vmNameInstance"
            label="VM Name"
            required
          >
          </v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-text-field
            class="input-number"
            filled
            rounded
            dense
            v-model="form.memory"
            label="Memory"
            type="number"
            required
          >
          </v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            class="input-vcpu"
            filled
            rounded
            dense
            v-model="form.vCPU"
            label="vCPU"
            type="number"
            required
          >
          </v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            class="input-name"
            filled
            rounded
            dense
            v-model="form.network.name"
            label="Network Name"
            required
          >
          </v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            class="input-name"
            filled
            rounded
            dense
            v-model="form.network.subnetIp"
            label="Subnet IP"
            required
          >
          </v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            class="input-name"
            filled
            rounded
            dense
            v-model="form.network.subnetMask"
            label="Subnet Mask"
            required
          />
        </v-flex>
        <v-flex>
          <v-text-field
            class="input-name"
            filled
            rounded
            dense
            v-model="form.vmIps"
            label="VM IPs"
            required
          />
        </v-flex>
        <v-flex>
          <v-text-field
            class="input-name"
            filled
            rounded
            dense
            v-model="form.domain"
            label="Domain"
            required
          />
        </v-flex>
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

<style scoped>
.input-template-so {
  /* width: 15vw; */
  flex-direction: row;
  padding: 0;
}
.input-number {
  /* width: 10vw; */
  flex-direction: row;
  padding: 0;
}
.input-name {
  /* width: 22vw; */
  flex-direction: row;
  padding: 0;
}
.input-vcpu {
  /* width: 17vw; */
  flex-direction: row;

  padding: 0;
}
.mr-4 {
}
</style>

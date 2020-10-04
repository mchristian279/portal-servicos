<template>
  <v-card height="900" width="256" class="mx-auto">
    <v-navigation-drawer class="light-blue darken-2" dark permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Service Portal
          </v-list-item-title>
          <v-list-item-subtitle>
            Provision services
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in routes" :key="item.name" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title link @click="choice(item.path)">{{
              item.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { routes } from "../../router/index";

export default {
  data() {
    return {
      routes: routes,
      right: null
    };
  },
  methods: {
    choice(path) {
      this.$router.push(path);
    }
  }
};
</script>

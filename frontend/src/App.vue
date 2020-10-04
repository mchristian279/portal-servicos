<template>
  <v-app>
    <v-navigation-drawer app> <NavigatorDrawer /> </v-navigation-drawer>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigatorDrawer from "@/components/navigatorDrawer/NavigatorDrawer";
export default {
  name: "App",

  components: {
    NavigatorDrawer
  },

  data: () => ({
    //
  })
};
</script>

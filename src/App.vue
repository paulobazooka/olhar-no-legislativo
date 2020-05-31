<template>
  <v-app>
    <v-app-bar app clipped-left dark color="success">
      <v-toolbar-title>
       <span>Olhar no Legislativo</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({})
};
</script>

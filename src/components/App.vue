<template>
  <v-app>
    <v-app-bar
      app
      color="success"
      dark
    >     
    </v-app-bar>

    <v-content>
      <v-container>
          <home/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Home from '@/pages/home/Home'

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    
  }),
};
</script>

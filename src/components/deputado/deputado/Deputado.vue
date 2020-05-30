<template>
  <div>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ deputado.siglaPartido }}</div>
        <v-list-item-title class="headline mb-1">{{ deputado.nome }}</v-list-item-title>
        <v-list-item-subtitle>{{ deputado.email }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="grey"
      >
        <v-img :src="deputado.urlFoto">

        </v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn color="grey">Prosseguir</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
  name: "deputado",
  props: ["item"],
  data() {
    return {
      deputado: {}
    };
  },

  created() {
    this.deputado = this.item;
  }
};
</script>
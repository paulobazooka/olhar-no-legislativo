<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <h1>Deputados</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <div v-for="deputado in listaDeputados" v-bind:key="deputado.id">
        <div class="mt-5 mb-5 ml-5 mr-5">
          <deputado :item="deputado"></deputado>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Deputado from "@/components/deputado/deputado/Deputado";

export default {
  name: "home",
  components: {
    Deputado
  },
  data() {
    return {
      listaDeputados: []
    };
  },

  created() {
    if(this.listaDeputados.length === 0)
    this.getDeputados();
  },

  computed: {
    ...mapState("home", ["deputados"])
  },

  methods: {
    ...mapActions("home", ["ActionGetDeputados"]),

    async getDeputados() {
      try {
        await this.ActionGetDeputados();
      } catch (err) {
        console.log("Erro:", err);
      }
    }
  },

  watch: {
    deputados(novaLista) {
      this.listaDeputados = novaLista;
      console.log('deputado', novaLista[0]);
    }
  }
};
</script>
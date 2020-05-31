<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <h1>Câmara dos Deputados</h1>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex row xs12 md2 justify-start mb-3 pl-3>
          <v-text-field label="Buscar seu deputado" append-icon="search" single-line v-model="search"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-data-table
            :items="listaDeputados"
            :items-per-page="listaDeputados.length"
            :headers="headers"
            :loading="showLoading"
            hide-default-footer
            no-data-text="Não foram encontrados deputados na base de dados."
            loading-text="Buscando deputados"
            :search="search"
          >
            <template v-slot:item="props">
              <tr @click="irDeputado(props.item.id)">
                <td class="text-xs-left">{{ props.item.nome }}</td>
                <td class="text-xs-left">{{ props.item.siglaPartido }}</td>
                <td class="text-xs-left">{{ props.item.siglaUf }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      listaDeputados: [],
      search: "",
      showLoading: true,
      headers: [
        {
          sortable: true,
          align: "left",
          value: "nome",
          text: "Nome"
        },
        {
          sortable: true,
          align: "left",
          value: "siglaPartido",
          text: "Partido"
        },
        {
          sortable: true,
          align: "left",
          value: "siglaUf",
          text: "Estado"
        }
      ]
    };
  },

  created() {
    if (this.listaDeputados.length === 0) {
      this.getDeputados();
    }
  },

  computed: {
    ...mapState("home", ["deputados"])
  },

  methods: {
    ...mapActions("home", ["ActionGetDeputados"]),

    async getDeputados() {
      this.showLoading = true;
      try {
        await this.ActionGetDeputados();
      } catch (err) {
        console.log("Erro:", err);
      } finally {
        this.showLoading = false;
      }
    },

    irDeputado(id) {
      this.$router.push({ name: "Deputado", params: { id: id } });
    }
  },

  watch: {
    deputados(novaLista) {
      this.listaDeputados = [];
      novaLista.map(d => {
        this.listaDeputados.push({
          id: d.id,
          nome: d.nome,
          siglaPartido: d.siglaPartido,
          siglaUf: d.siglaUf
        });
      });
    }
  }
};
</script>

<style scoped>
tr {
  cursor: pointer;
}
</style>
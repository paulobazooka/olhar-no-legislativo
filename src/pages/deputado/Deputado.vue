<template>
  <div>
    <v-content>
      <v-container>
        <v-row justify="start">
          <v-btn color="green" outlined @click="voltar">Voltar</v-btn>
        </v-row>
        <v-row justify="center mt-5">

          <v-col cols="12" sm="12" md="1" justify="center">
            <v-img :src="perfilDeputado.ultimoStatus.urlFoto" max-height="200" max-width="140"></v-img>
          </v-col>

          <v-col cols="12" sm="12" md="11" justify="start">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-2">
                  <strong>{{ perfilDeputado.ultimoStatus.siglaPartido }} - {{ perfilDeputado.ultimoStatus.siglaUf }}</strong>
                </div>
                <v-list-item-title class="headline">{{ perfilDeputado.ultimoStatus.nomeEleitoral }}</v-list-item-title>
                <v-list-item-subtitle class="mt-1">
                  <v-icon left small>person</v-icon>
                  {{ perfilDeputado.nomeCivil }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-1">
                  <v-icon left small>school</v-icon>
                  {{ perfilDeputado.escolaridade }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-1">
                  <v-icon left small>email</v-icon>
                  <strong>{{ perfilDeputado.ultimoStatus.email }}</strong>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-1">
                  <v-icon left small>phone</v-icon>
                  +55 61 {{ perfilDeputado.ultimoStatus.gabinete.telefone }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>

          <v-col cols="12" sm="12" md="12" justify="center">
           <despesas :id="deputado.id"></despesas>
          </v-col>

        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Despesas from '@/components/despesas/Despesas'

export default {
  name: "deputado",
  components: {
    Despesas
  },
  data() {
    return {
      perfilDeputado: {},
      idDeputado: null
    };
  },

  created() {
    this.idDeputado = this.$route.params.id;
    this.getDeputado(this.idDeputado);
  },

  methods: {
    ...mapActions("deputado", ["ActionGetDeputado"]),
    async getDeputado(id) {
      try {
        await this.ActionGetDeputado(id);
      } catch (err) {
        console.log(err);
      }
    },

    voltar(){
      this.$router.push({ name: 'Home' });
    }
  },

  computed: {
    ...mapState("deputado", ["deputado"])
  },

  watch: {
    deputado(novoDeputado) {
      this.perfilDeputado = novoDeputado;
    }
  }
};
</script>

<style scoped>
</style>
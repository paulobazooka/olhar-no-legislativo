<template>
  <div>
    <v-container fuid>
      <v-divider></v-divider>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <h1>Despesas</h1>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex row xs12 md2 justify-start mb-3 pl-3>
          <v-text-field
            label="Buscar por despesa"
            append-icon="search"
            single-line
            v-model="search"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex justify-end mb-3 pl-3>
          <span>Total: R$ {{ total }}</span>
          <br />
          <span>Total Líquido: R$ {{ totalLiquido }}</span>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex row xs12 justify-start>
          <v-data-table
            :items="despesasDeputado"
            :items-per-page="despesasDeputado.length"
            :headers="headers"
            :loading="showLoading"
            hide-default-footer
            no-data-text="Não foram despesas do deputado"
            loading-text="Buscando despesas"
            :search="search"
          >
            <template v-slot:item="props">
              <tr>
                <td class="text-xs-left">{{ props.item.tipoDespesa }}</td>
                <td class="text-xs-left">{{ props.item.nomeFornecedor }}</td>
                <td class="text-xs-left">{{ props.item.cnpjCpfFornecedor }}</td>
                <td class="text-xs-left">
                  <a :href="props.item.urlDocumento" target="_blank">{{ props.item.urlDocumento }}</a>
                </td>
                <td class="text-xs-left">{{ props.item.dataDocumento }}</td>
                <td class="text-xs-left">{{ props.item.valorDocumento }}</td>
                <td class="text-xs-left">{{ props.item.valorLiquido }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { formatDate } from '@/utils/formatDate'

export default {
  props: ["id"],
  data() {
    return {
      despesasDeputado: [],
      showLoading: null,
      totalLiquido: 0,
      total: 0,
      search: "",
      headers: [
        {
          sorteable: true,
          value: "tipoDespesa",
          text: "Despesa"
        },
        {
          sorteable: true,
          value: "nomeFornecedor",
          text: "Fornecedor"
        },
        {
          sorteable: true,
          value: "cnpjCpfFornecedor",
          text: "CPF/CNPJ"
        },
        {
          sorteable: true,
          value: "urlDocumento",
          text: "Nota Fiscal"
        },
        {
          sorteable: true,
          value: "dataDocumento",
          text: "Ano"
        },
        {
          sorteable: true,
          value: "valorDocumento",
          text: "Valor R$"
        },
        {
          sorteable: true,
          value: "valorLiquido",
          text: "Valor Líquido R$"
        }
      ]
    };
  },

  created() {
    this.getDespesas(this.id);
  },

  methods: {
    ...mapActions("despesas", ["ActionGetDespesas"]),
    async getDespesas(id) {
      this.showLoading = true;
      try {
        await this.ActionGetDespesas(id);
      } catch (err) {
        console.log(err);
      } finally {
        this.showLoading = false;
      }
    }
  },
  computed: {
    ...mapState("despesas", ["despesas"])
  },

  watch: {
    despesas(lista) {
      this.despesasDeputado = [];
      let total = 0;
      let totalLiquido = 0;

      lista.map(despesa => {
        total += despesa.valorDocumento;
        totalLiquido += despesa.valorLiquido;

        this.despesasDeputado.push(
          {
            codDocumento: despesa.codDocumento,
            dataDocumento: formatDate.dmy(despesa.dataDocumento),
            tipoDespesa: despesa.tipoDespesa,
            nomeFornecedor: despesa.nomeFornecedor,
            cnpjCpfFornecedor: despesa.cnpjCpfFornecedor,
            urlDocumento: despesa.urlDocumento,
            valorDocumento: despesa.valorDocumento.toString().replace('.', ','),
            valorLiquido: despesa.valorLiquido.toString().replace('.', ',')
          }
        );
      });

      this.totalLiquido = parseFloat(totalLiquido).toFixed(2).toString().replace('.', ',');
      this.total = parseFloat(total).toFixed(2).toString().replace('.', ',');
    }
  }
};
</script>
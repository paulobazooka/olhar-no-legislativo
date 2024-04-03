export interface Deputado {
  id: number;
  uri: string;
  nome: string;
  siglaPartido: string;
  uriPartido: string;
  siglaUf: string;
  idLegislatura: number;
  urlFoto: string;
  email: string;
}


export async function fetchDeputados(nome: string) {
  const response = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${nome}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  console.log(response)

  return response.json()
}

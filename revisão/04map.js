const readline = require("readline-sync");
console.clear();
const database = [
  {
    id: 1,
    nome: "Shampoo Coloral",
    preco: 8.79,
    quantidade: 5,
    marca: "Coloral",
    fornecedor: "Coloral SA"
  },
  {
    id: 2,
    nome: "Farinha de trigo",
    preco: 3.65,
    quantidade: 15,
    marca: "Dona Benta",
    fornecedor: "Usina Benta"
  },
  {
    id: 3,
    nome: "Ovos",
    preco: 15.70,
    quantidade: 21,
    marca: "Granja Fifi",
    fornecedor: "Granja Fifi LTDA"
  },
  {
    id: 4,
    nome: "Batatas",
    preco: 4.33,
    quantidade: 33,
    marca: "Nenhuma",
    fornecedor: "Seu João ME"
  },
  {
    id: 5,
    nome: "Pinga",
    preco: 3.50,
    quantidade: 40,
    marca: "Pinga ni Min",
    fornecedor: "Usina São João LTDA"
  },
  {
    id: 6,
    nome: "Ceveja Skol",
    preco: 2.79,
    quantidade: 200,
    marca: "Skol",
    fornecedor: "Ambev"
  },
  {
    id: 7,
    nome: "Arroz tipo 1",
    preco: 9.60,
    quantidade: 29,
    marca: "Tio Jão",
    fornecedor: "Cooperativa Mina

    const paraArrayString = (array, campo) => {
        return array
          .map(lista => lista[campo])
          .join(", ");
      }
      
      console.table(paraArrayString(signos, "nome"))
      console.table(paraArrayString(signos, "mes"))
      console.table(paraArrayString(signos, "elemento"))
      console.table(paraArrayString(database, "preco"))
      console.table(paraArrayString(database, "quantidade"))
      console.table(paraArrayString(database, "marca"))
      
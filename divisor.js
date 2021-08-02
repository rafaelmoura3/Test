const ItemPrecoInput = document.getElementById("item");
const QuantInput = document.getElementById("quantidade");
const ItemPreco2Input = document.getElementById("item2");
const Quant2Input = document.getElementById("quantidade2");
const ItemPreco3Input = document.getElementById("item3");
const Quant3Input = document.getElementById("quantidade3");
const ItemPreco4Input = document.getElementById("item4");
const Quant4Input = document.getElementById("quantidade4");
const ItemPreco5Input = document.getElementById("item5");
const Quant5Input = document.getElementById("quantidade5");
const ItemPreco6Input = document.getElementById("item6");
const Quant6Input = document.getElementById("quantidade6");

document.getElementById("clickMe").onclick = CalcularConta;

function CalcularConta(){
    let item = parseFloat(ItemPrecoInput.value);
    let dividirCom = parseInt(QuantInput.value);
    let item2 = parseFloat(ItemPreco2Input.value);
    let dividirCom2 = parseInt(Quant2Input.value);
    let item3 = parseFloat(ItemPreco3Input.value);
    let dividirCom3 = parseInt(Quant3Input.value);
    let item4 = parseFloat(ItemPreco4Input.value);
    let dividirCom4 = parseInt(Quant4Input.value);
    let item5 = parseFloat(ItemPreco5Input.value);
    let dividirCom5 = parseInt(Quant5Input.value);
    let item6 = parseFloat(ItemPreco6Input.value);
    let dividirCom6 = parseInt(Quant6Input.value);
    let divisao1 = (item / dividirCom);
    let divisao2 = (item2 / dividirCom2);
    let divisao3 = (item3 / dividirCom3);
    let divisao4 = (item4 / dividirCom4);
    let divisao5 = (item5 / dividirCom5);
    let divisao6 = (item6 / dividirCom6);
    let total = (divisao1 + divisao2 + divisao3 + divisao4 + divisao5 + divisao6);
    let CalGor;
    console.log("isso", item);
    console.log("quantidade", dividirCom);
    console.log("conta", divisao1);
    console.log("conta2", divisao2);
    console.log("total",total);
    console.log("gorjetas",CalGor);
  
   
   if(document.getElementById("checkbox-gorjeta").checked){
        let gorjeta = 1.10;
        document.getElementById("tip-amount").textContent = `\$ ${gorjeta.toFixed(2)}`;
        CalGor = (total * gorjeta);
        document.getElementById("valorTotal").textContent = `\$ ${CalGor}`;
    }
    else{
        let gorjeta = 0;
        document.getElementById("tip-amount").textContent = `\$ ${gorjeta.toFixed(2)}`;
        CalGor = (total);
        document.getElementById("valorTotal").textContent = `\$ ${CalGor}`;
    }

}
CalcularConta();
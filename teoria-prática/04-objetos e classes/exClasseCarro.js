class Carro{
    modelo;
    cor;
    consumo;


    constructor (modelo,cor,consumo){
        this.modelo = modelo;
        this.cor = cor;
        this.consumo = consumo;
    }
}

//criando o carro
const carro1 = new Carro('fiat','preto',1/10);

//função que recebe uma instancia de carro
function calculaConsumo(carro,precoGasolina,distanci){
    console.log ('O custo da viagem sera R$'+ (distanci*carro.consumo) * precoGasolina )

}

calculaConsumo(carro1,5.0,100.0);
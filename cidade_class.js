class Cidade{
    constructor(nome,estado,numPopulacao,numHomens,numMulheres){
        this.nome = nome
        this.estado = estado
        this.numPopulacao = numPopulacao
        this.numHomens = numHomens
        this.numMulheres = numMulheres
    }

    percetualHomens(){
        let percentual = 0.0
        percentual = (this.numHomens / this.numPopulacao) * 100.0
        return percentual
    }

    percentualMulheres(){
        let percentual = 0.0
        percentual = (this.numMulheres / this.numPopulacao) * 100.0
        return percentual
    }
}


module.exports = Cidade
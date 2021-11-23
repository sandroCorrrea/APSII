class Usuario{

    constructor(){
        this.primeiroNome = "";
        this.segundoNome  = "";
    }

    setUsuario(primeiroNomeUser, segundoNomeUser){
        this.primeiroNome = primeiroNomeUser;
        this.segundoNome  = segundoNomeUser;
    }

    getUsuario(){
        return this.primeiroNome + " " + this.segundoNome;
    }

    // FUNÇÕES ESTÃO DO GAME ESTÃO NO js/index.js
}
module.exports = Usuario;
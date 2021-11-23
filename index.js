const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const User       = require('./src/Usuario');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const usuario = new User();

app.get('/' , (req , res)=>{
    res.render('index.ejs')
});

app.get('/login' , (req , res)=>{
    res.render('home.ejs')
});

app.post('/recebeDadosEntrada' , (req , res)=>{
    var {primeiroNome, segundoNome} = req.body;
    usuario.setUsuario(primeiroNome, segundoNome);

    res.render('game', {
        primeiroNome: primeiroNome,
        segundoNome: segundoNome,
    });
})

const port = process.env.PORT || 8080;

app.listen(port, (erro) => {
    if (erro){
        console.log("ERRO AO RODAR JOGO!");
    }
});
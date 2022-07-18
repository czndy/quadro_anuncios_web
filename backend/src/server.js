const express = require('express');
const cors = require('cors');


const app = express();


//app.use(cors({ origin:'http://localhost:3333' }));
app.use(cors());


//padronização das rotas: sempre em inglês e sempre no plural, ex /users
//GET, POST, PUT, DELETE

//usado para falar que a aplicação vai se comunicar utilizando o formato JSON   
app.use(express.json());


/*
//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

app.post('/users', (req, res)=>{
    return res.json(req.body);
});

//para editar/deletar alguma informação, podemos usar os route params
app.put('/users/:id', (req, res)=>{
    return res.json({id:req.params.id});
});

*/

app.get('/', (req, res)=>{
    //return res.send('Hello World');
    return res.json({message:'Hello World'});
});

//é a porta que será usada no projeto
app.listen(5000);
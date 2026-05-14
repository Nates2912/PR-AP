//importacoes necessarias
const express = require('express');
const cors = require('cors')
const { Sequelize, DataTypes}  = require ('sequelize');


//configurando conexao com o banco de dados
const sequelize = new Sequelize('db_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//definindo o modelo de dados
//como deve ser a tabela do no banco de dados
const Cliente = sequelize.define('Cliente', {
    nome:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone:  {
        type: DataTypes.STRING,
        allowNull: false
    },
});

//configuraçao do servidor express
const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

//rotas
//rota get - listar todos os clientes
app.get('/clientes', async (req, res) => {
    try{
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error){
        res.status(500).json({ error: 'erro ao buscar clientes'});
    }
});

//rota post - criar um novo cliente
app.post('/clientes', async (req, res) => {
    const {nome, email, telefone} = req.body;
    try{
        const novoCliente = await Cliente.create({nome, email, telefone});
        res.status(201).json(novoCliente)
    } catch (error) {
        res.status(500).json({ error: 'erro ao criar cliente'})
    }
});

//iniciando o servidor e sincronizando com o banco de dados
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        console.log('Banco de dados sincronizado com sucesso!');
    });
}).catch(error => {
    console.error('erro ao conectar com o banco de dados', error);
})


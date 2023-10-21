// Query params = ?nome=nodejs
// Route params = /curso/2
// Request body = {nome:'', tipo:''}

// Testando com insomnia na rota => http://localhost:3000/cursos

const express = require('express');

const server = express();

// Permitindo alteração de dados
server.use(express.json());

// Array de cursos
const cursos = ['Node.js', 'JavaScript', 'React Native'];

// Buscando todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos)
})

// Buscando curso por index
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cursos[index])
});

// Enserindo um novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name)
    res.json(cursos)
})

// Editando um curso pelo index
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;
    return res.json(cursos)
})

// Deletando um curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    
    cursos.splice(index, 1)
    return res.json(cursos)
})

// Porta de observação
server.listen(3000);
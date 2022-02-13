const Sequelize = require('sequelize');
const dataBase = require('./db')
const Produto = require('./produto');


module.exports.consultarTodos = async() => {
    const produtos = await Produto.findAll();
    return produtos;
}

module.exports.consultarId = async(id) => {
    const produtos = await Produto.findByPk(id);
    return produtos;
}

module.exports.UpdateNome = async(id, nome) => {
    const produto = await Produto.findByPk(id);
    produto.nome = nome;
    const resultadoSave = await produto.save();
    console.log("Nome do produto atualizado");
}

module.exports.Delete = async(id) =>{
    const produto = await Produto.findByPk(id);
    produto.destroy();
}


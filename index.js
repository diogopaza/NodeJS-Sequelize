(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const crud = require('./crud');
    console.log("starting");
    try{
        //atualiza as tabelas do banco de dados
        const resultado = await database.sync();
        console.log("Banco de dados sincronizado");

       //consulta produto por ID 
       crud.consultarId(0)
        .then(result => console.log(result))
        .catch(eror => console.log("erro ao consultar produtos"));
      
       //atualiza nome do produto
       crud.UpdateNome(0,'monitor');
       
       //exclui registro
       crud.Delete(1);

        // produtos = await Produto.findAll();
        //console.log(produtos);
        /*
        const resultadoCreate = await Produto.create({
            nome: 'mouse,',
            preco: 10,
            descricao: 'usb'
        })
        console.log(resultadoCreate)*/
    }catch(error){
        console.log(error);
    }
})();
module.exports = function(app){

// mapeando todas as rotas gets que serão utilizadas na aplicação - com logim Administrador ou Atendente

   //consulta de Procedimentos a disposição
    app.get('/procedimentos', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var consultaProcedimentos = req.body;

        // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE PROCEDIMENTOS DISPONIVEIS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var procedimentoDao = new app.persistencia.ProcedimentoDao(connection);

        // Realizando a consulta
        procedimentoDao.lista (consultaProcedimentos, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    res.json(resultado);
            }

        });

    });

//--------------------------------------------------------------------------------

   //consulta de Regras a disposição
    app.get('/regras', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var consultaRegras = req.body;

        // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE PROFISSIONAIS DISPONIVEIS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var regrasDao = new app.persistencia.RegraDao(connection);

        // Realizando a consulta
        regrasDao.lista (consultaRegras, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    res.json(resultado);
            }

        });

    });

//--------------------------------------------------------------------------------
 
   //consulta de Empresas Clientes a disposição
    app.get('/parceiros', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var consultaParceiros = req.body;

        // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE PROFISSIONAIS DISPONIVEIS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var parceirosDao = new app.persistencia.ParceiroDao(connection);

        // Realizando a consulta
        parceirosDao.lista (consultaParceiros, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    res.json(resultado);
            }

        });

    });

//--------------------------------------------------------------------------------

   //consulta de Lista de Espera
    app.get('/espera', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
        //trazendo as informações do corpo da chamada para a Variavel
        var listaEspera = req.body;

        // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE PROFISSIONAIS DISPONIVEIS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var listaEsperaDao = new app.persistencia.ListaEsperaDao(connection);

        // Realizando a consulta
        listaEsperaDao.lista (listaEspera, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    res.json(resultado);
            }

        });

    });

//--------------------------------------------------------------------------------

    //consulta de Profisionais a disposição
    app.get('/profissionais', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var consultaProfissional = req.body;

        // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE PROFISSIONAIS DISPONIVEIS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var profissionalDao = new app.persistencia.ProfissionalDao(connection);

        // Realizando a consulta
        profissionalDao.lista (consultaProfissional, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    res.json(resultado);
            }

        });


    });

//--------------------------------------------------------------------------------

    
    //consulta de Agendamentos realizados 
    app.get('/agendamentos', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var consultaAgendamento = req.body;

          // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE AGENDAMETOS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var agendamentosDao = new app.persistencia.AgendamentoDao(connection);


        // Realizando a consulta
        agendamentosDao.lista (consultaAgendamento, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    console.log('Resultado da Query: '+ resultado);
                    res.json(resultado);
            }

        });

    });

//--------------------------------------------------------------------------------
    
    //consulta de usuarios cadastrados
    app.get('/usuarios', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var consultaUsuarios = req.body;

          // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE USUARIOS CADASTRADOS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var usuariosDao = new app.persistencia.UsuarioDao(connection);

        // Realizando a consulta
        usuariosDao.lista (consultaUsuarios, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    res.json(resultado);
            }

        });

    });



//--------------------------------------------------------------------------------

 
    //consulta de resumo 
    app.get('/resumo', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var consultaResumo = req.body;

          // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE AGENDAMETOS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var agendamentosDao = new app.persistencia.AgendamentoDao(connection);


        // Realizando a consulta
        agendamentosDao.listaResumo (consultaResumo, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    console.log('Resultado da Query: '+ resultado);
                    res.json(resultado);
            }

        });

    });
//-------------------------------------------------------------------------------------

    
    //consulta de resumo 
    app.get('/resumohorario', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var consultaResumoHorario = req.body;

          // Consultando Logs de andamento e rastreamento
        console.log('RECEBENDO REQUISIÇÃO - CONSULTA DE AGENDAMETOS');
        console.log('REALIZANDO CONEXÃO');
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        var agendamentosDao = new app.persistencia.AgendamentoDao(connection);


        // Realizando a consulta
        agendamentosDao.listaResumoHorario (consultaResumoHorario, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao consultar os dados: ' + erro);
            }else{
                    console.log('Consulta realizada com sucesso');
                    console.log('Resultado da Query: '+ resultado);
                    res.json(resultado);
            }

        });

    });







/********************************************************************************************************************************** */

// mapeando todas as rotas post que serão utilizadas na aplicação

    //incluindo informações de profissionais
    app.post('/profissionais/salvar', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var profissional = req.body;
        
        // Gerando Logs de andamento e rastreamento
        console.log('Dados a serem incluidos na tabela');
        console.log(profissional);
        
        // setando valores 
        profissional.USUARIO ='GRAVADO_PELA_APLICACAO';
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        
        // mapeando o BD
        var profissionalDao = new app.persistencia.ProfissionalDao(connection);

        // realizando a gravação no BD
        profissionalDao.salva(profissional, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao Gravar os dados: ' + erro);
                console.log('dados recebidos: ' + profissional);
                res.status(400).send(erro);
            }else{

                    console.log('Cadastro realizado com sucesso');
                    res.status('Dados inseridos com Sucesso: '+ resultado)
            }
        });

    });
     
//------------------------------------------------------------------------------------------------------------     

  //incluindo informações de Procedimentos
    app.post('/procedimentos/salvar', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var procedimento = req.body;
        
        // Gerando Logs de andamento e rastreamento
        console.log('Dados a serem incluidos na tabela');
        console.log(procedimento);
        
        // setando valores 
        procedimento.USUARIO ='GRAVADO_PELA_APLICACAO';
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        
        // mapeando o BD
        var profissionalDao = new app.persistencia.ProfissionalDao(connection);

        // realizando a gravação no BD
        profissionalDao.salva(procedimento, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao Gravar os dados: ' + erro);
                console.log('dados recebidos: ' + procedimento);
                res.status(400).send(erro);
            }else{

                    console.log('Cadastro realizado com sucesso');
                    res.status('Dados inseridos com Sucesso: '+ resultado)
            }
        });

    });


//------------------------------------------------------------------------------------------------------------  
  
  //incluindo informações de Regras
    app.post('/regras/salvar', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var regras = req.body;
        
        // Gerando Logs de andamento e rastreamento
        console.log('Dados a serem incluidos na tabela');
        console.log(regras);
        
        // setando valores 
        regras.USUARIO ='GRAVADO_PELA_APLICACAO';
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        
        // mapeando o BD
        var profissionalDao = new app.persistencia.ProfissionalDao(connection);

        // realizando a gravação no BD
        profissionalDao.salva(regras, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao Gravar os dados: ' + erro);
                console.log('dados recebidos: ' + regras);
                res.status(400).send(erro);
            }else{

                    console.log('Cadastro realizado com sucesso');
                    res.status('Dados inseridos com Sucesso: '+ resultado)
            }
        });

    });


//------------------------------------------------------------------------------------------------------------  
  
  //incluindo informações de Empresas Clientes
    app.post('/parceiros/salvar', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var parceiro = req.body;
        
        // Gerando Logs de andamento e rastreamento
        console.log('Dados a serem incluidos na tabela');
        console.log(parceiro);
        
        // setando valores 
        parceiro.USUARIO ='GRAVADO_PELA_APLICACAO';
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        
        // mapeando o BD
        var profissionalDao = new app.persistencia.ProfissionalDao(connection);

        // realizando a gravação no BD
        profissionalDao.salva(parceiro, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao Gravar os dados: ' + erro);
                console.log('dados recebidos: ' + parceiro);
                res.status(400).send(erro);
            }else{

                    console.log('Cadastro realizado com sucesso');
                    res.status('Dados inseridos com Sucesso: '+ resultado)
            }
        });

    });


//------------------------------------------------------------------------------------------------------------  
  
  //incluindo informações de Lista de Espera
    app.post('/espera/salvar', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var listaEspera = req.body;
        
        // Gerando Logs de andamento e rastreamento
        console.log('Dados a serem incluidos na tabela');
        console.log(listaEspera);
        
        // setando valores 
        procedimento.USUARIO ='GRAVADO_PELA_APLICACAO';
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        
        // mapeando o BD
        var listaEsperaDao = new app.persistencia.ListaEsperaDao(connection);

        // realizando a gravação no BD
        listaEsperaDao.salva(listaEspera, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao Gravar os dados: ' + erro);
                console.log('dados recebidos: ' + listaEspera);
                res.status(400).send(erro);
            }else{

                    console.log('Cadastro realizado com sucesso');
                    res.status('Dados inseridos com Sucesso: '+ resultado)
            }
        });

    });
	
	

//------------------------------------------------------------------------------------------------------------  
  
  //incluindo informações de Lista de Profisionais
    app.post('/profissionais/salvar', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var profissional = req.body;
        
        // Gerando Logs de andamento e rastreamento
        console.log('Dados a serem incluidos na tabela');
        console.log(profissional);
        
        // setando valores 
        profissional.USUARIO ='GRAVADO_PELA_APLICACAO';
                
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        
        // mapeando o BD
        var profissionalDao = new app.persistencia.ProfissionalDao(connection);

        // realizando a gravação no BD
        profissionalDao.salva(profissional, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao Gravar os dados: ' + erro);
                console.log('dados recebidos: ' + profissional);
                res.status(400).send(erro);
            }else{

                    console.log('Cadastro realizado com sucesso');
                    res.status('Dados inseridos com Sucesso: '+ resultado)
            }
        });

    });
	
//------------------------------------------------------------------------------------------------------------  
  
  //incluindo informações de Agendamentos
    app.post('/agendamentos/salvar', function(req, res){

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

        //trazendo as informações do corpo da chamada para a Variavel
        var agendamento = req.body;
        
        // Gerando Logs de andamento e rastreamento
        console.log('Dados a serem incluidos na tabela');
        console.log(agendamento);
        
        // setando valores 
        agendamento.USUARIO ='GRAVADO_PELA_APLICACAO';
        
        //carregando as informações de conexão
        var connection = app.persistencia.connectionFactory();
        
        // mapeando o BD
        var agendamentoDao = new app.persistencia.AgendamentoDao(connection);

        // realizando a gravação no BD
        agendamentoDao.salva(agendamento, function(erro, resultado){
            //trtando erros
            if(erro){
                console.log('Ocorreu erro ao Gravar os dados: ' + erro);
                console.log('dados recebidos: ' + agendamento);
                res.status(400).send(erro);
            }else{

                    console.log('Cadastro realizado com sucesso');
                    res.status('Dados inseridos com Sucesso: '+ resultado)
            }
        });

    });
	
}
var posicaoParaRemover = -1;

        $(function () {
            $("#btnSalvar").click(function () {
                adicionarContato();

                $('input').val('');
                $('#txtNome').focus();
            });

            Listar();

            $(document).on('click', '#btnExcluir', function () {

                var posicao = parseInt($(this).attr("alt"));

                var contatosStorage = JSON.parse(localStorage.getItem("contatos"));
                contatosStorage.splice(posicao, 1);
                localStorage.setItem("contatos", JSON.stringify(contatosStorage))

                alert('Contato excluído!');

                Listar();

            });


            $(document).on('click', '#btnEditar', function () {

                $('#btnAdd').hide();

                var posicao = parseInt($(this).attr("alt"));
                posicaoParaRemover = posicao;
                var contatosStorage = JSON.parse(localStorage.getItem("contatos"));

                var contato = contatosStorage[posicao];

                console.log(contato.nome);


                $("#txtNome").val(contato.nome);
                $("#txtIdade").val(contato.idade);
                $("#txtTelefone").val(contato.telefone);
                $('#btnSave').show();

            });
        });

        function adicionarContato() {

            if ($.trim($('#txtNome').val()) == '') {
                alert('Favor informar o nome!');
                $('#txtNome').focus();
                return false;
            }
            if ($.trim($('#txtIdade').val()) == '') {
                alert('Favor informar a idade!');
                $('#txtIdade').focus();
                return false;
            }
            if ($.trim($('#txtTelefone').val()) == '') {
                alert('Favor informar o telefone!');
                $('#txtTelefone').focus();
                return false;
            }
            
            }
            var contatos = {
                nome: $("#txtNome").val(),
                idade: $("#txtIdade").val(),
                telefone: $("#txtTelefone").val(),
               
            };


            alert(JSON.stringify(contatos))




        

        function Listar() {

            var contatosStorage = JSON.parse(localStorage.getItem("contatos"));

            for (var posicao in contatosStorage) {

                console.log(posicao);
                var contato = contatosStorage[posicao];

                $('#tblContatos tr:last').after('<tr><td>' + contato.nome + '</td><td>' +
                    contato.idade + '</td><td>' + contato.telefone + '</td><td>' +
                    '<button id="btnExcluir" alt="' + posicao +
                    '" class="btn btn-danger btn-sm">Excluir</button>   <button id="btnEditar" alt="'
                    + posicao + '" class="btn btn-info btn-sm">Editar</button>' +
                    '</td></tr>');
            }
        }
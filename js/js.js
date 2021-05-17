// ------------------ Scroll top com botão a partir dos 400px --------------------------
    // ------ Função para pegar altura da página com scroll ------

    $(function () {
        $(window).scroll(() => pegarAltura()); 
        $("#botao-topo").toggle();
        pegarAltura();
    });
    // UTILIZAÇÃO SCROLL() - Voltar ao topo

    function pegarAltura() {
        if ($(window).scrollTop() > 400) {
            $("#botao-topo").fadeIn(500);
        } else{
            $("#botao-topo").fadeOut(500)
        }   
    }
    $(document).ready(function(){

        // - Voltar ao topo devagar
        $(function() {
            $('#botao-topo').click(function() {
                var target = $(this.hash);
                $('html, body').animate({ scrollTop: target.offset().top }, 1000);
                return false;
            });
            });
    });

// --------------------------- Validação CPF/CNPJ ----------------------------------

    function validarCPF() {
        let cpfInformado = document.forms.form2.cpfCnpj.value;
        let cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
        let cnpjValido = /^(([0-9]{2}.[0-9]{3}.[0-9]{3}\/0001-[0-9]{2}))$/
    
        if (cpfValido.test(cpfInformado) == false || cnpjValido.test(cpfInformado) == false) {
            cpfInformado = cpfInformado.replace(/\D/g, ""); //Remove tudo o que não é dígito
    
            if (cpfInformado.length == 11) {
                cpfInformado = cpfInformado.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
                cpfInformado = cpfInformado.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos de novo (para o segundo bloco de números)
                cpfInformado = cpfInformado.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    
                document.getElementById("cpfCnpj").value = cpfInformado;
    
            } else if (cpfInformado.length == 14) {
                cpfInformado = cpfInformado.replace(/(\d{2})(\d)/, "$1.$2"); 
                cpfInformado = cpfInformado.replace(/(\d{3})(\d)/, "$1.$2"); 
                cpfInformado = cpfInformado.replace(/(\d{3})(\d)/, "$1/$2");
                cpfInformado = cpfInformado.replace(/(0001)(\d{1,2})$/, "$1-$2");

                document.getElementById("cpfCnpj").value = cpfInformado;

            } else { //se a condição for falsa então fica vermelho e dá alerta
                alert("CPF/CNPJ inválido");
                document.forms.form2.cpfCnpj.value = "";
            }
        }
    };

    //--------------------------- Âncores com JS nos Cards -------------------

    $('.card-servicos').mouseover(function(){
        $(this).css("background-color", "#08456d")
        $(this).css("color", "white")
    });
    $('.card-servicos').mouseout(function(){
        $(this).css("background-color", "white")
        $(this).css("color", "black")
    });

    $('#card-pagina-osteopatia').click(function(){
        window.location="servicos.html";
    });
    $('#card-pagina-quiropraxia').click(function(){
        window.location="servicos.html";
    });
    $('#card-pagina-tratamento').click(function(){
        window.location="servicos.html";
    });
    $('#card-pagina-manipulacao').click(function(){
        window.location="servicos.html";
    });
    $('#card-pagina-programa-terapeutico').click(function(){
        window.location="servicos.html";
    });
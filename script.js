
/*Script para ficar trocando as Screenshots*/

let imagens = document.querySelectorAll('.screenshot')
let i = 0;
let aux = i;

setInterval( function() {
    
    imagens[i].classList.remove('aparece');
    imagens[i].classList.add('desaparece');
    i++;
    aux = i;
    if(aux==4){
        i = 0 ;
        aux = i;
    }
    imagens[aux].classList.remove('desaparece');
    imagens[aux].classList.add('aparece');

    /*console.log( 'Executa infinitamente, 2 vez por segundo. i = ' + i);*/
}, 3000 );


  /*------------------------------------------------------------------

                Script para trocar a tradução da Página
    
    ------------------------------------------------------------------*/

//Valor inicial da lingua
let langInicial = 'pt-br';
//Quantidade de elementos que precisam traduzir
let QtdElementos = document.querySelectorAll('[data-lang-str]');
//Dados para as Traduções
let Traducoes = {
    'es': {
        'Login': 'Continuar como anonimo',
        'Logout': 'Eliminar cuenta',
        'Not-account': '¿No eres anonimo?',
        'Switch-account': 'Cambiar cuenta',
        'Or': 'o',
        'Sign-up': 'Inscribirse',
        'App': 'Obtener la aplicación.',
        'About': 'Información',
        'Jobs': 'Empleo',
        'Help': 'Ayuda',
        'Privacy': 'Privacidad',
        'Terms': 'Condiciones',
        'Top-accounts': 'Cuentas destacadas',
        'Locations': 'Ubicaciones',
        'Contact-Uploading': 'Subir contactos y no usuarios'
    },
    'en': {
        'Login': 'Continue as anonimo',
        'Logout': 'Remove Account',
        'Not-account': 'Not anonimo?',
        'Switch-account': 'Switch accounts',
        'Or': 'or',
        'Sign-up': 'Sign Up',
        'App': 'Get the App.',
        'About': 'About',
        'Jobs': 'Jobs',
        'Help': 'Help',
        'Privacy': 'Privacy',
        'Terms': 'Terms',
        'Top-accounts': 'Top Accounts',
        'Locations': 'Locations',
        'Contact-Uploading': 'Contact Uploading & Non-Users'
    },
    'pt-br': {
        'Login': 'Continuar como anonimo',
        'Logout': 'Remover Conta',
        'Not-account': 'Não é anonimo?',
        'Switch-account': 'Trocar de conta',
        'Or': 'ou',
        'Sign-up': 'Inscreva-se',
        'App': 'Obtenha o Aplicativo.',
        'About': 'Sobre',
        'Jobs': 'Carreiras',
        'Help': 'Ajuda',
        'Privacy': 'Privacidade',
        'Terms': 'Termos',
        'Top-accounts': 'Principais contas',
        'Locations': 'Localizações',
        'Contact-Uploading': 'Carregamento de contatos e não usuários'
    }
};

const translate = (lang = null) => {
    console.log('clicou');
    if (lang === null) {
        //Esta atribuição ocorre na inicialização da página para ter uma texto inicial
        lang = langInicial;
    }
    // Verifica se o idioma selecionado existe
    if (Traducoes[lang]) {
        //Percorre todos os elementos que precisam ser trocados
        QtdElementos.forEach((el) => {
            //Cria STR com o valor do elemento que será trocado
            let STR = el.getAttribute('data-lang-str');
            //se tiver tradução ele troca o valor do elemento
            if (Traducoes[lang][STR]) {
                //Faz a troca do texto
                el.innerText = (Traducoes[lang][STR]);
            }
        });
    }
}

//seleciona o select com as opções de lingua
let optLang = document.querySelector('#idiomas');
//console.log(optLang);

//Chama a função de tradução apenas quando o select muda de valor selecionado
optLang.addEventListener('change', (ev) => {translate(optLang.options[optLang.selectedIndex].value)});

//inicializa traduzindo a página para a lingua padrão
translate();

function saudacao(){
    let now = new Date();
    let hora = now.getHours();
    let texto;

    if (hora >= 6 && hora < 12){
      texto = "Bom dia";
    }
    else if (hora > 12 && hora < 18){
      texto = "Boa tarde";
    }
    else if (hora >= 18 || hora >= 0 && hora < 6){
      texto = "Boa noite";
    }

    let descricao = document.querySelector('p#descricao');

    descricao.innerHTML = `Olá, ${texto},`; 

    gambi = "tudo bem? seja bem vindo ao meu portfólio! meu nome e <strong>Thiago Henrique da Silva Souza</strong>, sou natural do Brasil, moro em Coronel Fabriciano Minas Gerais. <br><br> Sempre fui apaixonado por tecnologia, tive meu primeiro contato com codigo aos 14 anos mas nessa época não me aprofundei muito, atualmente estou estadando na trybe, faço um curso de <strong>desenvolvimento web fullstack.</strong>";

    descricao.innerHTML += gambi;

    let cb = document.querySelector('p#contact');
    let cc = document.querySelector('div#contato');

    cb.addEventListener('click', () => {
      cc.style.backgroundColor = 'green';
    })

    cb.addEventListener('mouseout', () => {
      cc.style.backgroundColor = 'white';
    })

    
    let bt = document.querySelector('a#topo');

   bt.addEventListener('mouseenter', () => {
      bt.style.left = '90%';
      bt.style.width = '100px';
      bt.style.fontsize = '5';

      bt.innerHTML = "Voltar ao topo";
  })

    bt.addEventListener('mouseout', () => {
      bt.style.left = '97%';
      bt.style.width = '10px';
      bt.innerHTML = "/";
    })
}

  saudacao();
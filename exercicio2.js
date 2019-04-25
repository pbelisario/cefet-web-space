// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];
  let index = 0;
  let buttonsControl = document.querySelectorAll(".controle");
  console.log(buttonsControl);
    
  for (let button of buttonsControl)
  {
      button.addEventListener("click", (e) => 
      {
        const direcao = e.target.id == "anterior" ? +1 : -1; 
        index = (index + direcao + todasAsImagens.length) % todasAsImagens.length;    
        e.target.closest("#galeria").querySelector("img").src = servidorDasImagens+todasAsImagens[index];
      });
  }
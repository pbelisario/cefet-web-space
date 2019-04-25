// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML



    let buttons = document.querySelectorAll(".botao-expandir-retrair");
    for (let button of buttons)
    {
        button.addEventListener("click", (e) => 
        {
            if (e.target.innerHTML == '+')
            {
                e.target.innerHTML = '-';
                e.target.closest("p").classList.add("expandido");
            }
            else
            {
                e.target.innerHTML = '+';
                e.target.closest("p").classList.remove("expandido");
            }
           
        });
    }

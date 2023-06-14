let NomeAlunos: string[] = [];

function Nomes(){
    let input: HTMLInputElement | null = 
    document.querySelector('#nome')!;
  
    if(input.value !== ""){
        let lista: HTMLUListElement | null =
        document.querySelector('ul')!;
        
        
        let li: HTMLLIElement = 
        document.createElement('li');
  
        let card: HTMLElement =
        document.createElement('article');
  
        let texto = 
        document.createTextNode(input.value);
  
        li.appendChild(card);
        card.appendChild(texto);
  
        lista.appendChild(li);
        NomeAlunos.push(input.value);
    }
    input.value = "";
    console.log(NomeAlunos);
  }
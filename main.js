let input = document.querySelector('input');
let text = document.querySelector('textarea');
let button = document.querySelector('button');
let container = document.querySelector('.contenitore');

button.addEventListener('click', () =>{
    let data = new Date();
    let formatDate = data.toLocaleDateString();

    if(input.value == `` || text.value == ``){
        alert('Compila tutti i campi!')
        
    } else {
        let div = document.createElement('div')
        div.style.backgroundColor = 'lightgray';
        div.style.padding = '10px';
        div.style.marginTop = '5vh';
        div.style.borderRadius = '5px';
        div.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        div.style.width = `50%`;
        div.style.marginLeft = `25%`;
        div.innerHTML = `<h2>${input.value}</h2> <p>${text.value}</p> <p>${formatDate}</p>`;
        container.appendChild(div);

        input.value = '';
        text.value = '';
    }
});
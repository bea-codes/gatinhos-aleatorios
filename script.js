const imagem = document.getElementById('imagem');

const btnGato = () => {
    fetch("https://api.thecatapi.com/v1/images/search", {headers: { 'x-api-key' : 'live_bstCuBfDwXoe6ZIvX1oPbjmAzAXCi9XefzhxVRAdWCyM8Gl0XqCzdPXpatlkTePS' }}).then((Response) => Response.json()).then((data) =>{
        console.log(data);

        imagem.src = data[0].url;
    }).catch((err) => {
        console.log('Houve um erro!', err);
    })

}
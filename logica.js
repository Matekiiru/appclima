async function buscarClimaname() {
    const cidade = document.getElementById('cidade').value;
    const url = `https://goweather.xyz/v2/weather/${cidade}`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    if(dados.message === "NOT_FOUND"){
        document.getElementById("resultado").innerHTML =
        `
        <h1>Cidade Não existe</h1>
        `;
        return;
    }

    document.getElementById("resultado").innerHTML = `
    <h2>Clima em ${cidade}</h2>
    <p>Temperatua: ${dados.temperature}</p>
    <p>Vento: ${dados.wind}</p>
    <p>Descrição: ${dados.description}</p>
    `
    ;
}

 cidade.addEventListener("keypress",function(event){
        if(event.key === "Enter" ){
            buscarClimaname();
        }
    }) 
let personajes = '';

fetch('https://rickandmortyapi.com/api/character')
.then(response => {
    // console.log(response)
    return response.json();
})
.then(data =>{

    console.log(data.length);
    for (let i = 0; i<data.results.length; i++){
        personajes += `<li class="card">
        <div class="img">
            <img src="${data.results[i].image}" alt="">
        <div/>
        <div class="name">
            ${data.results[i].name}
        <div/>
        <li/>`;

        document.getElementById('personaje').innerHTML = personajes;
    }
})

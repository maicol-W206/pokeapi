async function caracteristicas(){
var root = document.getElementById("root");
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/picachu`);
        const data = await res.json();
        console.log(data.forms[0].name)
}
caracteristicas()
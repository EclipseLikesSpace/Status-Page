const links = [
    {label: "Webpage", url: "http://localhost:8080"},
    {label: "Schematell", url: "https://schematell.up.railway.app"},
    {label: "Schematell API", url: "https://api.schematell.up.railway.app"}
]



document.onload(async function() {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const result = await fetch(link.url + '/status', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
                'Origin':'http://'
            }
        }).then((res) => res.json());

        console.log(result);
    }
});
const links = [
    {label: "Webpage", url: "http://127.0.0.1:4040"},
    //{label: "Schematell API", url: "http://api.schematell.up.railway.app"},
    //{label: "Schematell", url: "http://schematell.up.railway.app"},
]

function div(name, status, quote, isError){
    if (isError){
        return `<br><div class="container">
<h2>${name}</h2>
<p id="status">Status: ${status} "${quote}"</p>
<img src="./images/x.png" />
</div>`
}else{
        return `<br><div class="container">
<h2>${name}</h2>
<p id="status">Status: ${status} "${quote}"</p>
<img src="./images/check.png" />
</div>`
}
    }

async function main() {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        try {
            const result = await fetch(link.url + '/status', {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
                    'Origin':'http://'
                },
                timeout: 3000
            }).then((res) => res.json());
            const status = result.status;
            let isError = true
            if (toString(status).startsWith("2")){
                isError = false
            }
            const container = div(links[i].label, status, getStatus(status), isError);
            document.getElementById('content').innerHTML += container;

            console.log(result);
        }catch (e){
            const status = 408;
            const container = div(links[i].label, status, getStatus(status), true);
            document.getElementById('content').innerHTML += container;
        }
    }
    document.getElementById('tmtaw').style.display = 'none'
    document.getElementById('content').style.display = 'block'
}

main()
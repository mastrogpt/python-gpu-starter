// global variables
let chat = document.getElementById("chat").contentWindow
let display = document.getElementById("display").contentWindow
let base = location.href.replace(/index\.html$/, "")

// inizialize the chat buttons
document.addEventListener("DOMContentLoaded", function() {
    // retrieve index
    fetch(base+"api/my/mastrogpt/index")
    .then( (x)  => x.json())
    .then( (data) => {
        console.log(data)
        let insert = document.getElementById("button-area")
        data.services.forEach(service => {
            const button = document.createElement("button");
            button.setAttribute("class", "bg-blue-500 text-white font-bold py-2 px-4 rounded");
            button.textContent = service.name;
            button.onclick = function() {
                let url = base + "api/my/"+service.url
                chat.postMessage({name: service.name, type: "chat", url: url})
            };
            let = p = document.createElement("span")
            p.setAttribute("class", "p-2")
            p.appendChild(button);
            insert.appendChild(p);
            console.log("enabled "+service.name)
        });
    })
    .catch( (e) => { console.log(e); alert("ERROR: cannot load index") } )
})

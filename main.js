function chuckNorrisRandom() {
    const URL = "https://api.chucknorris.io/jokes/random";
    axios.get(URL)
        .then(response => response.data)
        .then(randomQuote => {
            const randomQuoteHTML = `
            <img src="${randomQuote.icon_url}" />
            <p><strong>${randomQuote.value}</strong></p>
            `
            document.querySelector("#chuck-norris").innerHTML = randomQuoteHTML;
        })
}

const button = document.getElementById("button");
button.addEventListener("click", chuckNorrisRandom);
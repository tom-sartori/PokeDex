let scrollHeight = window.outerHeight
let timer = true

// Increase the number of pokémons while scrolling down.
document.onscroll = function () {
    if (timer) {    // Send a request avery 500 millis min.
        if (window.scrollY + scrollHeight > document.body.scrollHeight) {
            increaseNbPokemonDisplayed()

            timer = false
            window.setTimeout(function () {
                timer = true
            }, 500)
        }
    }
}

function increaseNbPokemonDisplayed () {
    mountedApp.increaseListPokemon()
}

const app = Vue.createApp({
    data() {
        return {
            nbPokemonDisplayed: 12,
            listNamePokemon: ['bulbasaur', 'ivysaur', 'venusaur', 'charmander'],
            currentPokemon: ''
        }
    },
    methods: {
        updateCurrentPokemon(name) {
            this.currentPokemon = name
        }
    }
})


// const nbMaxPokemonDisplayed = 898
// function increaseNbPokemonDisplayed (n) {
//     if (mountedApp.nbPokemonDisplayed + n <= nbMaxPokemonDisplayed) {
//         mountedApp.nbPokemonDisplayed += n
//     }
//     else {
//         mountedApp.nbPokemonDisplayed = nbMaxPokemonDisplayed
//     }
// }
//
// // Increase the number of pokémons while scrolling down.
// let lastKnownScrollPosition = 0;
// document.onscroll = function () {
//     if (window.scrollY > lastKnownScrollPosition + 300) {
//         lastKnownScrollPosition = window.scrollY;
//         increaseNbPokemonDisplayed(4)
//     }
// }

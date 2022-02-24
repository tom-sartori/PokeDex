const app = Vue.createApp({
    data() {
        return {
            listPokemon: [],    // name and url
            offset: 0,
            limit: 12,
            currentPokemon: '',
        }
    },
    mounted() {
        this.increaseListPokemon()
    },
    methods: {
        updateCurrentPokemon(name) {    // Stop the list view and put the detail view.
            this.currentPokemon = name
        },
        increaseListPokemon () {    // Triggered while scrolling down .
            fetch('https://pokeapi.co/api/v2/pokemon/?offset=' + this.offset + '&limit=' + this.limit)
                .then(response => response.json())
                .then(data => {
                    this.listPokemon = this.listPokemon.concat(data.results)
                    this.offset += this.limit
                })
                .catch(error => console.log(error.message))
        },
        searchPokemon (event) { // Triggered by search bar.
            event.target.classList.remove('inputShake')
            fetch('https://pokeapi.co/api/v2/pokemon/' + event.target.value.toLowerCase())
                .then(response => response.json())
                .then(data => {
                    this.currentPokemon = data.name     // Send in detail view.

                    // this.listPokemon = []   // Send in list view.
                    // let element = []
                    // element['name'] = data.name
                    // this.listPokemon.push(element)

                    event.target.value = ''
                })
                .catch(error => {
                    // Add this class at the input when the value is incorect.
                    // That make shake the input.
                    event.target.classList.add('inputShake')
                })
        },
    },
})

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
        updateCurrentPokemon(name) {
            this.currentPokemon = name
        },
        increaseListPokemon () {
            fetch('https://pokeapi.co/api/v2/pokemon/?offset=' + this.offset + '&limit=' + this.limit)
                .then(response => response.json())
                .then(data => {
                    this.listPokemon = this.listPokemon.concat(data.results)
                    this.offset += this.limit
                })
                .catch(error => console.log(error.message))
        },
        searchPokemon (event) {
            fetch('https://pokeapi.co/api/v2/pokemon/' + event.target.value.toLowerCase())
                .then(response => response.json())
                .then(data => {
                    this.currentPokemon = data.name     // Send in detail view.

                    // this.listPokemon = []   // Send in list view.
                    // let element = []
                    // element['name'] = data.name
                    // this.listPokemon.push(element)
                })
                .catch(error => console.log(error.message))
        },
        refreshList () {    // Called when click on the pokedex button (nav bar).
            if (this.currentPokemon) {   // On revient de la vue détail, donc on reset currentPokemon pour afficher la vue liste.
                this.currentPokemon = ''
            }
        },
    },
})

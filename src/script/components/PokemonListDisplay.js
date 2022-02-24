app.component('pokemon-list-display', {
    props: {
        name: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            id: '',
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData () {
            // Fetch the name from the api
            fetch('https://pokeapi.co/api/v2/pokemon/' + this.name)
                .then(response => response.json())
                .then(data => {
                    this.id = data.id
                })
                .catch(error => console.log(error.message))
        },
        setCurrentPokemon () {
            this.$emit('set-current-pokemon', this.name)
        }
    },
    computed: {
        srcImage () {
            return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.largeId + '.png'
        },
        largeId () {
            // If id = 1, return 001
            return idString(this.id)
        }
    },
    template:
    /*html*/
        `
          <div>
          <button v-on:click="setCurrentPokemon">
            <figure>
              <img :alt="name" :src="srcImage">
            </figure>

            <div>
              <p>
                # {{ this.largeId }}
              </p>
              <h5>{{ name }}</h5>
            </div>
          </button>
          </div>
        `
})

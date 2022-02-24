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
            color: 'white'
        }
    },
    mounted() {
        this.fetchData()

        fetch('https://pokeapi.co/api/v2/pokemon-species/' + this.name)
            .then(response => response.json())
            .then(data => this.color = data.color.name)
            .catch(error => console.log(error.message))
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
        },
    },
    computed: {
        srcImage () {
            if (this.largeId !== '00') {    // Fetch only if valid id.
                return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.largeId + '.png'
            }
        },
        largeId () {
            // If id = 1, return 001
            return idString(this.id)
        },
        title () {
            return capitalizeFirstLetter(this.name)
        },
    },
    template:
    /*html*/
        `
          <div>
          <button 
              class="buttonListPokemon" 
              v-on:click="setCurrentPokemon" 
              :style="{ borderColor: color }"
          >
            <figure>
              <img :alt="name" :src="srcImage">
            </figure>

            <div>
              <p>
                # {{ this.largeId }}
              </p>
              <h5>{{ title }}</h5>
            </div>
          </button>
          </div>
        `
})

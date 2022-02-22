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
        // Fetch the name from the api
        fetch('https://pokeapi.co/api/v2/pokemon-form/' + this.name)
            .then(response => response.json())
            .then(data => this.id = data.id)
            .catch(error => console.log(error.message))
    },
    setup() {

    },
    methods: {

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
        <figure>
            <img :alt="name" :src="srcImage">
        </figure>

        <div>
            <p>
                <span>#</span> {{ this.largeId }}
            </p>
            <h5>{{ name }}</h5>
        </div>
  </div>
`
})

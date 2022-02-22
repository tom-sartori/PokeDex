app.component('pokemon-list-display', {
    props: {
        id: {
            type: Number,
            required: false
        },
    },
    data() {
        return {
            name: '',
        }
    },
    mounted() {
        // Fetch the name from the api
        fetch('https://pokeapi.co/api/v2/pokemon-form/' + this.id)
            .then(response => response.json())
            .then(data => this.name = data.name)
            .catch(error => console.log(error.message))
    },
    template:
    /*html*/
        `
    <div class="review-container">
        <figure>
<!--            TODO href a-->
            <a href="#">
                <img :alt="name" :src="srcImage">
            </a>
        </figure>

        <div>
            <p>
                <span>#</span> {{ idString }}
            </p>
            <h5>{{ name }}</h5>
        </div>
  </div>
`,
    setup() {

    },
    methods: {

    },
    computed: {
        srcImage () {
            return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.idString + '.png'
        },
        idString () {
            if ( (this.id / 10) < 1 ) { // [0, 9]
                return '00' + this.id
            }
            else if ( (this.id / 10) < 10) {    // [10, 99]
                return '0' + this.id
            }
            else {
                return this.id
            }
        },
    }
})

app.component('pokemon-detail-display', {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            id: '',
            characteristics: {
                height: '',
                weight: '',
            },
            abilities: [],
            types: [],
            oldName: '' // Used to refresh data
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData () {
            if (this.oldName !== this.name) {    // When the name is changed, we need to fetch new data.
                fetch('https://pokeapi.co/api/v2/pokemon/' + this.name)
                    .then(response => response.json())
                    .then(data => {
                        this.oldName = this.name
                        this.id = data.id
                        this.characteristics.height = data.height
                        this.characteristics.weight = data.weight
                        this.abilities = data.abilities
                        this.types = data.types
                    })
                    .catch(error => console.log(error.message))
            }
        }
    },
    computed: {
        title () {
            return capitalizeFirstLetter(this.name)
        },
        alt () {
            return capitalizeFirstLetter(this.name)
        },
        imgSrc () {
            this.fetchData()
            if (this.id !== '00') {
                return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + this.largeId + '.png'
            }
        },
        largeId () {
            this.fetchData()
            // If id = 1, return 001
            return idString(this.id)
        }
    },
    template:
    /*html*/
        `
          <h2 class="h2DetailPokemon">{{ title }} # {{ largeId }}</h2>
          <section class="sectionDetailPokemon">
          <div>
            <img :alt="alt" :src="imgSrc" class="imgDetailPokemon">
          </div>

          <div class="divDetailPokemon">

            <h3>Characteristics</h3>
            <ul>
              <li v-for="(value, title) in this.characteristics">
                <p>{{ title }} : {{ value }}</p>
              </li>
            </ul>

            <h3>Abilities</h3>
            <ul>
              <li v-for="ability in this.abilities">
                <p>{{ ability.ability.name }}</p>
              </li>
            </ul>

            <h3>Types</h3>
            <ul>
              <li v-for="type in this.types">
                <p>{{ type.type.name }}</p>
              </li>
            </ul>

          </div>
          </section>
        `
})

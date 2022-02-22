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
            types: []
        }
    },
    mounted() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.name)
            .then(response => response.json())
            .then(data => {
                this.id = data.id
                this.characteristics.height = data.height
                this.characteristics.weight = data.weight
                this.abilities = data.abilities
                this.types = data.types
            })
            .catch(error => console.log(error.message))
    },
    computed: {
        alt () {
            return capitalizeFirstLetter(name)
        },
        imgSrc () {
            return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + this.largeId + '.png'
        },
        largeId () {
            // If id = 1, return 001
            return idString(this.id)
        }
    },
    template:
    /*html*/
        `
        <section class="row">
          <div class="col s6">
            <img :alt="alt" :src="imgSrc">
          </div>

          <div class="col s6">
            <h3>Characteristics</h3>
            <ul>
              <li v-for="(value, title) in this.characteristics">
                <span class="attribute-title">{{ title }}</span>
                <span class="attribute-value">{{ value }}</span>
              </li>

              <span class="attribute-title">Abilities</span>
              <ul>
                <li v-for="ability in this.abilities">
                  <span class="attribute-value">{{ ability.ability.name }}</span>
                </li>
              </ul>

              <span class="attribute-title">Types</span>
              <ul>
                <li v-for="type in this.types">
                  <span class="attribute-value">{{ type.type.name }}</span>
                </li>
              </ul>

            </ul>
          </div>
        </section>
        `
})

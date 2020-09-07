import { ref } from 'vue'

class CharacterService {
  #character
  #characters

  constructor () {
    this.#character = ref({})
    this.#characters = ref([])
  }

  getCharacter () {
    return this.#character
  }

  getCharacters () {
    return this.#characters
  }

  async fetchAll () {
    try {
      const url = 'https://rickandmortyapi.com/api/character'
      const response = await fetch(url)
      const json = await response.json()

      this.#characters.value = await json.results
    } catch (error) {
      console.log(error)
    }
  }

  async fetchById (id) {
    try {
      const url = `https://rickandmortyapi.com/api/character/${id}`
      const response = await fetch(url)
      const json = await response.json()

      this.#character.value = await json
    } catch (error) {
      console.log(error)
    }
  }
}

export default CharacterService

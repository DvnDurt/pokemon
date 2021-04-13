import urls from '../utils/global';

export default class Pokemons {

    getEachPokemon() {
        return fetch(urls.pokemons)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
            })
            .then(data => {
                return data;
            })
            .catch(console.error)
    }
}
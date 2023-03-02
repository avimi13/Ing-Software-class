import { Adapter } from "./pokeApi.adpter";
import { Ability, PokeAPIResponse } from '../interface/pokeApiResponse.interface';

export class PokemonAdapter {
    constructor(public name: string, 
        public readonly id: number,
        private http: Adapter
        ) {}

    // Inyeccion de dependencia
    async getAbilities () : Promise<Ability[]>{
        const data = await this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/25`);
        const FirstAbilities = data.abilities[1].ability.name
        console.log(`Hola ${pikachu.name}, tu id es: ${pikachu.id}, tu abilidad es ${FirstAbilities}`);
        return data.abilities;
   
        
    }
    
}
const PokeApi = new Adapter();

export const pikachu = new PokemonAdapter('picachu', 25, PokeApi)
console.log(pikachu.getAbilities());

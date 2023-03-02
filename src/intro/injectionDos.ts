import { Adapter } from "./pokeApi.adapterDos";
import { Type, PokeAPIResponse } from '../interface/pokeApiResponse.interface';

export class PokemonAdapter {
    constructor(public name: string, 
        public readonly id: number,
        private http: Adapter
        ) {}

    // Inyeccion de dependencia
    async getTypes () : Promise<Type[]>{
        const data = await this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/76`);
        const FirstType = data.types[0].type.name
        console.log(`Hola ${golem.name}, tu id es: ${golem.id}, tu tipo de pokemon  'e's' ${FirstType}`);
        return data.types;
   
        
    }
    
}
const PokeApi = new Adapter();

export const golem = new PokemonAdapter('Golem', 76, PokeApi)
console.log(golem.getTypes());

import axios from "axios";
import { PokeAPIResponse } from "../interface/pokeApiResponse.interface";
import { Move } from "../interface/pokeApiResponse.interface";

export class Pokemon {
  constructor(public id: number, public name: string, public age?: number) {}
  speak() {
    console.log(`${this.name.toUpperCase()}!!! `);
  }
  scream() {
    console.log(`${this.name.toLowerCase()}!!!`);
  }
  async getMoves(): Promise<Move[]> {
    {
      // return 10;
      //instalacion de npm axios
      const { data } = await axios.get<PokeAPIResponse>(
        `https://pokeapi.co/api/v2/pokemon/9`
      );
      // console.log(data.moves[0].move.name);
      // console.log(`hola Blastoise tu primer ${data.moves[0].move.name}`);

      return data.moves;
    }
  }
}

export class human {
  constructor(public id: string, public name: string, public age?: number) {}
}
export const blastoise = new Pokemon(1, "Blastoise", 45);
// console.log(blastoise.getMoves());

export const ash = new human("flsdkfn", "Ash", 20);

  // blastoise.speak();
  // blastoise.scream();

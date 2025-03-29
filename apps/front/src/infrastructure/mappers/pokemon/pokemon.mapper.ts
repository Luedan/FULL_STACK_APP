import {
  Pokemon,
  PokemonDetailed,
} from "@/domain/entities/pokemon/pokemon.entity";
import { PokeAPIResponseOne } from "@/infrastructure/interfaces/pokeApi/pokeApiResponses";

export class PokemonMapper {
  static mapPokemonFromApiToEntity(data: PokeAPIResponseOne): Pokemon {
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
    return {
      id: data.id,
      name: data.name,
      avatar,
    };
  }

  static mapPokemonListFromApiToEntity(
    data: PokeAPIResponseOne
  ): PokemonDetailed {
    return {
      id: data.id,
      name: data.name,
      abilities: data.abilities.map((ability) => ability.ability.name),
      baseExperience: data.base_experience,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type) => type.type.name),
    };
  }
}

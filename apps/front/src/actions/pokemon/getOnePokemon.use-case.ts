import { pokeApi } from "@/config/api/pokeApi.dataSource";
import { Pokemon } from "@/domain/entities/pokemon/pokemon.entity";
import { PokeAPIResponseOne } from "@/infrastructure/interfaces/pokeApi/pokeApiResponses";
import { PokemonMapper } from "@/infrastructure/mappers/pokemon/pokemon.mapper";

/**
 * Get a pokemon by name or id
 * @param field - Name or id of the pokemon
 * @returns Promise<Pokemon>
 */
export async function getPokemonByNameOrId(
  field: string | number
): Promise<Pokemon> {
  try {
    const pokeApiResponse = await pokeApi.get<PokeAPIResponseOne>(
      `pokemon/${field}`
    );

    const pokemon = PokemonMapper.mapPokemonFromApiToEntity(pokeApiResponse);

    return pokemon;
  } catch (error) {
    throw new Error("Error fetching getPokemonByNameOrId: " + error);
  }
}

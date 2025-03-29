import { pokeApi } from "@/config/api/pokeApi.dataSource";
import { PokemonDetailed } from "@/domain/entities/pokemon/pokemon.entity";
import {
  PokeAPIPaginatedResponse,
  PokeAPIResponseOne,
} from "@/infrastructure/interfaces/pokeApi/pokeApiResponses";
import { PokemonMapper } from "@/infrastructure/mappers/pokemon/pokemon.mapper";

interface PokemonListRequest {
  page: number;
  limit?: number;
}

export async function getPokemonList({
  page,
  limit = 20,
}: PokemonListRequest): Promise<PokemonDetailed[]> {
  try {
    // const pokeList = await PokeApiRepository.getPokemonList(page, limit);
    const pokeList = await pokeApi.get<PokeAPIPaginatedResponse>(
      `/pokemon?offset=${page * limit}&limit=${limit}`
    );

    const pokeListPromises = pokeList.results.map((poke) =>
      pokeApi.get<PokeAPIResponseOne>(poke.url)
    );

    const pokemonList = await Promise.all(pokeListPromises);

    const response = pokemonList.map((poke) =>
      PokemonMapper.mapPokemonListFromApiToEntity(poke)
    );

    return response;
  } catch (error) {
    throw new Error("Error fetching getPokemonList: " + error);
  }
}

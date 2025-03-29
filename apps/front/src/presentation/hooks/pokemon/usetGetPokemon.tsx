import { getPokemonByNameOrId } from "@/actions/pokemon";
import { useQuery } from "@tanstack/react-query";

export function useGetPokemon(pokemon: string | number) {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: () => getPokemonByNameOrId(pokemon),
  });

  return { data, isLoading };
}

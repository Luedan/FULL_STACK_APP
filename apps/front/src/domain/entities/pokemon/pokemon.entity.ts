export interface Pokemon {
  id: number;
  name: string;
  avatar: string;
}

export interface PokemonDetailed {
  id: number;
  name: string;
  abilities: string[];
  baseExperience: number;
  height: number;
  weight: number;
  types: string[];
}

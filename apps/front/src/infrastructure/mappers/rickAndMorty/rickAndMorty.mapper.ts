import { RAMCharacter, RAMPaginatedResponse } from "@/domain/entities/rickAndMorty/rickAndMorty.entity";
import { Character, RickAndMortyAllResponse } from "@/infrastructure/interfaces/rickAndMortyApi/rickAndMortyResponses";

export class RickAndMortyMapper {
    
    static mapRAMCharacterToEntity(data: Character): RAMCharacter {
        return {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            type: data.type
        }
    }

  static mapRAMApiResponseToEntity(
    data: RickAndMortyAllResponse
  ): RAMPaginatedResponse {
    return {
        pages: data.info.pages,
        total: data.info.count,
        character: data.results.map((character) => this.mapRAMCharacterToEntity(character))
    };
  }
}

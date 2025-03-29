import { RickAndMortyApi } from "@/config/api/rickAndMortyApi.datasource";
import { RAMPaginatedResponse } from "@/domain/entities/rickAndMorty/rickAndMorty.entity";
import { RickAndMortyAllResponse } from "@/infrastructure/interfaces/rickAndMortyApi/rickAndMortyResponses";
import { RickAndMortyMapper } from "@/infrastructure/mappers/rickAndMorty/rickAndMorty.mapper";

export async function getAllPaginateCharacters(
  page: number,
  query?: string
): Promise<RAMPaginatedResponse> {
  try {
    const responseApi = await RickAndMortyApi.get<RickAndMortyAllResponse>(
      `/character/?page=${page}${query ? `&name=${query}` : ""}`
    );

    const response = RickAndMortyMapper.mapRAMApiResponseToEntity(responseApi);

    return response;
  } catch (error) {
    return { character: [], total: 0, pages: 0 };
  }
}

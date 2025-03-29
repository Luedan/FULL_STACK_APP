export interface RAMCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
}

export interface RAMPaginatedResponse {
    total: number;
    pages: number;
    character: RAMCharacter[];
}
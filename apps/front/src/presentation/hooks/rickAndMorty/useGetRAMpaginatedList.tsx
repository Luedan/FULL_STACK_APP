import { getAllPaginateCharacters } from "@/actions/rickAndMorty/getAllPaginateCharacters.use-case";
import { GridPaginationModel } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useGetRAMpaginatedList = () => {
  const [params] = useSearchParams();
  const query = params.get("query") || "";

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 20,
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: [
      "rickAndMorty",
      "characters",
      ...(query
        ? [query, paginationModel.page + 1]
        : [paginationModel.page + 1]),
    ],
    queryFn: async () => {
      const response = await getAllPaginateCharacters(
        paginationModel.page + 1,
        query
      );

      return response;
    },
  });

  const handlePaginationModelChange = (pm: GridPaginationModel) => {
    setPaginationModel(pm);

    refetch();
  };

  useEffect(() => {
    refetch();
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, [query, refetch]);

  return {
    data,
    handlePaginationModelChange,
    isLoading: isLoading,
    paginationModel,
  };
};

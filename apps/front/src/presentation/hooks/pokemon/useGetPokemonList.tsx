import { getPokemonList } from "@/actions/pokemon/getPokemonList.use-case";
import { GridPaginationModel } from "@mui/x-data-grid";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetPokemonList = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 20,
  });

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["pokemonList", "infinite"],
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => pages.length,
    queryFn: async ({ pageParam }) => {
      setPaginationModel((prev) => ({ ...prev, page: pageParam }));
      return getPokemonList({
        page: pageParam,
        limit: paginationModel.pageSize,
      });
    },
  });

  const handlePaginationModelChange = (
    pm: GridPaginationModel
  ) => {
    setPaginationModel(pm);

    if (data?.pageParams.includes(pm?.page)) {
      return;
    }

    fetchNextPage();
  };

  return {
    data,
    fetchNextPage: handlePaginationModelChange,
    isLoading,
    paginationModel,
  };
};

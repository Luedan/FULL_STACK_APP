import { RAMCharacter } from "@/domain/entities/rickAndMorty/rickAndMorty.entity";
import { useGetRAMpaginatedList } from "@/presentation/hooks/rickAndMorty/useGetRAMpaginatedList";
import { GridColDef, TableServerProUI } from "@repo/ui";

export const PaginationListContainer = () => {
  const { data, handlePaginationModelChange, isLoading, paginationModel } =
    useGetRAMpaginatedList();

  const cols: GridColDef<RAMCharacter>[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "species",
      headerName: "Species",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
  ];
  return (
    <TableServerProUI
      tableProps={{
        columns: cols,
        rows: data?.character || [],
        loading: isLoading,
        rowCount: data?.total,
        paginationModel,
        onPaginationModelChange: handlePaginationModelChange,
        getRowId: (row) => row.id,
      }}
      boxProps={{
        height: "400px",
      }}
      showToolbar
    />
  );
};

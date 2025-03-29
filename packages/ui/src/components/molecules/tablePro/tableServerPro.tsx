import { BoxProps } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid";
import { BoxUI } from "../../atoms/box/box";
import { TableUI } from "../../atoms/table/table";
import { CustomToolbarServerUI } from "../customToolbar/customServerToolbar";

type TableUIProps = {
  tableProps: DataGridProps;
  boxProps?: BoxProps;
  showToolbar?: boolean;
};
export const TableServerProUI = 
  ({ tableProps, boxProps, showToolbar }: TableUIProps) => {
    return (
      <BoxUI {...boxProps}>
        <TableUI
          filterMode="server"
          paginationMode="server"
          {...tableProps}
          slots={{
            ...tableProps.slots,
            ...(showToolbar ? { toolbar: CustomToolbarServerUI } : {}),
          }}
        />
      </BoxUI>
    );
  }

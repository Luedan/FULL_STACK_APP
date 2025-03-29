import { BoxProps } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid";
import { BoxUI } from "../../atoms/box/box";
import { TableUI } from "../../atoms/table/table";
import { CustomToolbarUI } from "../customToolbar/customToolbar";

type TableUIProps = {
  tableProps: DataGridProps;
  boxProps?: BoxProps;
  showToolbar?: boolean;
};
export const TableProUI = ({
  tableProps,
  boxProps,
  showToolbar = false,
}: TableUIProps) => {
  return (
    <BoxUI {...boxProps}>
      <TableUI
        {...tableProps}
        slots={{
          ...tableProps.slots,
          ...(showToolbar ? { toolbar: CustomToolbarUI } : {}),
        }}
      />
    </BoxUI>
  );
};

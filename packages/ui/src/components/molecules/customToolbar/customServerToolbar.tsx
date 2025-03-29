import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { BoxUI } from "../../atoms/box/box";
import { CustomQuickFilter } from "./CustomQuickFilter";

export const CustomToolbarServerUI = () => {
  return (
    <GridToolbarContainer
      sx={{
        marginBottom: "20px",
        justifyContent: "space-between",
        marginLeft: "4px",
      }}
    >
      <BoxUI>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
      </BoxUI>
      <CustomQuickFilter />
    </GridToolbarContainer>
  );
};

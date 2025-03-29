import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { BoxUI } from "../../atoms/box/box";

export const CustomToolbarUI = () => {
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
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
};

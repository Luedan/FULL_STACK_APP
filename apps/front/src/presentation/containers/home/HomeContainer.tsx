import { translate } from "@/presentation/shared/utils";
import { ArrowForward } from "@mui/icons-material";
import { BoxUI, ButtonUI, TypographyUI } from "@repo/ui";
import { useNavigate } from "react-router-dom";

export const HomeContainer = () => {
  const navigate = useNavigate();
  return (
    <BoxUI
      sx={{
        display: "flex",
        flex: 1,
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TypographyUI variant="h6">
        Bienvenido a la nueva plantilla con arquitectura limpia.
      </TypographyUI>
      <ButtonUI onClick={() => navigate("/app/todo")}>
        {translate("home.zustand")} <ArrowForward />
      </ButtonUI>
      <ButtonUI onClick={() => navigate("/app/pokemon")}>
        {translate("home.api")} <ArrowForward />
      </ButtonUI>
      <ButtonUI onClick={() => navigate("/app/paginationList")}>
        {translate("home.pagination")} <ArrowForward />
      </ButtonUI>
      <ButtonUI onClick={() => navigate("/app/reactTable")}>
        {translate("home.reactTable")} <ArrowForward />
      </ButtonUI>
    </BoxUI>
  );
};

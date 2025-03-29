import { BoxUI, TypographyUI } from "@repo/ui";
import "./styled.css";

export function ThinLineLoading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-slate-50">
      <div>
        <BoxUI className="flex justify-center mb-5" sx={{ marginTop: "40px" }}>
          <TypographyUI variant="h4" sx={{ color: "text.primary" }}>
            Template
          </TypographyUI>
        </BoxUI>
        <div className="progress"></div>
      </div>
    </div>
  );
}

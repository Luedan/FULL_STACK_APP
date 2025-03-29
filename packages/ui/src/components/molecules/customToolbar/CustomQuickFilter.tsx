import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { ChangeEvent, useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

export const CustomQuickFilter = () => {
  const [params] = useSearchParams();
  const query = params.get("query") || "";
  const navigate = useNavigate();
  const [queryValue, setQueryValue] = useState(query);

  const handleFilterModelChange = useDebouncedCallback((value) => {
    if (value.length) {
      navigate(`?query=${encodeURIComponent(value)}`);
    } else {
      navigate(``);
    }
  }, 500);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQueryValue(newValue);
    handleFilterModelChange(newValue);
  }, [handleFilterModelChange]);

  useEffect(() => {
    if (query !== queryValue) {
      setQueryValue(query);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]); 

  return <GridToolbarQuickFilter onChange={handleChange} value={queryValue} autoFocus />;
};

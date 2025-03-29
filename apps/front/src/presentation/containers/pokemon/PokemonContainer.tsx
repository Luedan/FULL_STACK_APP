import { useGetPokemon } from "@/presentation/hooks/pokemon/usetGetPokemon";
import { translate } from "@/presentation/shared/utils";
import { Search } from "@mui/icons-material";
import { CardContent, CardMedia } from "@mui/material";
import { BoxUI, CardUI, PaperUI, TextFieldUI, TypographyUI } from "@repo/ui";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const PokemonContainer = () => {
  const [pokemon, setPokemon] = useState<string>("");

  const { data } = useGetPokemon(pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon(event.target.value);
  };

  return (
    <BoxUI
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <PaperUI
        elevation={2}
        sx={{
          padding: 2,
          width: { sm: "70%", md: "50%", lg: "30%" },
          display: "flex",
        }}
      >
        <TextFieldUI
          label={translate("pokemon.form.input")}
          onChange={useDebouncedCallback(handleChange, 500)}
          InputProps={{
            endAdornment: <Search color="primary" />,
          }}
        />
      </PaperUI>

      {data ? (
        <CardUI
          sx={{
            width: { sm: "70%", md: "50%", lg: "30%" },
            marginTop: "10px",
          }}
          elevation={2}
        >
          <CardMedia
            sx={{ height: 300, width: "auto" }}
            image={data?.avatar}
            title={data.name}
          />
          <CardContent>
            <TypographyUI
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textTransform: "capitalize" }}
            >
              {translate("pokemon.card.id")}: {data.id}
            </TypographyUI>
            <TypographyUI
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textTransform: "capitalize" }}
            >
              {translate("pokemon.card.name")}: {data.name}
            </TypographyUI>
          </CardContent>
        </CardUI>
      ) : (
        <PaperUI
          elevation={2}
          sx={{
            padding: 2,
            width: { sm: "70%", md: "50%", lg: "30%" },
            display: "flex",
            marginTop: "10px",
          }}
        >
          <TypographyUI variant="h6" component="div">
            {translate("pokemon.card.notFound")}
          </TypographyUI>
        </PaperUI>
      )}
    </BoxUI>
  );
};

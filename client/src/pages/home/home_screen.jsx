import React from "react";
import { CardContainer, HomeScreenContainer } from "./styles";
import { CardAnuncio } from "../../components/card_anuncio/card_anuncio";

export const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <CardContainer>
        <CardAnuncio />
        <CardAnuncio />
        <CardAnuncio />
        <CardAnuncio />
      </CardContainer>
    </HomeScreenContainer>
  );
};

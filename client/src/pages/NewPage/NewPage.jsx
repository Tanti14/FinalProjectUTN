import React from "react";
import { NewPageContainer } from "./styles";
import ErrImg from "../../assets/img/svg/404error.svg";

export const NewPage = () => {
  return (
    <NewPageContainer>
      <img src={ErrImg} alt="" />
    </NewPageContainer>
  );
};

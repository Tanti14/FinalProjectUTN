import React from "react";
import DulceLogo from "../../assets/img/DulceLogo.png";
import { Card, CardImgContainer, CardTextContainer, ContactContainer } from "./styles";

export const CardAnuncio = () => {
  return (
    <Card>
      <CardImgContainer>
        <img src={DulceLogo} alt="" />
      </CardImgContainer>

      <CardTextContainer>
        <h2>Dulce Maicenita</h2>
        <p>
          Hola a todos! El dia viernes 8 de diciembre a partir de las 16hrs
          vamos a estar de feria en Plaza urquiza, del lado de calle 25 de
          Mayo. Los esperamos!
        </p>
      </CardTextContainer>

      <ContactContainer>
        <a href="https://wa.me/543815988699" target="_blank">
          Whatsapp
        </a>
      </ContactContainer>
    </Card>
  );
};

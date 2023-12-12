import React from "react";
import {
  Card,
  CardImgContainer,
  CardTextContainer,
  ContactContainer,
} from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import { faker } from '@faker-js/faker';


/* Libreria para formatear la fecha que llega desde la db */
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
/* ======================================================= */

export const CardAnuncioView = ({ anuncio }) => {
  const randomImg = faker.image.url();
  return (
    <Card>
      <CardImgContainer>
        <img src={randomImg} alt="" />
      </CardImgContainer>

      <CardTextContainer>
        <h2>{anuncio.title}</h2>
        <p>{anuncio.description}</p>
        <p>
          Anuncio creado: {dayjs(anuncio.createdAt).utc().format("DD/MM/YYYY")}
        </p>
        <p>
          Fecha del Evento: {dayjs(anuncio.date).utc().format("DD/MM/YYYY")}
        </p>
      </CardTextContainer>

      <ContactContainer>
        <a
          href={`https://wa.me/54${anuncio.user.phone}`}
          target="_blank"
          className="flex justify-center items-center gap-1"
        >
          <FaWhatsapp />
          Whatsapp
        </a>
      </ContactContainer>
    </Card>
  );
};

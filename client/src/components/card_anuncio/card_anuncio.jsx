import React from "react";
import {
  Card,
  CardActions,
  CardImgContainer,
  CardTextContainer,
  ContactContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAds } from "../../context/AdContext";
import { FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
import { faker } from "@faker-js/faker";

/* Libreria para formatear la fecha que llega desde la db */
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
/* ======================================================= */

export const CardAnuncio = ({ anuncio }) => {
  const randomImg = faker.image.url();
  const { deleteAnuncio } = useAds();

  const deleteAnuncioCheck = () => {
    Swal.fire({
      title: "Deseas eliminar esta tarea?",
      text: "Este cambio no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "Su anuncio se ha eliminado.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        deleteAnuncio(anuncio._id);
      }
    });
  };

  return (
    <Card>
      <CardImgContainer>
        <img src={randomImg} alt="" />
      </CardImgContainer>

      <CardTextContainer>
        <h2>{anuncio.title}</h2>
        <p>{anuncio.description}</p>
        <p>
          Fecha del Evento: {dayjs(anuncio.date).utc().format("DD/MM/YYYY")}
        </p>
      </CardTextContainer>

      <ContactContainer>
        <a
          href={`https://wa.me/54${anuncio.user.phone}`}
          target="_blank"
          className="flex justify-center items-center gap-2 rounded-md"
        >
          <FaWhatsapp />
          Whatsapp
        </a>
      </ContactContainer>
      
      <CardActions>
        {/* Boton Eliminar anuncio */}
        <Link
          onClick={() => {
            deleteAnuncioCheck();
          }}
          className="flex justify-center items-center gap-2 text-white bg-red-600 p-2 w-[185px] rounded-md"
        >
          <FontAwesomeIcon style={{ color: "white" }} icon={faTrashCan} />
          Eliminar
        </Link>

        {/* Boton Editar anuncio */}
        <Link
          to={`/anuncios/${anuncio._id}`}
          className="flex justify-center items-center gap-2 text-white bg-sky-600 p-2 w-[185px] rounded-md"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          Editar
        </Link>
      </CardActions>
    </Card>
  );
};

import React, { useEffect } from "react";
import { useAds } from "../../context/AdContext";
import { useAuth } from "../../context/AuthContext";
import { NavSubFrame } from "../home/styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { CardAnuncio } from "../../components/card_anuncio/card_anuncio";
import Swal from "sweetalert2";
import {
  AnunciosDisponibles,
  MisAnunciosContainer,
  NoContent,
  ProfileScreenContainer,
} from "./styles";

export const Profile = () => {
  const { anuncios, setAnuncios, getAnuncios } = useAds();
  const { isAuth, user, logout } = useAuth();
  const navigate = useNavigate();

  const loginCheckOut = () => {
    Swal.fire({
      title: "Estas seguro de que desea Salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, salir!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Has cerrado sesion",
          text: "Nos vemos pronto!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          logout();
          navigate("/");
        }, 1000);
      }
    });
  };

  useEffect(() => {
    if (anuncios.length !== 0) {
      setAnuncios([]);
    }
    getAnuncios();
  }, []);

  return (
    <ProfileScreenContainer>
      {isAuth && (
        <NavSubFrame>
          <div>
            <h1 className="text-2xl font-bold text-white">
              Mis anuncios activos
            </h1>
          </div>

          <div className="flex justify-center items-center gap-3 text-white">
          <p>Bienvenido {user.nombre}!</p>
            <Link
              to="/new-anuncio"
              className="bg-green-500 rounded-md px-3 py-1"
            >
              Crear Anuncio
            </Link>

            <Link title="Salir" onClick={loginCheckOut}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Link>
          </div>
        </NavSubFrame>
      )}
      <MisAnunciosContainer>
        {anuncios.length === 0 ? (
          <NoContent>
            <h1 className="text-2xl">No hay anuncios activos disponibles</h1>
          </NoContent>
        ) : (
          <AnunciosDisponibles>
            {anuncios
              .map((anuncio) => (
                <CardAnuncio anuncio={anuncio} key={anuncio._id} />
              ))
              .reverse()}
          </AnunciosDisponibles>
        )}
      </MisAnunciosContainer>
    </ProfileScreenContainer>
  );
};

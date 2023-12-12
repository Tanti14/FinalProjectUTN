import React, { useEffect } from "react";
import {
  CardContainer,
  GoUpBtn,
  HeroGlassCard,
  HeroImgContainer,
  HeroTextContainer,
  HomeScreenContainer,
  HomeScreenHero,
  NavSubFrame,
} from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useAds } from "../../context/AdContext";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardAnuncioView } from "../../components/card_anuncio_view/card_anuncio_view";
import Swal from "sweetalert2";
import goup from "../../assets/img/goup.png";
import rocket from "../../assets/img/svg/shoplaunch.svg";
import "animate.css";

export const HomeScreen = () => {
  const { isAuth, user, logout } = useAuth();
  const { anuncios, getAllAnuncios } = useAds();

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
    getAllAnuncios();
  }, []);

  return (
    <HomeScreenContainer>
      {isAuth ? (
        <NavSubFrame>
          <div>
            <h1 id="#" className="text-2xl font-bold text-white">
              Inicio
            </h1>
          </div>

          <div className="flex justify-center items-center gap-3 text-white">
            <p>Bienvenido {user.nombre}!</p>
            <Link
              to="/mis-anuncios"
              className="bg-green-500 rounded-md px-3 py-1"
            >
              Mis anuncios
            </Link>

            <Link title="Salir" onClick={loginCheckOut}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Link>
          </div>
        </NavSubFrame>
      ) : (
        <NavSubFrame>
          <div>
            <h1 className="text-2xl font-bold text-white">Inicio</h1>
          </div>

          <div className="flex justify-center items-center gap-3 text-white">
            <Link to="/login" className="bg-cyan-500 rounded-md px-3 py-1">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="bg-green-500 rounded-md px-3 py-1">
              Crear cuenta
            </Link>
          </div>
        </NavSubFrame>
      )}
      <HomeScreenHero>
        <HeroGlassCard>
          <HeroImgContainer>
            <img src={rocket} alt="" />
          </HeroImgContainer>
          <HeroTextContainer>
            <h2 className="font-bold">
              HACE DESPEGAR TU EMPRENDIMIENTO CON EMPRENTUC
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              voluptate, odit repudiandae voluptas saepe deserunt assumenda eos
              cum vel ratione. Veniam ratione laborum dignissimos similique quas
              libero sit, quia ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores cumque omnis libero laudantium soluta odio
              reprehenderit, nulla, excepturi exercitationem reiciendis
              voluptatum enim, at facilis! Explicabo, enim eaque.
              Exercitationem, consequuntur libero?
            </p>
          </HeroTextContainer>
        </HeroGlassCard>
      </HomeScreenHero>
      <CardContainer>
        <h2>ANUNCIOS DESTACADOS</h2>
        {anuncios.length === 0 ? (
          <>
            <h1>NO HAY ANUNCIOS PARA MOSTRAR</h1>
          </>
        ) : (
          <>
            {anuncios
              .map((anuncio) => (
                <CardAnuncioView key={anuncio._id} anuncio={anuncio} />
              ))
              .reverse()}
          </>
        )}
        <GoUpBtn>
          <a href="#">
            <img
              title="Volver arriba"
              className="w-[60px]"
              src={goup}
              alt="Back to top button"
            />
          </a>
        </GoUpBtn>
      </CardContainer>
    </HomeScreenContainer>
  );
};

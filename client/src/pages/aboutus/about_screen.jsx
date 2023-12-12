import React from "react";
import { AboutInfo, AboutSection, Header, TextContainer } from "./styles";
import { NavSubFrame } from "../home/styles";

export const AboutScreen = () => {
  return (
    <AboutSection>
      <NavSubFrame>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Sobre nosotros
              </h1>
            </div>
          </NavSubFrame>
      <AboutInfo>
        <Header>
          <h1 className="font-bold text-3xl ">¡Bienvenidos a EMPRENTUC!</h1>
          <h2 className="font-bold text-1xl"> El corazón de los microemprendedores en Tucumán</h2>
        </Header>
        <TextContainer>
          <p>
            En EMPRENTUC, creemos en el poder de los sueños y la determinación.
            Somos una plataforma dedicada a destacar y apoyar a los valientes
            microemprendedores de Tucumán que día a día están construyendo sus
            propios caminos hacia el éxito.
          </p>
          <p>
            Nuestra misión es simple pero poderosa: promover y visibilizar el
            talento local, inspirar a la comunidad y fomentar el crecimiento
            económico sostenible. En EMPRENTUC, celebramos la diversidad de
            proyectos y negocios que hacen de Tucumán un lugar vibrante y lleno
            de oportunidades.
          </p>
          <p>
            ¿Quiénes somos? Somos un equipo apasionado comprometido con el
            empoderamiento económico y la promoción de pequeños negocios.
            Trabajamos incansablemente para proporcionar una plataforma
            inclusiva donde cada microemprendedor pueda compartir su historia
            única, conectar con clientes y colaboradores, y alcanzar nuevas
            alturas.
          </p>
          <p>
            Explora nuestras historias inspiradoras, descubre productos y
            servicios únicos, y únete a nosotros en el viaje de apoyar y
            fortalecer la red de microemprendedores de Tucumán. EMPRENTUC es más
            que una plataforma; es una comunidad que impulsa el crecimiento, la
            innovación y el orgullo local.
          </p>
          <p>
            Gracias por ser parte de EMPRENTUC, donde los sueños se convierten
            en realidades y donde la pasión y la creatividad encuentran su
            hogar. ¡Juntos construimos un futuro más brillante para los
            microemprendedores de Tucumán!
          </p>
        </TextContainer>
      </AboutInfo>
    </AboutSection>
  );
};

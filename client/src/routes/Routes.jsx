import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { AdProvider } from "../context/AdContext";
import { Layout } from "../components/layout/layout";
import { LoginScreen } from "../pages/login/login_screen";
import { Register } from "../pages/register/register";
import { HomeScreen } from "../pages/home/home_screen";
import { AboutScreen } from "../pages/aboutus/about_screen";
import { Profile } from "../pages/profile/profile";
import { AdFormPage } from "../pages/AdFormPage/AdFormPage";
import { ProtectedRoute } from "../ProtectedRoute";

export const RoutesDef = () => {
  return (
    <AuthProvider>
      <AdProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" index element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<Register />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/mis-anuncios" element={<Profile />} />
                <Route path="/new-anuncio" index element={<AdFormPage />} />
                <Route path="/anuncios/:id" index element={<AdFormPage />} />
              </Route>

              {/* Rutas para despues */}
              <Route path="/anuncios" index element={<HomeScreen />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AdProvider>
    </AuthProvider>
  );
};

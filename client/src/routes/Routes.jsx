import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { LoginScreen } from "../pages/login/login_screen";
import { Register } from "../pages/register/register";
import { HomeScreen } from "../pages/home/home_screen";
import { AboutScreen } from "../pages/aboutus/about_screen";
import { Profile } from "../pages/profile/profile";
import { AuthProvider } from "../context/AuthContext";

export const RoutesDef = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" index element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mis-anuncios" element={<Profile />} />
            <Route path="/anuncios" index element={<HomeScreen />} />
            <Route path="/new-anuncio" index element={<HomeScreen />} />
            <Route path="/anuncios/:id" index element={<HomeScreen />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

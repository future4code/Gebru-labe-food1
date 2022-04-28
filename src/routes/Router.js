import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import InitialPage from "../pages/InitialPage/InitialPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SingUpPage from "../pages/SingUpPage/SingUpPage"
import AdressPage from "../pages/AdressPage/AdressPage"
import HomePage from "../pages/HomePage/HomePage"
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import CartPage from "../pages/CartPage/CartPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage"
import EditAdressPage from "../pages/EditProfilePage/EditProfilePage"
import SearchPage from "../pages/SearchPage/SearchPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/cadastro" element={<SingUpPage />} />

          <Route path="/endereco" element={<AdressPage />} />

          <Route path="/perfil" element={<ProfilePage />} />

          <Route path="/perfil/editar" element={<EditProfilePage />} />

          <Route path="/perfil/editar-endereco" element={<EditAdressPage />} />

          <Route path="/pagina-inicial" element={<HomePage />} />

          <Route path="/buscar" element={<SearchPage />} />

          <Route path="/restaurante/:id" element={<RestaurantPage />} />

          <Route path="/carrinho" element={<CartPage />} />

          <Route path="/erro" element={<ErrorPage />} />
          
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
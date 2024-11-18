
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Products } from "../Products";
import All from "../All";
import Grocery from "../Grocery";
import FreshProduce from "../FreshProduce";
import DairyProducts from "../DairyProducts";
import MeatSeafood from "../MeatSeafood";
import OtherProducts from "../OtherProducts";
import About from "../About";
import Contact from "../Contact";

function AppRoutes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Products />} />
      <Route path="/all" element={<All />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/fresh-produce" element={<FreshProduce />} />
      <Route path="/dairy-products" element={<DairyProducts />} />
      <Route path="/meat-seafood" element={<MeatSeafood />} />
      <Route path="/other-products" element={<OtherProducts />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Fallback Route */}
      <Route
        path="*"
        element={<h1 className="text-center mt-10">Page Not Found</h1>}
      />
    </RouterRoutes>
  );
}

export default AppRoutes;

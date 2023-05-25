import React from "react";

// Importa los componentes Footer y Header
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";

const portada = {
  title: "A Warm Welcome!",
  description:
    "Phasellus venenatis posuere diam nec tristique. Mauris quis felis bibendum, malesuada lorem tristique, varius metus. Pellentesque ac congue eros. Morbi ornare nunc ac eros fermentum dapibus. Proin nec erat accumsan, ullamcorper erat ac, venenatis odio. Pellentesque tristique nisi sed metus posuere ultricies.",
  buttonLabel: "Call to Action!",
};

function home() {
  return (
    <>
      <Header />
      <Body title={portada.title} description={portada.description} buttonLabel={portada.buttonLabel} /> 
      <Footer />
    </>
  );
}

export default home;

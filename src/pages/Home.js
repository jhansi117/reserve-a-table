import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const testimonialsData = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/800px-Espaguetis_carbonara.jpg", // Replace with your image URL
      dishName: "Spaghetti Carbonara",
      rating: 5,
      comment: "The best pasta I've ever had!",
    },
    {
      image:
        "https://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/master/pass/greek-salad.jpg", // Replace with your image URL
      dishName: "Greek Salad",
      rating: 4,
      comment: "Fresh and delicious, highly recommend!",
    },
    {
      image:
        "https://sweetcsdesigns.com/wp-content/uploads/2022/03/grilled-potatoes-recipe-picture.jpg", // Replace with your image URL
      dishName: "Grilled Potatoes",
      rating: 5,
      comment: "Cooked to perfection, simply amazing!",
    },
    {
      image:
        "https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg", // Replace with your image URL
      dishName: "Margherita Pizza",
      rating: 4,
      comment: "A classic that never disappoints!",
    },
    {
      image: "https://images5.alphacoders.com/431/thumb-1920-431638.jpg", // Replace with your image URL
      dishName: "Tiramisu",
      rating: 5,
      comment: "The perfect ending to a meal!",
    },
  ];
  return (
    <>
      <Main />
      <Specials />
      <Testimonials testimonials={testimonialsData} />
      <Footer />
    </>
  );
}

export default Home;

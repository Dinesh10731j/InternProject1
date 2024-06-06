import React from "react";
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Frame from "./assets/Frame.png";
import Vector from "./assets/Vector.png"

function App() {
  return (
    <>
      <section className="h-[100vh] w-[100%] bg-custom-gradient">
        <Header />
        <section className="flex flex-col justify-center items-center ">
          <Error />
        </section>
        <section className="absolute top-[200px] left-0">
<img src={Frame} alt="frame1"  className="h-[300px] w-[500px]"/>
        </section> 
     

        <section>
        <section className="absolute top-[200px] right-0">
<img src={Vector} alt="frame1"  className="h-[300px] w-[500px]"/>
        </section> 

        </section>
        
          <Footer />
        </section>
     
    </>
  );
}

export default App;

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
        <section className="absolute top-[110px] left-0 -z-7">
<img src={Frame} alt="frame1" className="h-[360.68px] w-[400.14px]"/>
        </section> 
        <section>
        <section className="absolute top-[190px] right-0">
<img src={Vector} alt="frame1"  className="h-[310.14px] w-[500.96px]"/>
        </section> 

        </section>
        
          <Footer />
        </section>
     
    </>
  );
}

export default App;

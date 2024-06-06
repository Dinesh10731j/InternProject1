import React from "react";
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="h-[100vh] w-[100%] bg-custom-gradient">
        <Header />
        <section className="flex flex-col justify-center items-center ">
          <Error />
        </section>
        <section className="absolute top-[105.96px] w-[300.14px] 
        h-[350.68px] left-[1.96px] 
        rotate-[170.19deg] bg-custom-gradient2 rounded-r-full shadow-lg  "></section>
        <section>

        <section className="absolute top-[105.96px] w-[300.14px] 
        shadow-lg
        h-[350.68px] right-[3.96px]  
        rotate-[170.19deg] bg-custom-gradient2 rounded-l-full ">

        </section>
      
        
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;

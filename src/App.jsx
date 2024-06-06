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
        <section className="absolute top-[105.96px] w-[100.14px] 
        h-[100.68px] left-[12.96px] 
        rotate-[170.19deg] bg-custom-gradient2 rounded-r-full shadow-lg  ">

        </section> 
     

        <section className="absolute top-[200.96px] w-[100.14px] 
        shadow-lg
        h-[100.68px] right-[12.96px]  
        rotate-[170.19deg] bg-custom-gradient2 rounded-l-full ">

        </section>
        
          <Footer />
        </section>
     
    </>
  );
}

export default App;

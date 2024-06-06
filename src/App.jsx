import React from 'react';
import Header from './components/Header';
import Error from './components/Error';
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <section className="h-[100vh] w-[100%] bg-custom-gradient">
    <Header/>
    <section  className='flex flex-col justify-center items-center '>
    <Error/>
    </section>
   <section>
<Footer/>
   </section>
    </section>
    
    </>
  )
}

export default App
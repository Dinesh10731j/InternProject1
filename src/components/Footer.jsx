import React from "react";
import Codynnlogo from "../assets/codynn_logo.jpg";

function Footer() {
  return (
    <>
      <footer className="h-[300px] w-[100%] p-5 bg-footerColor-customBackgroundColor z-50 ">
        <section className="flex flex-row space-x-4 justify-between">
          <section className="h-[100px] w-[400px] flex flex-col justify-center  items-center">
            <img
              src={Codynnlogo}
              alt="codynn_logo"
              className="h-[200px]  w-[200px] mt-12"
            />
          </section>
          <section>
            <nav>
              <ul
                className="flex flex-row text-white flex-wrap h-[100px] justify-center items-center   
                 w-[300px] space-x-3 space-y-3 p-6">
                <li className="mt-3">Home</li>
                <li>Challenges</li>
                <li>Versus Battles</li>
                <li>Compiler</li>
                <li>Questions</li>
                <li>About</li>
              </ul>
            </nav>
          </section>
          <section className="flex flex-col justify-center">
            <section className="flex flex-row space-x-9">
              <button className=" bg-white  h-[70px] w-[70px] rounded-full shadow-customShadow font-bold tracking-wide">
                Contact Us ➡️
              </button>
              <button className="h-[70px] w-[70px] rounded-full shadow-customShadow2 bg-[#FFD700] font-bold tracking-wide">
                Reviews ⬇️
              </button>
            </section>
          </section>
        </section>

        <section className="px-4">
          <h1 className="text-white text-8xl font-bold  text-center tracking-wide  mt-8">
            Codynn
          </h1>
        </section>
      </footer>
    </>
  );
}

export default Footer;

import React from "react";





function Header() {
  return (
    <>
      <header className="flex flex-row justify-evenly items-center">
        <section className="p-5">
          <h1 className="text-black font-bold text-lg">C<span className="text-3xl">o</span>dynn</h1>
        </section>
        <nav className="p-5">
          <ul className="flex flex-row space-x-7 ">
            <li>HOME</li>
            <li>CHALLENGES</li>
            <li>QUESTIONS</li>
          </ul>
        </nav>
        <section className="p-7">
          <button className="rounded-3xl bg-black text-white px-7 py-2 cursor-pointer shadow-custom-shadow">LOGIN</button>
        </section>
      </header>
    </>
  );
}

export default Header;

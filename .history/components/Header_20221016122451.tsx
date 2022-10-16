import Link from "next/link";
import { useState } from "react";

function Header() {

  return (
    <header className="flex justify-between max-w-7xl mx-auto font-franklin font-semibold p-5">
      <div className="flex items-center gap-5">
        <Link href="/">
          <img src="https://i.ibb.co/G5SfyNK/logo-search-grid-2x-removebg-preview-1.png" alt="logo" className="w-12 object-contain cursor-pointer"/>
        </Link>
        <a href="/" className="-ml-5 lg:mr-12 text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-baskerville">Peekaboo</a>
        <div className=" items-center gap-3 hidden md:inline-flex">
          <button className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu1" aria-expanded="false" aria-controls="collapseMenu1">Actualité</button>
          <div className="collapse collapse-horizontal" id="collapseMenu1">
            <div className="block max-w-sm">
              <ol className="flex gap-2 text-xs">
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">People</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Royauté</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Politique</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Sport</a></li>
              </ol>
            </div>
          </div>
          <button className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu2" aria-expanded="false" aria-controls="collapseMenu2">Société</button>
          <div className="collapse collapse-horizontal" id="collapseMenu2">
            <div className="block w-[270px]">
              <ol className="flex gap-2 text-xs">
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Conso</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Santé</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Gouvernement</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Programme TV</a></li>
              </ol>
            </div>
          </div>
          <button className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu3" aria-expanded="false" aria-controls="collapseMenu3">Culture G</button>
          <div className="collapse collapse-horizontal" id="collapseMenu3">
            <div className="w-[250px]">
              <ol className="flex gap-2 text-xs">
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Quizz</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Le Saviez Vous ?</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Histoire</a></li>
                <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Sciences</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <a href="/" className="text-white bg-blue-500 rounded-full px-4 py-1 cursor-pointer">S'abonner</a>
      </div>
    </header>
  )
}

export default Header
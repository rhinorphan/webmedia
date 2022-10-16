import Link from "next/link";
import { useState } from "react";

function Header() {

  const [open2, setOPen2] = useState(false);
  const toggle2 = () => {
    setOPen2(!open2);
    setOPen3(false)
  };
  const [open3, setOPen3] = useState(false);
  const toggle3 = () => {
    setOPen3(!open3);
    setOPen2(false);
  };

  return (
    <header className="flex justify-between max-w-7xl mx-auto font-franklin font-semibold p-5">
      <div className="flex items-center gap-5">
        <Link href="/">
          <img src="https://i.ibb.co/G5SfyNK/logo-search-grid-2x-removebg-preview-1.png" alt="logo" className="w-12 object-contain cursor-pointer"/>
        </Link>
        <a href="/" className="-ml-5 lg:mr-12 text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-baskerville">Peekaboo</a>
        <div className=" items-center gap-5 hidden md:inline-flex">
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
          <button className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500 ease-in-out" type="button" onClick={toggle2}>Société</button>
          {open2 && (
            <ol className="flex gap-2 text-xs">
              <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Conso</a></li>
              <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Santé</a></li>
              <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Gouvernement</a></li>
              <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Programme TV</a></li>
            </ol>
          )}
          <button className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500 ease-in-out" type="button" onClick={toggle3}>Culture G</button>
          {open3 && (
            <ol className="flex gap-2 text-xs">
              <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Quizz</a></li>
              <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Le Saviez Vous ?</a></li>
              <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Histoire</a></li>
              <li><a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-500">Sciences</a></li>
            </ol>
          )}
        </div>
        <p className="mb-4">
  <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>
<div className="min-h-[120px]">
  <div className="collapse collapse-horizontal" id="collapseWidthExample">
    <div className="block p-6 rounded-lg shadow-lg max-w-sm w-[300px]">
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
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
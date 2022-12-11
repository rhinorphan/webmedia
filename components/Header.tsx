function Header() {

  return (
    <header className="flex justify-between mx-auto font-franklin font-semibold p-3 bg-[#000000] border-b-poppy border-b-[3px] text-cement">
      <div className="flex items-center gap-5">
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
        className="block md:hidden">
          <img src="/peekaboo-logo-sm.jpeg"alt="logo" className="w-12 object-contain cursor-pointer"/>
        </a>
        <a href="/" className=" hidden md:block -ml-5 lg:mr-12">
        <img src="/peekaboo-logo.jpeg"alt="logo" className="ml-5 w-36 object-contain cursor-pointer"/>
        </a>
        <div className="items-center gap-8 hidden md:inline-flex" id="menu">
          <button className="hover:text-poppy transition duration-500 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu1" aria-expanded="false" aria-controls="collapseMenu1">Actualité</button>
          <div className="collapse collapse-horizontal" id="collapseMenu1" data-bs-parent="#menu">
            <div className="block max-w-sm">
              <ol className="flex gap-2 text-xs">
                <li><a href="/" className="hover:text-poppy transition duration-500">People</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Royauté</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Politique</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Sport</a></li>
              </ol>
            </div>
          </div>
          <button className="hover:text-poppy transition duration-500 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu2" aria-expanded="false" aria-controls="collapseMenu2">Société</button>
          <div className="collapse collapse-horizontal" id="collapseMenu2" data-bs-parent="#menu">
            <div className="block w-[267px]">
              <ol className="flex gap-2 text-xs">
                <li><a href="/" className="hover:text-poppy transition duration-500">Conso</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Santé</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Gouvernement</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Programme TV</a></li>
              </ol>
            </div>
          </div>
          <button className="hover:text-poppy transition duration-500 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu3" aria-expanded="false" aria-controls="collapseMenu3">Culture G</button>
          <div className="collapse collapse-horizontal" id="collapseMenu3" data-bs-parent="#menu">
            <div className="w-[250px]">
              <ol className="flex gap-2 text-xs">
                <li><a href="/" className="hover:text-poppy transition duration-500">Quizz</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Le Saviez Vous ?</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Histoire</a></li>
                <li><a href="/" className="hover:text-poppy transition duration-500">Sciences</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-[#000000] invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out border-r-poppy border-r-[3px] top-0 left-0 w-96" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header flex items-center justify-between p-4">
            <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel"></h5>
            <button type="button" className="btn-close btn-close-white box-content w-4 h-4 p-2 -my-5 -mr-2 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <a className="text-lg text-cement bg-poppy hover:bg-space rounded-[100px] px-4 py-2 ml-4 w-fit" href="/">Accueil</a>
          <div className="offcanvas-body flex-grow p-4 overflow-y-auto text-cement">
            <ul>
              <li className="text-lg text-poppy">Actualité</li>
                <ul className="flex flex-col py-1 px-3 gap-1">
                  <li><a className="hover:text-poppy" href="/">People</a></li>
                  <li><a className="hover:text-poppy" href="/">Royauté</a></li>
                  <li><a className="hover:text-poppy" href="/">Politique</a></li>
                  <li><a className="hover:text-poppy" href="/">Sport</a></li>
                </ul>
              <li className="text-lg text-poppy">Société</li>
                <ul className="flex flex-col py-1 px-3 gap-1">
                  <li><a className="hover:text-poppy" href="/">Conso</a></li>
                  <li><a className="hover:text-poppy" href="/">Santé</a></li>
                  <li><a className="hover:text-poppy" href="/">Gouvernement</a></li>
                  <li><a className="hover:text-poppy" href="/">Programme TV</a></li>
                </ul>
              <li className="text-lg text-poppy">Culture G</li>
                <ul className="flex flex-col py-1 px-3 gap-1">
                  <li><a className="hover:text-poppy" href="/">Quizz</a></li>
                  <li><a className="hover:text-poppy" href="/">Le Saviez vous ?</a></li>
                  <li><a className="hover:text-poppy" href="/">Histoire</a></li>
                  <li><a className="hover:text-poppy" href="/">Sciences</a></li>
                </ul>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <a className="bg-poppy text-cement rounded-full px-4 py-1 cursor-pointer">S'abonner</a>
      </div>
    </header>
  )
}

export default Header
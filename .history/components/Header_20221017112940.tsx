
function Header() {

  return (
    <header className="flex justify-between max-w-7xl mx-auto font-franklin font-semibold p-5">
      <div className="flex items-center gap-5">
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <img src="https://i.ibb.co/G5SfyNK/logo-search-grid-2x-removebg-preview-1.png" alt="logo" className="w-12 object-contain cursor-pointer"/>
        </a>
        <a href="/" className=" hidden md:block -ml-5 lg:mr-12 text-xl font-baskerville">Peekaboo</a>
        <div className=" items-center gap-3 hidden md:inline-flex">
          <button className="hover:text-poppy transition duration-500 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu1" aria-expanded="false" aria-controls="collapseMenu1">Actualité</button>
          <div className="collapse collapse-horizontal" id="collapseMenu1">
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
          <div className="collapse collapse-horizontal" id="collapseMenu2">
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
          <div className="collapse collapse-horizontal" id="collapseMenu3">
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
        <div className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-cement invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header flex items-center justify-between p-4">
            <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel">Menu</h5>
            <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
            <ul>
              <li>Actualité</li>
                <ul className="py-2">
                  <li>People</li>
                  <li>Royauté</li>
                  <li>Politique</li>
                  <li>Sport</li>
                </ul>
              <li>Société</li>
              <li>Culture G</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <a className="bg-poppy text-cement rounded-full px-4 py-1 cursor-pointer">S'abonner</a>
      </div>
    </header>
  )
}

export default Header
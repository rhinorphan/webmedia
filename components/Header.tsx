import Link from "next/link";

function Header() {

  return (
    <header className="flex justify-between max-w-7xl mx-auto font-franklin font-semibold p-5">
      <div className="flex items-center gap-5">
        <Link href="/">
          <img src="https://i.ibb.co/G5SfyNK/logo-search-grid-2x-removebg-preview-1.png" alt="logo" className="w-12 object-contain cursor-pointer"/>
        </Link>
        <a href="/" className="-ml-5 lg:mr-12 text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-baskerville">Webmedia</a>
        <div className=" items-center gap-5 hidden md:inline-flex">
          <a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent duration-500">Actu</a>
          <a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent duration-500">Politique</a>
          <a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent duration-500">Mode</a>
          <a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent duration-500">Beauté</a>
          <a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent duration-500">Vidéo</a>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <a href="/" className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Sign In</a>
        <a href="/" className="text-white bg-blue-500 rounded-full px-4 py-1 cursor-pointer">Newsletter</a>
      </div>
    </header>
  )
}

export default Header
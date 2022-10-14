import Link from "next/link";

function Header() {

  return (
    <header className="flex justify-between max-w-7xl mx-auto font-franklin font-semibold p-5">
      <div className="flex items-center gap-5">
        <Link href="/">
          <img src="https://i.ibb.co/G5SfyNK/logo-search-grid-2x-removebg-preview-1.png" alt="logo" className="w-12 object-contain cursor-pointer"/>
        </Link>
        <a href="/" className="-ml-5 lg:mr-12 text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-baskerville">Peekaboo</a>
        <div className=" items-center gap-5 hidden md:inline-flex">
          <a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent duration-500">Actu</a>
          <a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent duration-500">Société</a>
          <a href="/" className="hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text hover:text-transparent duration-500">Culture G</a>
          <button id="dropdownRightButton" data-dropdown-toggle="dropdownRight" data-dropdown-placement="right" className="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Test <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>

<div id="dropdownRight" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRightButton">
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
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
function Header() {

  return (
    <footer className="flex justify-center mx-auto font-franklin text-xs md:text-sm font-semibold bg-[#000000] border-t-poppy border-t-2 text-cement mt-10">
      <div className="grid grid-cols-3 items-center place-content-center  md:flex md: flex-row gap-4 text-center p-3">
        <div className="col-span-2">
          <p className="text-gray-800">
            © 2022 Peekaboo - Tous droits réservés
          </p>
        </div>
        <div>
          <a href="/" className="hover:text-poppy">
            CGU
          </a>
        </div>
        <div>
          <a href="/" className="hover:text-poppy">
            Mentions Légales
          </a>
        </div>
        <div>
          <a href="/" className="hover:text-poppy">
            Publicité
          </a>
        </div>
        <div>
          <a href="/" className="hover:text-poppy">
            Équipe éditoriale
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Header
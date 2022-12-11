function Header() {

  return (
    <footer className="flex justify-center mx-auto font-franklin text-xs md:text-sm font-semibold bg-[#000000] border-t-poppy border-t-2 text-cement mt-10">
      <div className="flex flex-row gap-4 text-center p-4">
        <p className="text-gray-800">
          © 2022 Peekaboo - Tous droits réservés
        </p>
        <span>|</span>
        <a href="/" className="hover:text-poppy">
          CGU
        </a>
        <span>|</span>
        <a href="/" className="hover:text-poppy">
          Mentions Légales
        </a>
        <span>|</span>
        <a href="/" className="hover:text-poppy">
          Publicité
        </a>
        <span>|</span>
        <a href="/" className="hover:text-poppy">
          Équipe éditoriale
        </a>
      </div>
    </footer>
  )
}

export default Header
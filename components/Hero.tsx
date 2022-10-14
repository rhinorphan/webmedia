
function Hero() {
  return (
    <div className='flex items-center justify-between rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 py-10 lg:py-5 min-h-[450px]'>
        <div className='flex flex-col text-left px-10 gap-y-10'>
          <h1 className='text-5xl lg:text-6xl font-baskerville font-semibold'><span className='underline decoration-white decoration-4'>Peekaboo</span> rassemble le meilleur de l'actu digitale</h1>
          <h2 className='font-franklin'>Retrouvez le meilleur de l'actualité et rejoignez des milliers de lecteurs.</h2>
        </div>
        <img src="https://i.ibb.co/G5SfyNK/logo-search-grid-2x-removebg-preview-1.png" alt="Medium" className="hidden md:inline-flex w-96 lg:w-[1200px]"/>
      </div>
  )
}

export default Hero
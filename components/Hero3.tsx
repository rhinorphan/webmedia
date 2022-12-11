import Link from 'next/link'
import { urlFor } from "../sanity";

interface Props {
  props: {
    _id: string;
    _createdAt: string;
    publishedAt: string;
    title: string;
    author: {
      name: string;
      image: string;
    };
    description: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    slug: {
      current: string;
    };
    body: [object];
  };
};

function Hero3({props} : Props) {
  return (
    <div className='flex flex-row gap-6 md:justify-around'>
          <Link key={props._id} href={`/actu/${props.slug.current}`}>
          <div className='group border-poppy border-[3px] rounded-2xl overflow-hidden md:overflow-visible cursor-pointer card min-w-[350px] md:border-0 md:max-w-xl md:items-center bg-[#000000] md:bg-opacity-0 shadow-2xl md:shadow-none z-50'>
              <div className='overflow-hidden md:overflow-visible rounded-xl'>
                <img src={
                  urlFor(props.mainImage).url()!
                } alt="" className='w-full h-56 md:h-96 min-h-[225px] object-cover group-hover:scale-105 md:rounded-2xl md:border-poppy md:border-[3px] hover:scale-105'/>
                <div className='flex p-5 md:p-2 h-36 md:h-fit  items-center md:justify-center md:-mt-20'>
                  <div className='flex flex-col justify-around h-full md:justify-end md:items-start md:content-start md:z-50 md:bg-poppy md:p-4 md:max-w-[300px] md:rounded-2xl md:border-[#000000] md:border-[3px] md:shadow-2xl'>
                    <p className='font-semibold font-baskerville text-sm'>{props.title}</p>
                    <p className='text-xs font-franklin'>{props.description} by <span className='text-poppy bg-clip-text text-transparent font-semibold'>{props.author.name}</span></p>
                  </div>
                  <img src={urlFor(props.author.image).url()!} alt="" className='h-12 w-12 p-1 md:hidden'/>
                </div>
              </div>
            </div>
          </Link>
    </div>
  )
}

export default Hero3
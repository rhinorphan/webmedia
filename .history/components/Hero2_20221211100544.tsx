import Link from 'next/link'
import { urlFor } from "../sanity";

interface Props {
  props1: [{
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
  }]
  props2: [{
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
  }]
  props3: [{
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
  }]
};

function Hero2({props1, props2, props3} : Props) {
  return (
    <div className='flex justify-center items-center lg:w-full'>
        <div className='flex overflow-x-scroll gap-6 font-baskerville max-w-screen-xl mx-4 overflow-y-hidden h-fit scroll py-4'>
        {props1.map(prop => (
          <Link key={prop._id} href={`/actu/${prop.slug.current}`}>
            <div className='group border-poppy border-[3px] rounded-2xl overflow-hidden cursor-pointer card min-w-[350px]'>
              <div className='overflow-hidden rounded-xl'>
                <img src={
                  urlFor(prop.mainImage).url()!
                } alt="" className='w-full h-56 min-h-[225px] object-cover group-hover:scale-105'/>
                <div className='flex p-5 md:p-2 bg-white h-36 items-center'>
                  <div className='flex flex-col justify-around h-full'>
                    <p className='font-semibold font-baskerville text-sm'>{prop.title}</p>
                    <p className='text-xs font-franklin'>{prop.description} by <span className='text-poppy bg-clip-text text-transparent font-semibold'>{prop.author.name}</span></p>
                  </div>
                  <img src={urlFor(prop.author.image).url()!} alt="" className='h-12 w-12 p-1'/>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Hero2
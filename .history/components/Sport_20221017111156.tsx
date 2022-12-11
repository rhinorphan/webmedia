import Link from 'next/link'
import { urlFor } from "../sanity";

interface Props {
  props: [{
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

function Sport({props} : Props) {
  return (
    <div className='text-gray-800'>
      <div className='text-2xl md:text-3xl lg:text-5xl font-franklin font-bold mt-5 p-2 md:p-4 text-white'>
        <h1>Sport</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-4'>
      {props.map(prop => (
          <Link key={prop._id} href={`/actu/${prop.slug.current}`}>
            <div className='group border-poppy border-[3px] rounded-2xl overflow-hidden cursor-pointer card'>
              <div className='overflow-hidden rounded-xl'>
                <img src={
                  urlFor(prop.mainImage).url()!
                } alt="" className='w-full md:max-h-56 md:min-h-[225px] object-cover group-hover:scale-105'/>
                <div className='flex p-5 md:p-2 bg-white h-32 items-center'>
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

export default Sport
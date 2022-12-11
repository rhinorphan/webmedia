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

function ProgrammeTv({props} : Props) {
  return (
    <div className='text-gray-800'>
      <div className='relative text-xl lg:text-2xl font-franklin font-bold mt-5 p-4 md:p-4 bg-poppy w-fit ml-4 rounded-2xl border-[#000000] border-[3px] z-50'>
      <h1>Programme TV</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-4 -mt-8'>
        {props.map(prop => (
          <Link key={prop._id} href={`/societe/${prop.slug.current}`}>
            <div className='group border-poppy border-[3px] rounded-2xl overflow-hidden cursor-pointer card bg-[#000000] shadow-2xl'>
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

export default ProgrammeTv
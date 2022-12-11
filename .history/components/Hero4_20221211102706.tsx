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
  }];
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
  }];
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

function Hero4({props} : Props) {
  return (
    <div className='flex flex-row gap-6'>
      {props.map(prop => (
          <Link key={prop._id} href={`/culture/${prop.slug.current}`}>
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
  )
}

export default Hero4
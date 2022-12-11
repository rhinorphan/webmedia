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

function Hero3({props} : Props) {
  return (
    <div className='flex flex-row gap-6'>
          <Link key={props._id} href={`/actu/${props.slug.current}`}>
            <div className='group border-poppy border-[3px] rounded-2xl overflow-hidden cursor-pointer card min-w-[350px]'>
              <div className='overflow-hidden rounded-xl'>
                <img src={
                  urlFor(props.mainImage).url()!
                } alt="" className='w-full h-56 min-h-[225px] object-cover group-hover:scale-105'/>
                <div className='flex p-5 md:p-2 bg-white h-36 items-center'>
                  <div className='flex flex-col justify-around h-full'>
                    <p className='font-semibold font-baskerville text-sm'>{props.title}</p>
                    <p className='text-xs font-franklin'>{props.description} by <span className='text-poppy bg-clip-text text-transparent font-semibold'>{props.author.name}</span></p>
                  </div>
                  <img src={urlFor(props.author.image).url()!} alt="" className='h-12 w-12 p-1'/>
                </div>
              </div>
            </div>
          </Link>
    </div>
  )
}

export default Hero3
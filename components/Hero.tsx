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
  }
};

function Hero({props} : Props) {
  return (
    <section className='md:my-6'>
        <Link href={`/actu/${props.slug.current}`}>
        <div className="my-6 cursor-pointer w-full overflow-visible md:rounded-2xl">
          <img src={urlFor(props.mainImage).url()!} alt="" className='object-cover w-full opacity-75 md:rounded-2xl max-h-[75vh] border-y-poppy border-y-[3px] md:border-poppy md:border-[3px] hover:scale-105'/>
          <div className="px-4 -mt-28 md:-mt-48 relative">
            <div className="flex flex-col justify-end items-start content-start z-50 bg-poppy border-[#000000] border-[3px] p-4 max-w-xs md:max-w-sm rounded-2xl h-fit shadow-2xl">
              <h2 className="text-4xl font-franklin font-bold text-white sm:text-5xl mb-5 border-b-[3px] pb-6">
              À la Une
              </h2>
              <p className="text-lg font-baskerville font-bold md:text-xl">
                {props.title}
              </p>
              <p className="text-sm font-baskerville">
                {props.description}
              </p>
            </div>
          </div>
          </div>
        </Link>
    </section>
  )
}

export default Hero
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {sanityClient} from "../sanity";
import ProgrammeTv from '../components/ProgrammeTv';

interface Props {
  ptv: [{
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
}

export default function ptv({ ptv}: Props) {
  return (
    <div className="bg-[#000000] text-[#FFFF]">
      <Head>
        <title>Peekaboo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <div className='mx-auto'>
        <div className=''>
          <div className=''>
          <ProgrammeTv props={ptv}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export const getServerSideProps = async () => {

  const queryPtv = `*[_type == "societe" && "Programme TV" in categories[]->title] {
    _id,
    title,
    author -> {
    name,
    image
  },
   description,
   mainImage,
   slug
  }`;

  const ptv = await sanityClient.fetch(queryPtv);
  
  return {
    props: {
      ptv,
    }
  }
};
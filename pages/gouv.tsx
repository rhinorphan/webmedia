import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {sanityClient} from "../sanity";
import Gouv from '../components/Gouv';

interface Props {
  gouv: [{
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

export default function gouv({ gouv}: Props) {
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
          <Gouv props={gouv}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export const getServerSideProps = async () => {

  const queryGouv = `*[_type == "societe" && "Gouvernement" in categories[]->title] {
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

  const gouv = await sanityClient.fetch(queryGouv);
  
  return {
    props: {
      gouv,
    }
  }
};
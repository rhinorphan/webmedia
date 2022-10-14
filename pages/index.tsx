import Head from 'next/head';
import Header from '../components/Header';
import Sport from '../components/Sport';
import Hero from '../components/Hero';
import {sanityClient} from "../sanity";
import Royaute from '../components/Royaute';

interface Props {
  royaute: [{
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
  sport: [{
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
  politiques: [{
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

export default function Home({ royaute, sport, politiques}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Peekaboo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <Hero />
      <Royaute props={royaute}/>
      <Sport props={sport}/>
    </div>
  );
}

export const getServerSideProps = async () => {

  const queryRoyaute = `*[_type == "actu" && "Royauté" in categories[]->title] {
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

  const querySport = `*[_type == "actu" && "Sport" in categories[]->title] {
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

  const queryPolitique = `*[_type == "actu" && "Politique" in categories[]->title] {
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

  
  const royaute = await sanityClient.fetch(queryRoyaute);
  const sport = await sanityClient.fetch(querySport);
  const politiques = await sanityClient.fetch(queryPolitique);

  return {
    props: {
      royaute,
      sport,
      politiques,
    }
  }
};

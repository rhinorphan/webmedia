import Head from 'next/head';
import Header from '../components/Header';
import Sport from '../components/Sport';
import Hero from '../components/Hero';
import {sanityClient} from "../sanity";
import Royaute from '../components/Royaute';
import Hero2 from '../components/Hero2';
import People from '../components/People';
import Politique from '../components/Politique';
import Santé from '../components/Santé';
import Conso from '../components/Conso';
import Hero3 from '../components/Hero3';
import Hero4 from '../components/Hero4';

interface Props {
  alaune: [{
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
  hero2: [{
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
  hero3: [{
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
  hero4: [{
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
  people: [{
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
  conso: [{
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
  sante: [{
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
  programmeTv: [{
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

export default function Home({ people, royaute, sport, politiques, alaune, hero2, sante, conso, gouv, programmeTv}: Props) {
  return (
    <div className="bg-[#000000] text-cement">
      <Head>
        <title>Peekaboo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <div className='max-w-6xl mx-auto'>
        <Hero props={alaune}/>
        <div className='flex justify-center items-center lg:w-full'>
        <div className='flex flex-row overflow-x-scroll gap-6 font-baskerville max-w-screen-xl mx-4 overflow-y-hidden h-fit scroll py-4'>
        <Hero2 props={hero2}/>
        <Hero3 props={hero3}/>
        <Hero4 props={hero4}/>
        </div>
        </div>
        <div><h1 className='text-2xl md:text-3xl lg:text-4xl font-franklin font-bold mt-20 ml-1 md:ml-0 p-2 md:p-4 bg-poppy max-w-fit rounded-2xl'>Actualité</h1></div>
        <People props={people}/>
        <Royaute props={royaute}/>
        <Politique props={politiques}/>
        <Sport props={sport}/>
        <div><h1 className='text-2xl md:text-3xl lg:text-4xl font-franklin font-bold mt-20 ml-1 md:ml-0 p-2 md:p-4 bg-poppy max-w-fit rounded-2xl'>Société</h1></div>
        <Santé props={sante}/>
        <div><h1 className='text-2xl md:text-3xl lg:text-4xl font-franklin font-bold mt-20 ml-1 md:ml-0 p-2 md:p-4 bg-poppy max-w-fit rounded-2xl'>Culture G</h1></div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {

  const queryHero = `*[_type in ["actu"] && "À la une" in categories[]->title] | order(_createdAt desc)[0] {
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

  const queryHero2 = `*[_type in ["societe"] && "À la une" in categories[]->title] | order(_createdAt desc)[0..1] {
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

  const queryHero3 = `*[_type in ["actu"] && "À la une" in categories[]->title] | order(_createdAt desc)[1] {
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

  const queryHero4 = `*[_type in ["culture"] && "À la une" in categories[]->title] | order(_createdAt desc)[0..1] {
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

  const queryPeople = `*[_type == "actu" && "People" in categories[]->title] {
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

  const querySante = `*[_type == "societe" && "Santé" in categories[]->title] {
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

  const alaune = await sanityClient.fetch(queryHero);
  const hero2 = await sanityClient.fetch(queryHero2);
  const hero3 = await sanityClient.fetch(queryHero3);
  const hero4 = await sanityClient.fetch(queryHero4);
  const people = await sanityClient.fetch(queryPeople);
  const royaute = await sanityClient.fetch(queryRoyaute);
  const sport = await sanityClient.fetch(querySport);
  const politiques = await sanityClient.fetch(queryPolitique);
  const sante = await sanityClient.fetch(querySante);

  return {
    props: {
      alaune,
      hero2,
      hero3,
      hero4,
      people,
      royaute,
      sport,
      politiques,
      sante,
    }
  }
};

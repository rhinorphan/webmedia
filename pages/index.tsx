import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
import Gouv from '../components/Gouv';
import ProgrammeTv from '../components/ProgrammeTv';
import Quizz from '../components/Quizz';
import LeSaviezVous from '../components/LeSaviezVous';
import Histoire from '../components/Histoire';
import Sciences from '../components/Sciences';

interface Props {
  alaune: {
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
  };
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
  hero3: {
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
  };
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
  quizz: [{
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
  leSaviezVous: [{
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
  histoire: [{
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
  sciences: [{
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

export default function Home({ people, royaute, sport, politiques, alaune, hero2, hero3, hero4, sante, conso, gouv, programmeTv, quizz, leSaviezVous, histoire, sciences}: Props) {
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
        <div className='max-w-6xl mx-auto'>
          <Hero props={alaune}/>
          <div className='flex justify-center rotate-180 text-poppy -mt-20 mb-4'>
            <svg className="w-60 h-60" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              </path>
            </svg>
          </div>
        </div>
        <div className='flex justify-center items-center md:w-full alaune pb-10'>
        <div className='flex flex-row overflow-x-scroll gap-6 font-baskerville max-w-5xl md:w-[90%] mx-4 overflow-y-hidden h-fit scroll py-4 md:flex-col md:overflow-visible'>
        <Hero2 props={hero2}/>
        <div className='hidden md:flex justify-end self-end text-poppy -rotate-[80deg] w-fit mb-4'>
          <svg className="w-60 h-60" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            </path>
          </svg>
        </div>
        <Hero3 props={hero3}/>
        <div className='flex justify-start text-poppy transform -scale-x-100 w-fit rotate-[210deg] mb-10 -mt-4'>
          <svg className="w-60 h-60" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            </path>
          </svg>
        </div>
        <Hero4 props={hero4}/>
        </div>
        </div>
        <div className='actu'>
          <div className='content pb-10'>
          <div className='flex mx-auto text-[#000000] rotate-[260deg] transform -scale-x-100 w-fit -mt-4'>
          <svg className="w-60 h-60" viewBox="0 0 69 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.563538 86.4441C9.62047 89.2172 16.6734 91.0373 25.3582 87.062C32.131 83.9619 38.9967 80.1472 44.485 75.0561C50.4537 69.5194 57.9022 61.3399 53.1364 53.1378C49.3227 46.5744 43.2597 40.2549 43.2597 32.3089C43.2597 23.5235 48.7541 18.3068 54.9775 12.9941C58.6952 9.82034 63.0893 5.84965 65.693 1.65486C66.8291 -0.175672 57.9801 2.37935 56.7613 2.69535C56.4809 2.76805 57.7534 3.40302 58.0609 3.80379C59.7892 6.05612 60.7498 8.83608 62.4864 11.1169C66.0039 15.7368 66.9283 3.54324 68.4493 1.40005" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            </path>
          </svg>
        </div>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-franklin font-bold ml-1 md:ml-4 p-2 md:p-4 bg-[#000000] max-w-fit rounded-2xl border-poppy border-[3px] shadow-2xl'>
              Actualité
            </h1>
          </div>
          <People props={people}/>
          <Royaute props={royaute}/>
          <Politique props={politiques}/>
          <Sport props={sport}/>
          </div>
          </div>
          <div className='alaune'>
          <div className='pb-10'>
            <div className='flex justify-center rotate-[90deg] text-poppy mx-auto mb-10 w-fit'>
              <svg className="w-60 h-60" viewBox="0 0 106 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.746735 34.5184C12.2021 40.1368 19.6014 41.495 29.6823 33.0404C36.0718 27.6817 42.1501 19.6964 45.0862 11.851C46.7881 7.30351 40.6898 12.0318 39.6346 13.0432C27.4261 24.7444 22.6035 43.8023 31.4757 58.851C37.2579 68.6586 47.5163 67.3307 56.3712 62.5164C69.8751 55.1746 77.5257 39.8696 80.2223 25.2514C81.1193 20.3886 84.6829 5.82289 78.8378 2.65785C73.9949 0.0354855 72.0976 9.61317 71.6643 12.5431C71.0465 16.7204 70.0313 25.7894 73.1645 29.1607C77.6582 33.9957 86.6118 27.5772 89.8445 24.3227C95.9834 18.1424 100.46 9.32842 104.943 1.91147C105.273 1.36535 101.764 3.3297 101.147 3.66784C99.3793 4.63577 97.2951 4.84168 95.6089 5.96364C94.3579 6.79605 88.7443 12.6083 93.6037 10.5208C95.3164 9.785 103.323 1.07071 103.701 1.3055C105.246 2.26341 104.699 13.9403 104.581 16.0977C104.296 21.2928 97.1835 12.0461 96.4366 10.6636" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                </path>
              </svg> 
            </div>       
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-franklin font-bold ml-1 md:ml-4 p-2 md:p-4 bg-[#000000] max-w-fit rounded-2xl border-poppy border-[3px] shadow-2xl'>
              Société
            </h1>
          </div>
          <Conso props={conso}/>
          <Santé props={sante}/>
          <Gouv props={gouv}/>
          <ProgrammeTv props={programmeTv}/>
          </div>
          </div>
          <div className='actu'>
          <div className='content'>
            <div className='flex text-[#000000] w-fit mx-auto -rotate-[70deg] mb-4'>
              <svg className="w-60 h-60" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                </path>
              </svg>
            </div>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-franklin font-bold ml-1 md:ml-4 p-2 md:p-4 bg-[#000000] max-w-fit rounded-2xl border-poppy border-[3px] shadow-2xl'>
              Culture G
            </h1>
          </div>
          <Quizz props={quizz}/>
          <LeSaviezVous props={leSaviezVous}/>
          <Histoire props={histoire}/>
          <Sciences props={sciences}/>
          </div>
        </div>
      </div>
      <Footer/>
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

  const queryConso = `*[_type == "societe" && "Conso" in categories[]->title] {
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

  const queryPTV = `*[_type == "societe" && "Programme TV" in categories[]->title] {
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

  const queryQuizz = `*[_type == "culture" && "Quizz" in categories[]->title] {
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

  const queryLSV = `*[_type == "culture" && "Le Saviez Vous ?" in categories[]->title] {
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

  const queryHistoire = `*[_type == "culture" && "Histoire" in categories[]->title] {
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

  const querySc = `*[_type == "culture" && "Sciences" in categories[]->title] {
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
  const conso = await sanityClient.fetch(queryConso);
  const gouv = await sanityClient.fetch(queryGouv);
  const programmeTv = await sanityClient.fetch(queryPTV);
  const quizz = await sanityClient.fetch(queryQuizz);
  const leSaviezVous = await sanityClient.fetch(queryLSV);
  const histoire = await sanityClient.fetch(queryHistoire);
  const sciences = await sanityClient.fetch(querySc);



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
      conso,
      gouv,
      programmeTv,
      quizz,
      leSaviezVous,
      histoire,
      sciences
    }
  }
};

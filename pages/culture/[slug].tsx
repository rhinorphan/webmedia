import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import {sanityClient, urlFor} from '../../sanity';
import { Post } from '../../typings';
import {PortableText} from '@portabletext/react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Footer from '../../components/Footer';

interface Props {
  post: {
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
    body: [];
  }
};

function Article({ post }: Props) {
 
  const styles = {
    block: {
      blockquote: ({children} : any) => {
        return (
          <blockquote className='border-l-4 border-poppy px-4 text-3xl font-baskerville'>
            {children}
          </blockquote>
        )
      },
      normal: ({children} : any) => {
        return (
          <p className='font-franklin'>
            {children}
          </p>
        )
      },
      h4: ({children} : any) => {
        return (
          <p className='font-baskerville text-xl font-bold text-poppy'>
            {children}
          </p>
        )
      },
    },
    types: {
      twitter: ({value} : any) => {
        return (
          <div className='pt-2 max-w-xl mx-auto'>
            <TwitterTweetEmbed
              tweetId={value.id}
            />
          </div>
        )
      }
    }
  };

  return (
    <main className='bg-[#000000]'>
      <Head>
        <title>Peekaboo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <div className='p-[3px] rounded-xl md:max-w-3xl mx-auto'>
        <img src={urlFor(post.mainImage).url()!} alt="" className='w-[761px] mx-auto rounded-xl'/>
      </div>
      <article className='px-10 md:px-0 md:max-w-3xl mx-auto text-[#FFFF]'>
        <h1 className='text-2xl mt-10 mb-3 font-baskerville font-semibold text-poppy'>{post.title}</h1>
        <h2 className='text-lg font-franklin font-light text-gray-400'>{post.description}</h2>
        <div className='flex items-center gap-2 pt-4'>
          <div className='flex justify-center bg-gray-50 rounded-full overflow-visible items-center p-2'>
            <img src={urlFor(post.author.image).url()} alt="" className='h-12 w-12 p-1' />
          </div>
          <p className='font-extralight text-sm font-franklin'>
            Blog post by <span className='text-poppy font-semibold'>{post.author.name}</span> - Published at {" "} {new Date(post.publishedAt).toLocaleString()}
          </p>
        </div>
        <div className='mt-6 text-justify'>
          <PortableText
             value = {post.body}
             components= {styles}
          />
        </div>
      </article>
      <Footer />
    </main>
  );

}

export default Article;

export const getStaticPaths = async () => {
  const query = `*[_type == "culture"] {
    _id,
    slug {
     current
    }
   }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "culture" && slug.current == $slug] [0] {
    _id,
    _createdAt,
    publishedAt,
    title,
    author -> {
     name,
     image
    },
    description,
    mainImage,
    slug,
    body
   }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 3600, // after 1 hour, update the old cache version 
  }
}
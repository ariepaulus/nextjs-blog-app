import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Arie's NextJS Blog-App</title>
        <meta
          name='description'
          content='Complete blog website: starting page with featured blog posts; page with all blog posts; pages with individual blog posts with inline images and inline codes snippets; page for contacting the blog website owner; storage of contact data in a MongoDB database; storage of blog posts in markdown files; writing of blogs with markdown'
        />
      </Head>
      {/* //* 1. Hero-section: where we present ourselves */}
      <Hero />
      {/* //* 2. Featured posts */}
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

//* As our posts are fairly stable and most posts will probably never change, using 'getStaticProps' instead of 'getServerSideProps' makes more sense.
//* If we will be regularly posting, we need to 'revalidate' at an appropriate interval to make sure that posts written after deployment (after building the app), will be displayed.
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 1800, //* Check later whether 'revalidate' should be set!
  };
}

export default HomePage;

import { Fragment } from 'react';
import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all posts' />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

//* Current assumption about this website: Fetching posts once during the build-process should be enough.
//* If I ever update my files thereafter, I will have to rebuild the website and redeploy.
//* If I ever add a new post, I will need to rebuild and redeploy, as posts are part of the project folder.
//? Compare this to Ryan Dhungel's website app (SEO-Blog), which is a dynamic blog and uses a database.
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;

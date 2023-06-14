import { Fragment } from 'react';
import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../helpers/posts-util';

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

//* This code only executes during the build process and on the server (not on the client).
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //* This will cater for when we ever update/edit an individual markdown file.
  };
}

//* As this is a dynamic page, 'getStaticProps' need 'getStaticPaths' to let Next know which concrete slug-values it should pre-generate.
//? As we have only a couple of posts, it would not be too difficult to pre-generate all posts by explicitly defining all paths in advance.
//* This code only executes during the build process and on the server (not on the client).
export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    //* Generating an array of path objects
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;

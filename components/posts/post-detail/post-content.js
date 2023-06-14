import ReactMarkdown from 'react-markdown';
//* Using 'Image' is good optimisation, as it loads images 'lazily' (only when needed), except if explicitly set otherwise, and also shrinks them in size.
//* Unlike React, Next.js loads pages 'lazily' by default.
import Image from 'next/image';
//* Unfortunately, 'react-syntax-highlighter' code base is huge and will affect UX.
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
//! Import from 'cjs' and not 'esm' since this code must run on the server side
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import PostHeader from './post-header';
import styles from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    //* The image is nested within a paragraph, because markdown is translated into html, such that all content, that is not a title or a list, is treated as a paragraph, including images.
    p(paragraph) {
      const { node } = paragraph;

      //* Override the default, if we find that an image will be rendered within a paragraph
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
              priority={true}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    //* For code snippets
    code(code) {
      const { className, children } = code;
      //* className is something like language-js => We need the 'js' part here
      const language = className.split('-')[1];

      return <SyntaxHighlighter style={materialLight} language={language} children={children} />;
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;

//* You can add styling for the different content elements you might have in each post by using the 'post-content.module.css' file. By using the 'content'-class and by selecting different elements in your post, like paragraphs, links, and tables, you can style them in various ways (colours, display, etc)

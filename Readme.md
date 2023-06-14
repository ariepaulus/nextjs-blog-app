# NEXTJS BLOG-APP

This is an app that was built as part of a Udemy course, _Next.js & React: The Complete Guide (incl. Two Paths)_, by [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)

**Description:**
Complete blog website consisting of:

- a starting page with featured blog posts;
- a page with all blog posts;
- pages with individual blog posts with:
  - inline images; and
  - inline code snippets;
- a page for contacting the blog website owner;
- storage of contact data in a MongoDB database;
- storage of blog posts in markdown files; and
- writing of blogs using markdown.

## NextJS Deployment Options

### Standard Build

Running _next build_ produces optimised production bundles resulting in a server-side app that requires a Node.js server to run it.

The output of _next build_ cannot be put on a static host in a similar way to a standard React application. Because Next.js has built-in server-side capabilities, like pre-rendering pages on the fly on the server, revalidating pages, and API-routes, it needs a Node.js server to run this code.

Pages can be pre-rendered (if available) using _getStaticProps_ and _getStaticPaths_, but a Node.js server is required for API-routes, server-side pages (through _getServerSideProps_), page _revalidation_, and for dynamic pages through _getStaticPaths_ where _fallback_ was set to _'blocking'_ or _true_.

_Thus_, for deployment, the host must be able to run Node.js server.

Furthermore, re-deployment will be required when the code must be changed, or when the content must be changed to update and re-render certain pages because page _revalidation_ was not used.

### Full Static Build

For some projects, a _full static build_ is an appropriate option. This can be done by running _next export_. Although _next export_ also produces an optimised production version of the application, it produces a fully (100%) static application, consisting of only HTML, CSS, and JavaScript, with no server-side code.

_Therefore_, for hosting such a web application, a Node.js server is not required. This makes hosting easier, as scaling is not really a concern: there are many static hosts available which scale dynamically and are very cost-effective.

_However_, _next export_ is not always an option. As it produces a fully static application, some _Next_ features will not be available, for example, API-routes, server-side pages, page revalidations, and static paths with fallback set to true or blocking.

In this case, the application must be redeployed not only when code changes, but also when any content changes. This would not be a problem, if code and content do not change frequently.

_**For this application**_, a _full static build_ using _next export_ would not be appropriate, as it contains API-routes and page revalidations.

## Deployment Steps & Considerations

1. Add page metadata, optimise code, remove unnecessary dependencies.
2. Use environment variables for data that are not the same during development and production (e.g. database credentials, and API keys).
3. Do a test build and test the production-ready application locally or on a test server.
4. Deploy.

**Author:**
[Arie Verburgh](info@verburgh-editing.co.za)

Date: 14 June 2023

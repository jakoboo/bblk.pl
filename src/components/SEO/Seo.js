import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import * as _ from 'lodash';
import Twitter from './Twitter';
import Facebook from './Facebook';

const Seo = ({
  title,
  description,
  banner,
  pathname,
  article,
  publicationDate,
}) => {
  const { site } = useStaticQuery(query);

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      titleTemplate,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      author,
      social: { facebook, twitter },
    },
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`,
  };

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    'url': seo.url,
    'name': seo.title,
    'headline': headline,
    'inLanguage': siteLanguage,
    'datePublished': '2020-11-01',
    'dateModified': buildTime,
    'description': defaultDescription,
    'image': {
      '@type': 'ImageObject',
      'url': `${siteUrl}${defaultBanner}`,
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': seo.url,
    },
    'author': {
      '@type': 'Person',
      ...author,
    },
    'copyrightHolder': {
      '@type': 'Person',
      ...author,
    },
    'copyrightYear': '2020',
    'creator': {
      '@type': 'Person',
      ...author,
    },
    'publisher': {
      '@type': 'Person',
      ...author,
    },
  };

  // Initial breadcrumb list
  const itemListElement = [
    {
      '@type': 'ListItem',
      'item': {
        '@id': siteUrl,
        'name': 'Homepage',
      },
      'position': 1,
    },
  ];

  if (pathname) {
    // Create breadcrumbs for every page in path
    // exclude last one if it's article
    let paths = pathname.match(/[^/]+/g);
    paths.forEach((path, index) => {
      if (article && index >= paths.length - 1) return;

      let pathnameSlice = paths
        .slice(0, index + 1)
        .reduce((acc, str) => `${acc}/${str}`);

      itemListElement.push({
        '@type': 'ListItem',
        'item': {
          '@id': `${siteUrl}/${pathnameSlice}`,
          'name': _.capitalize(path),
        },
        'position': itemListElement.length + 1,
      });
    });
  }

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      'url': seo.url,
      'name': seo.title,
      'headline': seo.title,
      'inLanguage': siteLanguage,
      'datePublished': publicationDate,
      'dateModified': buildTime,
      'description': seo.description,
      'image': {
        '@type': 'ImageObject',
        'url': seo.image,
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': seo.url,
      },
      'author': {
        '@type': 'Person',
        ...author,
      },
      'copyrightHolder': {
        '@type': 'Person',
        ...author,
      },
      'copyrightYear': '2020',
      'creator': {
        '@type': 'Person',
        ...author,
      },
      'publisher': {
        '@type': 'Organization',
        ...author,
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteUrl}${defaultBanner}`,
        },
      },
    };

    // Push current blog post into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      'item': {
        '@id': seo.url,
        'name': seo.title,
      },
      'position': itemListElement.length + 1,
    });
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'description': 'Breadcrumbs list',
    'name': 'Breadcrumbs',
    itemListElement,
  };

  return (
    <>
      <Helmet defaultTitle={defaultTitle} titleTemplate={titleTemplate}>
        <html lang={siteLanguage} />
        <title>{title}</title>
        <meta name='description' content={seo.description} />
        <meta name='image' content={seo.image} />
        {article ? (
          <script type='application/ld+json'>
            {JSON.stringify(schemaArticle)}
          </script>
        ) : (
          <script type='application/ld+json'>
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        <script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={facebook.language}
        appId={facebook.appId}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter.username}
      />
    </>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  publicationDate: PropTypes.string,
};

Seo.defaultProps = {
  article: false,
};

export default Seo;

const query = graphql`
  query Seo {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle
        titleTemplate
        defaultDescription: description
        defaultBanner: banner
        siteLanguage
        author {
          name
          description
          email
          sameAs
        }
        social {
          twitter {
            username
          }
          facebook {
            language
          }
        }
      }
    }
  }
`;

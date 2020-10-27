import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Twitter from './Twitter';

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
      social: { twitter },
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
    'url': siteUrl,
    headline,
    'inLanguage': siteLanguage,
    'mainEntityOfPage': siteUrl,
    'description': defaultDescription,
    'name': defaultTitle,
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
    'datePublished': '2020-11-01T10:30:00+01:00',
    'dateModified': buildTime,
    'image': {
      '@type': 'ImageObject',
      'url': `${siteUrl}${defaultBanner}`,
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

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      'author': {
        '@type': 'Person',
        ...author,
      },
      'copyrightHolder': {
        '@type': 'Person',
        ...author,
      },
      'copyrightYear': '2019',
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
      'datePublished': publicationDate,
      'dateModified': buildTime,
      'description': seo.description,
      'headline': seo.title,
      'inLanguage': siteLanguage,
      'url': seo.url,
      'name': seo.title,
      'image': {
        '@type': 'ImageObject',
        'url': seo.image,
      },
      'mainEntityOfPage': seo.url,
    };
    // Push current blog post into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      'item': {
        '@id': seo.url,
        'name': seo.title,
      },
      'position': 2,
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
        }
        social {
          twitter {
            username
          }
          facebook {
            appId
            language
          }
        }
      }
    }
  }
`;

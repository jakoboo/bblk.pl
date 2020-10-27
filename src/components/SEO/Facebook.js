import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const FacebookAnalytics = `
window.fbAsyncInit = function() {
  FB.init({
    appId      : '{your-app-id}',
    cookie     : true,
    xfbml      : true,
    version    : 'v8.0'
  });
    
  FB.AppEvents.logPageView();
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));`;

const Facebook = ({ url, locale, type, title, desc, image, appId }) => (
  <Helmet>
    <meta property='og:locale' content={locale} />
    <meta property='og:url' content={url} />
    <meta property='og:type' content={type} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={desc} />
    <meta property='og:image' content={image} />
    <meta property='og:image:alt' content={desc} />
    <meta property='og:image:width' content='600' />
    <meta property='og:image:height' content='600' />
    {appId && <meta property='fb:app_id' content={appId} />}
    {/*<script>{FacebookAnalytics.replace(`{your-app-id}`, appId)}</script>*/}
  </Helmet>
);

Facebook.propTypes = {
  url: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  appId: PropTypes.string,
};

Facebook.defaultProps = {
  type: 'website',
};

export default Facebook;

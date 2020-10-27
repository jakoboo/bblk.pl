import React from 'react';
import SEO from '../../components/SEO';
import RecentArticles from './components/RecentArticles';
import RecentDemos from './components/RecentDemos';
import Header from './components/Header';

const Index = ({ data }) => {
  return (
    <>
      <SEO />
      <Header />
      <RecentArticles />
      <RecentDemos />
    </>
  );
};

export default Index;

import React from 'react';
import SEO from '../components/SEO';
import RecentArticles from '../components/IndexPage/components/RecentArticles';
import RecentDemos from '../components/IndexPage/components/RecentDemos';
import Header from '../components/IndexPage/components/Header';

const Index = () => (
  <>
    <SEO />
    <Header />
    <RecentArticles />
    <RecentDemos />
  </>
);

export default Index;

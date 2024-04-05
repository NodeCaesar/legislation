import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Servers from '../components/Servers';

function HomepageHeader() { 
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="homepage-title">SCP: Federation Public Documentation</h1>
          <p className="homepage-subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Public Documentation for the  SCP: Federation <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
      </main>
      <article>
        <Servers/>
      </article>
    </Layout>
  );
}
 // push
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Getting Started',
    imageUrl: 'img/start.jpg',
    url: 'docs/getting-started',
    description: <>Get started using Project CX</>,
  },
  {
    title: 'Features',
    imageUrl: 'img/features.jpg',
    url: 'docs/main',
    description: <>Features of Project CX</>,
  },
  {
    title: 'API',
    imageUrl: 'img/api.jpg',
    url: 'docs/api',
    description: <>Integrate other applications with Project CX</>,
  },
  // {
  //   title: 'Add HTML and CSS',
  //   imageUrl: 'img/html-css.jpg',
  //   url: 'docs/add-html-css',
  //   description: <>Add custom codes to your webpage using Project CX</>,
  // },
];

function Feature({ imageUrl, title, description, url }) {
  const imgUrl = useBaseUrl(imageUrl);
  const linkUrl = useBaseUrl(url);

  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>
        <a href={linkUrl}>{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

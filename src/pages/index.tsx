import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

const QUOTES = [
  'The Squarespace of cloud.',
  'Makes my phone actually worth $1000.',
  'A practical metaverse.',
  'Create software solutions without a degree.'
];

function ChangingSubTitle(){
  const [index, setIndex] = useState(Math.floor(Math.random() * (QUOTES.length-1)));
  const [opacity, setOpacity] = useState(1);
  const msBeforeChange = 5000;
  const transitionTime = 300;

  useEffect(()=> {
    setTimeout(()=> {
      setIndex(index == QUOTES.length - 1 ? 0 : index+1);
    }, msBeforeChange);
  }, [index]);

  useEffect(()=> {
    setTimeout(()=> {
        setOpacity(0);
        setTimeout(()=> {
          setOpacity(1);
        }, transitionTime);
    }, msBeforeChange - transitionTime);
  }, [index]);

  return <p className="hero__subtitle" style={{   
    transition: `${transitionTime}ms opacity ease`,
    opacity: opacity,
  }}>"{QUOTES[index]}"</p>;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.tagline}</h1>
        <ChangingSubTitle/>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn More
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

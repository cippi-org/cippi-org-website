import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Power',
    description: (
      <>
        CIPPI harnesses cutting-edge technology with industry best practices.
      </>
    ),
  },
  {
    title: 'For Everyone',
    description: (
      <>
        CIPPI operates at-cost and aims to be accessible to people of all backgrounds.
      </>
    ),
  },
  {
    title: 'Open',
    description: (
      <>
        CIPPI stands on the shoulders of giants. The source code belongs to the public.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      { image &&<div className="text--center">
         <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div> }
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

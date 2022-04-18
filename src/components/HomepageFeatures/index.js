import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Hypernode',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hypernode for Ronin conforms to the JSON-RPC specification for Ethereum.
          Check out available methods in the <Link to='http://ethereum-json-rpc-specification.org'>official spec</Link>
      </>
    ),
  },
  {
    title: 'Block and Marketplace APIs',

    description: (
      <>
        A simplified REST API for interacting with Axie, Land, and Marketplace data without having to deal with the blockchain. Coming soon!
      </>
    ),
  },
  {
    title: 'Blockchain GraphQL API',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        For advanced users only. Provides direct access to the underlying databases powering our Block and Marketplace APIs.
          Documentation can be found <Link to='https://graphql-docs.keisu.io'>here</Link>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

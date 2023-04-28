import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import {Feature, FeatureItem} from '@site/src/components/Features';
import { HomepageSections } from '@site/src/components/Section';
import styles from './index.module.css';
import { Sections } from '@site/src/content/Sections';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate
            id="content.tagline"
            description='The main site tagline to show on the homepage'
          >
          {siteConfig.tagline}
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://calendly.com/draltan/30min">
            <Translate
              id="content.callToAction.scheduleCall"
              description='Call to action to schedule a call'
              >
              Schedule a call
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={translate({id: 'content.tagline'})}>
      <HomepageHeader />
      <main>
        <HomepageSections sections={Sections}/>
      </main>
    </Layout>
  );
}

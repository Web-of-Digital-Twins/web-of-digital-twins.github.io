import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HWoDTHomepageFeatures from '@site/src/components/HWoDTHomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const SvgLogo = require('@site/static/img/hwodt_logo.svg').default

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="text--center">
          <SvgLogo className={styles.wodtHomeLogo} role="img"/>
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview">
            HWoDT Documentation 📄
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The HWoDT Framework website">
      <HomepageHeader />
      <main>
        <HWoDTHomepageFeatures />
      </main>
    </Layout>
  );
}

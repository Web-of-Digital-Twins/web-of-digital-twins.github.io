import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Uniform Interface for DTs',
    Svg: require('@site/static/img/uniform-interface.svg').default,
    description: (
      <>
        The HWoDT follows the <strong>REST</strong> architectural style defining a Uniform Interface
        that accomodates the heterogeneity of existing Digital Twins technologies.
      </>
    ),
  },
  {
    title: 'Focus on your application instead of DT technologies',
    Svg: require('@site/static/img/application-focus.svg').default,
    description: (
      <>
        Consumers (Applications) of DT services can navigate and use DT ecosystems regardless 
        of the underlying technology by leveraging a <strong>hypermedia-based uniform interface</strong>.
      </>
    ),
  },
  {
    title: 'Wide support',
    Svg: require('@site/static/img/supported-technologies.svg').default,
    description: (
      <>
        HWoDT strategy is to add an interoperability layer on top of existing technologies.
        The <strong>HWoDT Framework</strong> provides support for the main DT technologies.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HWoDTHomepageFeatures() {
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

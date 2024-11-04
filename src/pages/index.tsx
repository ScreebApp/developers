import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title} {siteConfig.tagline}
        </Heading>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}

        {/* <div className={styles.buttons} style={{ marginBottom: "20px" }}>
          <Link
            className="button button--secondary button--lg"
            to="https://screeb.app"
          >
            Discover
          </Link>
        </div> */}

        <section id={styles.summary}>
          <div className={styles.module}>
            <div className={styles.moduleHeader}>
              <h2>🖥️ Web Tag</h2>
            </div>
            <div className={styles.moduleContent}>
              <Link
                className="button button--secondary button--lg"
                to="/sdk-js/install"
              >
                Getting started - 5min ⏱️
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/sdk-js"
              >
                Guides
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://screeb.notion.site/Javascript-tag-68e57473d23f4381933292cb299b285d"
              >
                Changelogs
              </Link>
            </div>
          </div>
          <div className={styles.module}>
            <div className={styles.moduleHeader}>
              <h2>📱 Mobile SDKs</h2>
            </div>
            <div className={styles.moduleContent}>
              <Link
                className="button button--secondary button--lg"
                to="/sdk-android/install"
              >
                🤖 Android
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/sdk-ios/install"
              >
                🍎 IOS
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/sdk-react-native/install"
              >
                ⚛️ React Native
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/sdk-flutter/install"
              >
                🔵 Flutter
              </Link>
            </div>
          </div>
          <div className={styles.module}>
            <div className={styles.moduleHeader}>
              <h2>🔌 API</h2>
            </div>
            <div className={styles.moduleContent}>
              <Link
                className="button button--secondary button--lg"
                to="/api-and-connectors/webhooks"
              >
                Webhooks
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/api-and-connectors/stitch-v2.0.0"
              >
                Stitch
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/api-and-connectors/releases-api"
              >
                Releases API
              </Link>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`⚙️ ${siteConfig.title}: ${siteConfig.tagline}`}
      description="Developer documentation"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

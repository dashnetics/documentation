import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList = [
  {
        title: 'Video Tutorials',
        imageUrl: 'img/road-start.jpg',
        addr: () => {
            window.location.href = "./docs/tutorials/tutorials-intro"
        },
    description: (
      <>
            <i className="material-icons color">videocam</i> Video Presentations and Articles designed from the ground up to be easily understood and
            used to get your website up and running quickly.
            
      </>
    ),
  },
   {
        title: 'User Guides and Manuals',
        imageUrl: 'img/manuals.jpg',
        addr: () => {
            window.location.href = "./docs/manuals/manuals-intro"
        },
        description: (
            <>
                All your helpful manuals and user documents in one place, you can even create your own, and we&apos;ll do the chores. Go
                ahead and move your documents into the docs directory.
            </>
        ),
    },
    {
        title: 'Features and Highlights',
        imageUrl: 'img/road-features.jpg',
        addr: () => {
            window.location.href = "./docs/features/features-intro"
        },
        description: (
            <>
                Browse through some of the features and discover what you can do with the world's most powerful automation tool
            </>
        ),
    },
     {
        title: 'Connecting other Applications',
        imageUrl: 'img/road-api.jpg',
        addr: () => {
            window.location.href = "http://businesssoftware.design"
        },
        description: (
            <>
                For Advanced Users / Development Teams, learn how to connect Dashnetics through APIs. 
            </>
        ),
    },
];

function Feature({ imageUrl, Svg, title, description, addr }) {
    const imgUrl = imageUrl;
    const linkUrl = addr;
    return (
        <div id={title} onClick={addr} className={clsx('col col--3 features')}>
          <div className="text--center" >
                <img className={styles.featureImage} src={imgUrl} alt={title} />
      </div>
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
      <div className="container featurescont" width='100%'>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

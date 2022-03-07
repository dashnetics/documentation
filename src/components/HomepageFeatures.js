import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList = [
  {
        title: 'Start in minutes',
        imageUrl: 'img/road-start.jpg',
        addr: () => {
            window.location.href = "./docs/tutorials/tutorials-intro"
        },
    description: (
      <>
            <i className="material-icons color">videocam</i> Video Tutorials and Articles designed from the ground up to be easily understood and used to get you up and running quickly.
            
      </>
    ),
  },
   {
        title: 'No Code Solution',
        imageUrl: 'img/no-code.jpg',
        addr: () => {
            window.location.href = "./docs/manuals/manuals-intro"
        },
        description: (
            <>
                We write the code so you don't have to, our platform is designed to be used by anyone on your staff with no development knowledge.
            </>
        ),
    },
    {
        title: 'Designed for Mobile, Tablet and Desktop',
        imageUrl: 'img/mobile-first.jpg',
        addr: () => {
            window.location.href = "./docs/features/features-intro"
        },
        description: (
            <>
               Create beautiful web pages for your mobile, tablet and desktop visitors, regardless of operating system or browser
            </>
        ),
    },
     {
        title: 'Create your online store and take payments',
        imageUrl: 'img/creditcard.jpg',
        addr: () => {
            window.location.href = "http://dashnetics.com.au"
        },
        description: (
            <>
                Create or Import your items pricing, pictures into an online store. Link check out to your preferred payments system.
            </>
        ),
    },
                     {
                     title: 'Easily manage your products and pricing',
                     imageUrl: 'img/store.jpg',
                     addr: () => {
                     window.location.href = "http://dashnetics.com.au"
                     },
                     description: (
                                   <>
                                   Change your items, or create new campaigns easily with Dashnetics.
                                   </>
                                   ),
                     },
                     {
                     title: 'Manage Memberships and renewals automatically',
                     imageUrl: 'img/memberships.jpg',
                     addr: () => {
                     window.location.href = "http://dashnetics.com.au"
                     },
                     description: (
                                   <>
                                    Easily and automatically manage your memberships, including renewals, fees, discounts, data and more.
                                   </>
                                   ),
                     },
                     {
                     title: 'Create and automate powerful marketing campaigns and mailings',
                     imageUrl: 'img/mailchimp-certified-partner.png',
                     addr: () => {
                     window.location.href = "http://dashnetics.com.au"
                     },
                     description: (
                                   <>
                                   Easily and automatically manage your mailing lists as well as mail & marketing content, frequency, audience and responses.
                                   </>
                                   ),
                     },
                     {
                     title: 'Add the power of Dashnetics into your current website or store',
                     imageUrl: 'img/iframe.jpg',
                     addr: () => {
                     window.location.href = "http://dashnetics.com.au"
                     },
                     description: (
                                   <>
                                   Don't waste resources that currently work for you, or re-invent the wheel, you can embed your Dashnetics forms and pages into your current site or vice versa easily and seamlessly
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

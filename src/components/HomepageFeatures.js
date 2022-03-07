@ -5,56 +5,91 @@ import styles from './HomepageFeatures.module.css';

const FeatureList = [
                     {
                     title: 'Video Tutorials',
                     title: 'Start in minutes',
                     imageUrl: 'img/road-start.jpg',
                     addr: () => {
                     window.location.href = "./docs/tutorials/tutorials-intro"
                     },
                     description: (
                                   <>
                                   <i className="material-icons color">videocam</i> Video Presentations and Articles designed from the ground up to be easily understood and
                                   used to get your website up and running quickly.
                                   <i className="material-icons color">videocam</i> Video Tutorials and Articles designed from the ground up to be easily understood and
                                   used to get you up and running quickly.
                                   
                                   </>
                                   ),
                     },
                     {
                     title: 'User Guides and Manuals',
                     imageUrl: 'img/manuals.jpg',
                     title: 'No Code Solution',
                     imageUrl: 'img/no-code.jpg',
                     addr: () => {
                     window.location.href = "./docs/manuals/manuals-intro"
                     },
                     description: (
                                   <>
                                   All your helpful manuals and user documents in one place, you can even create your own, and we&apos;ll do the chores. Go
                                   ahead and move your documents into the docs directory.
                                   We write the code so you don't have to, our platform is designed to be used by anyone on your staff with no development knowledge.
                                   </>
                                   ),
                     },
                     {
                     title: 'Features and Highlights',
                     imageUrl: 'img/road-features.jpg',
                     title: 'Designed for Mobile, Tablet and Desktop',
                     imageUrl: 'img/mobile-first.jpg',
                     addr: () => {
                     window.location.href = "./docs/features/features-intro"
                     },
                     description: (
                                   <>
                                   Browse through some of the features and discover what you can do with the world's most powerful automation tool
                                   Create beautiful web pages for your mobile, tablet and desktop visitors, regardless of operating system or browser
                                   </>
                                   ),
                     },
                     {
                     title: 'Connecting other Applications',
                     imageUrl: 'img/road-api.jpg',
                     title: 'Create your online store and take payments',
                     imageUrl: 'img/creditcard.jpg',
                     addr: () => {
                     window.location.href = "http://dashnetics.com.au"
                     },
                     description: (
                                   <>
                                   For Advanced Users / Development Teams, learn how to connect Dashnetics through APIs.
                                   Create or Import your items pricing, pictures into an online store.
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
                     title: 'Manage Memberships & Subcriptions',
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
                     ];

function Feature({ imageUrl, Svg, title, description, addr }) {

import React from 'react';
import { Montserrat } from 'next/font/google'
import styles from './recommendations.module.css'
import Slider from 'react-slick';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RecommendationsSection = ({isMediumScreen, isSmallScreen}) => {

    
    const carouselItems = [
        {
            "author": "David Sapoznikow",
            "quote": "Diana is that rare individual that can be handed a brand-new assignment with limited context and not only run with it but develop expert status and a network almost overnight. The phrase 'safe pair of hands' applies perfectly, and she goes above and beyond with her natural curiosity and a deep reservoir of creativity. She just gets things done at the highest level. Since I've known her, Diana has rapidly digested and influenced the competitive datacenter silicon space, become an authority on partner channels, managed a successful external influencer (analyst/press) program, driven integrated marketing results with measurable impact, managed agencies effectively, cultivated networks within and outside of Intel and helped develop our team's culture. Through it all, she has constantly surprised with new ideas, constructively challenged areas of improvement and always been someone I look forward to working and spending time with. Her expertise in datacenter marketing is illustrative of her ability to ramp on any subject, and her skills and record are transferable across industries. As you can imagine, I heartily endorse Diana!",
            "imageUrl": "https://media.licdn.com/dms/image/C4D03AQHGz76IAHiELw/profile-displayphoto-shrink_100_100/0/1668035252317?e=1710979200&v=beta&t=ESoX4dyIrDo_j5tklWGng33pn_BhMngBf1wlwoFahjA",
            "image": "./recommendations/David_recommendation 1.jpg"
        },
        {
            "author": "Sheri Haug",
            "quote": "I had the pleasure of working with Diana for over 3 years at Intel on the Data Center Artificial Intelligence Marketing group. During that time, she reported to me directly for over a year as a Partner Marketing Strategist. Diana consistently delivered, was highly regarded by co-workers, partners and customers, and considered a trusted advisor by many. She often worked across organizations, regions and partners to ensure the strongest support possible for our customers. She has a good strategic viewpoint and speaks up when she sees a possible issue or a better way to get things done. I appreciated her collaborative style, friendly demeanor and consistent success on projects. I would hire Diana for any project or program leadership role again and would feel lucky to have her on a team that is partner or customer facing. She has the unique ability to build trust and make strategic progress. She never misses a deliverable and is consistently growing her skillset. She is a true professional and will be a strong asset to her next team.",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQEh0KUk9tuXpQ/profile-displayphoto-shrink_100_100/0/1528414323707?e=1710979200&v=beta&t=opAYyq1yCBcdVAINQwMYCXmCZ7EnNtE8UZfWYgYPDDg",
            "image": "./recommendations/Sheri_recommendation 2.jpg"
        },
        {
            "author": "Susan Yazurlo",
            "quote": "Diana is a driving force for team excellence. She is a collaborator, problem-solver, listener, strong communicator, and proven project manager. Diana brings her expertise and new ideas to a project; she remains focused on driving to the desired outcomes while managing executional challenges. She is an absolute pleasure to work with. I highly recommend her work and character.",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQErB-mLljv3Xw/profile-displayphoto-shrink_100_100/0/1655257559397?e=1710979200&v=beta&t=POVulHkyrbhOtM_vxI-mzVmh9NvLQxKwa-m3h8sEVZ8",
            "image": "./recommendations/Susan_recommendation 3.jpg"
        }       
    ]
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMediumScreen ? 2 : isSmallScreen ? 1 : 3, // Adjust the number of slides to show
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    // extract recommendations from linked in rec page:
    // const qwer = [];
    // document.querySelectorAll(".artdeco-tabpanel.active [data-view-name='profile-component-entity']").forEach(b=>{
    //     const rec = {};
    //     rec.author = b.querySelector('a div div div div span').textContent
    //     rec.quote = b.querySelector('ul li div ul li div div div span').textContent
    //     if (b.querySelector('img')) {
    //         rec.imageUrl = b.querySelector('img').src;
    //         rec.image = rec.author.replace(/[^0-9a-z]/gi, '').toLowerCase() + `.jpg`
    //     }
    //     qwer.push(rec)
    // })
    // JSON.stringify(qwer, null, "\t")
    return (
        <div>
            <div className='section_title'>Recommendations</div>
            
            <Slider style={{ margin: '5% 15%'}} {...slickSettings}>
            {carouselItems.map((item, index) => (
                <div key={index} className={styles.carousel_item}>
                    <div className={styles.overlay}>
                        { item.image ? <div className={styles.circleContainer}>
                            <img src={item.image} alt={item.author} className={styles.circleImage} />
                        </div> : null}
                        <h2 className={styles.author}>{item.author}</h2>
                        
                        <div className={`${styles.quote} ${montserrat.className}`}>
                        <span>{item.quote}</span>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>
            
        </div>
     
    );
}

export default RecommendationsSection;
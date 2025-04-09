import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './timeline.module.css'

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

const TimelineSection = () => {
  const timelineData = [
    {
      jobtitle: 'Bachelor of Science (B.S.), Mass Communications',
      company: 'Minnesota State University',
      location: 'Moorhead, Minnesota',
    },
    {
      jobtitle: 'Marketing Manager, Business Development ',
      company: 'Weber Shandwick Worldwide',
      location: 'Minneapolis, MN',
    },
    {
      jobtitle: 'Special Events Planner',
      company: 'Minnesota Orchestra',
      location: 'Minneapolis, MN',
    },
    {
      jobtitle: 'Web Content Manager',
      company: 'Rockford Corporation',
      location: 'Tempe, AZ',
    },
    {
      jobtitle: 'Communications and Brand Manager',
      company: 'Messerli & Kramer, P.A',
      location: 'Minneapolis, MN',
    },
    {
      jobtitle: 'Seller Risk Analyst',
      company: 'PayPal',
      location: 'Chandler, AZ',
    },
    {
      jobtitle: 'Marketing Operations Manager, Project Manager',
      company: 'Vertical Communications, Inc.',
      dates: 'Dec 2011 - Feb 2017',
      location: 'Phoenix, AZ',
    },
    {
      jobtitle: 'Marketing Consultant, Project Management',
      company: 'Self-Employed, TN Marketing',
      dates: 'Mar 2011 - Dec 2019',
      location: 'Chandler, AZ',
    },
    {
      jobtitle: 'Marketing Program Manager, Campaign Strategy',
      company: 'Intel Corporation',
      dates: 'Oct 2019 - Apr 2021',
      location: 'Chandler, AZ',
    },
    {
      jobtitle: 'Marketing Program Manager, Competitive Strategy',
      company: 'Intel Corporation',
      dates: 'May 2021 - Jul 2022',
      location: 'Chandler, AZ',
    },
    {
      jobtitle: 'Marketing Program Manager, Partner Integration',
      company: 'Intel Corporation',
      dates: 'Aug 2022 - Nov 2024',
      location: 'Chandler, AZ',
    }, 
  ];
    

  return (
    <div>
        <div className='section_title'>Timeline</div>
        
            <div className={styles.timeline}>
            <div className={styles.timeline_end}></div>
            {timelineData.reverse().map((item, index) => (
                <div key={index} className={index % 2 === 0 ? styles.blurb_left : styles.blurb_right}>
                    <div className={index % 2 === 0 ? styles.left : styles.right}>
                    <div className={styles.content}>
                        {item.jobtitle ? <div className={styles.jobtitle}>{item.jobtitle}</div> : null }
                        <div className={styles.company}>
                          <p>{item.company}</p>
                          {item.company_sub ? <p style={{fontSize: 'small', textTransform: 'uppercase'}} className={montserrat.className}>{item.company_sub}</p> : null }
                        </div>
                        <div className={montserrat.className}>
                          <p className={styles.location}>{item.location}</p>
                          {item.dates ? <p className={styles.dates}>{item.dates}</p> : null}
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
          
            

    </div>
 
);
}

export default TimelineSection;
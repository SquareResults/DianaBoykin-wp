import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './careerhighlights.module.css'

// import { GoArrowSwitch } from "react-icons/go";
// import { TiMessages } from "react-icons/ti";
// import { PiIntersectThree } from "react-icons/pi";
// import { FaRegHandshake, FaArrowsRotate, FaUsers  } from "react-icons/fa6";
// import { FaChalkboardTeacher } from "react-icons/fa";

import { TbTruckDelivery } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { SlSpeech } from "react-icons/sl";

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

const CareerHighlightsSection = ({refs}) => {
    const {yearsExperienceRef} = refs;
    return (
        <div>
            <div className='section_title'>
                <div style={{marginTop: '20%'}}>Career Highlights</div>
            </div>
            <div className={montserrat.className}>
                <div className={styles.buildingteams}>
                <p style={{marginBottom: '5%'}}>
                </p>
                {/* GRID SECTION */}
                <div className='gridContainer' style={{justifyContent: 'center'}}>
                    <div className={styles.gridItem}>
                        <div className={styles.circle_icon}>
                        <TbTruckDelivery />
                        </div>
                        <div className={styles.title}>
                        Project Management 
                        </div>
                        <div className={styles.list}>
                            <p>Drove partner readiness for 5 key global partners and 150 channel partners enabling go to market strategies for four Intel Xeon product launches and achieved a 20% year over year increase in partner participation by optimizing engagement strategies such as a collection of 12 partner launch playbooks.</p>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.circle_icon}>
                        <BsGraphUpArrow />
                        </div>
                        <div className={styles.title}>
                        Account Management
                        </div>
                        <div className={styles.list}>
                        <p>Provided partner marketing and campaign guidance to align partner + corporate priorities and objectives within data center and AI including Dell, Lenovo, Microsoft, AWS, HPE, Cisco and Supermicro.</p>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.circle_icon}>
                        <FaHandshake />
                        </div>
                        <div className={styles.title}>
                        Process Optimization
                        </div>
                        <div className={styles.list}>
                        <p>Led the successful rollout of comprehensive partner marketing resource hub, increasing employee access to actionable resources by 200%.</p>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.circle_icon}>
                        <HiLightningBolt />
                        </div>
                        <div className={styles.title}>
                        Collaboration & Communication
                        </div>
                        <div className={styles.list}>
                        <p>Skilled at building strong, trusted relationships with cross-functional teams and stakeholders to drive results.</p>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.circle_icon}>
                        <TbTargetArrow />
                        </div>
                        <div className={styles.title}>
                        Customer-Centric
                        </div>
                        <div className={styles.list}>
                        <p>Passionate about delivering quality solutions that enhance customer satisfaction, internally and externally.</p>
                        </div>
                    </div>
                    {/* <div className={styles.gridItem}>
                        <div className={styles.circle_icon}>
                        <LiaFileInvoiceDollarSolid />
                        </div>
                        <div className={styles.title}>
                        IT Infrastructure Knowledge
                        </div>
                        <div className={styles.list}>
                        <p>Understands and manages the technical backbone of an organization.</p>
                        </div>
                    </div> */}
                </div>
                
                </div>
            </div>
     
        </div>   
    );
}

export default CareerHighlightsSection;
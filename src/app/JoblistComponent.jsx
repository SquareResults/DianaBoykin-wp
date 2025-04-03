import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './joblist.module.css'

const montserrat = Montserrat({
    weight: ['400', '800'],
    subsets: ['latin']
  })

const JoblistComponent = () => {

    const jobData = [
        {
            img_logo: "/Intellogo.png",
            img_alt: "Intel Logo",
            img_style:  '{"paddingTop": "0.5%"}',
            jobtitle: "Marketing Program Manager, Partner Integration",
            company: "Intel Corporation",
            dates: "August 2022 - November 2024",
            job_description: [
                `Scaled a paid content syndication partner program across 5 global markets achieving 100% of target leads in the US market.`,
                `Led partner readiness for 5 key global partners and 150 channel partners enabling go to market strategies for Intel Xeon product launches.`,
                `Produced 12 partner launch playbooks that drove a 20% increase in partner participation and co-marketing opportunities year over year for 4 Xeon product portfolio launches.`,
                `Developed an online partner marketing hub to share key messaging, marketing strategy, and activation plans with internal partner teams to drive partner alignment and increase employee access to actionable resources by 200%.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },
        {
            img_logo: "/Intellogo.png",
            img_alt: "Intel Logo",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Marketing Program Manager, Competitive Strategy",
            company: "Intel Corporation",
            dates: "May 2021 - July 2022",
            job_description: [
                `Created three competitive response microsites to counter competitor threats, enabling sales and social teams to maintain share of voice and effectively challenge competitive messaging.`,
                `Reduced competitive response agility by 2-3 weeks through comprehensive competitive research tools that identified and tracked 4 key competitors, providing competitive landscape insights and enabling proactive market responses.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },
        {
            img_logo: "/Intellogo.png",
            img_alt: "Intel Logo",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Marketing Program Manager, Campaign Strategy",
            company: "Intel Corporation",
            dates: "October 2019 – April 2021",
            job_description: [
                `Managed a cross-organizational edge to cloud digital campaign reaching a 20% impression rate across targeted digital channels.`,
                `Delivered a supplemental media campaign enhancing product visibility and supporting the Intel Xeon brand for 3rd Gen Xeon Scalable processors.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },
        {
            img_logo: "/TN.jpg",
            img_alt: "TN",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Marketing Consultant, Project Management",
            company: "Self-Employed, TN Marketing",
            dates: "March 2017 - December 2019",
            job_description: [
                `Drove project management operations and ensured client satisfaction by defining and communicating expectations and success criteria while managing timelines, dependencies, issue resolution, and asset delivery across internal teams, clients, and third-party partners.`,
                `Managed client operations and project management for a San Francisco-based custom web application company maintaining 100% customer retention.`,
                `Managed live-stream talent and community engagement for a Minneapolis-based marketing and media company with consistent increases across social platforms.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: [ "", "", ""]
        },
        // {
        //     img_logo: "/411_locals.png",
        //     img_alt: "411 Locals Logo",
        //     img_style:  '{"paddingTop": "13%"}',
        //     jobtitle: "Google Local Marketing Consultant",
        //     company: "411 Locals",
        //     dates: "2023",
        //     job_description: [
        //         `Redesigned and implemented a 12-week business plan curriculum approved for
        //         accreditation in Maricopa County Community College District`,
        //         `Instructed adult learners in business plan development; emphasis on market analysis,
        //         bookkeeping, financial projections, product pricing, distribution and operations. 40% established
        //         business success rate.`,
        //         `Provided instruction and mentoring in Small Business Start-Up and Management.`,
        //         `Provided hands on approach to learning about starting and operating a small business.`
        //     ],
        //     skillset: "yes",
        //     skill_title: "skills",
        //     listofskills: ["Local Search", "Google Analytics", "B2B Marketing Strategy"]
        // },
        {
            img_logo: "/Vert.jpg",
            img_alt: "Vertical Communications",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Marketing Operations Manager, Project Manager",
            company: "Vertical Communications, Inc.",
            dates: "December 2011 - February 2017",
            job_description: [
                `Managed all marketing programs, special projects, industry events and web-related initiatives to drive audience engagement and increase brand visibility.`,
                `Managed the successful launch of an online product knowledge base and sales training hub, increasing accessibility to critical resources.`,
                `Led the re-launch of a dealer portal and company intranet, improving user experience and engagement within one year.`,
                `Drove project completion and rollout of company’s rebranding through a newly designed website and marketing and sales materials.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: [""
        
            ]
        },
        // {
        //     img_logo: "/instructor_logo.png",
        //     img_alt: "Loan Fund Logo",
        //     img_style:  '{"paddingTop": "12%", "width": "150px"}',
        //     jobtitle: "Seller Risk Analyst",
        //     company: "PayPal",
        //     dates: "",
        //     job_description: [
                
        //     ],
        //     skillset: "no",
        //     skill_title: "",
        //     listofskills: ["", ""]
        // },
        // {
        //     img_logo: "/priority_staffing.png",
        //     img_alt: "Priority Staffing Logo",
        //     img_style:  '{"paddingTop": "11%"}',
        //     jobtitle: "Communications and Brand Manager",
        //     company: "Messerli & Kramer, P.A.",
        //     dates: "",
        //     job_description: [
        //         //`Engineered Marketing, Sales, Business Development, and Account Management transformation to redefine brand strategy.`,
        //         //`Efforts yielded $20.3 million increase in net income.`
        //     ],
        //     skillset: "no",
        //     skill_title: "",
        //     listofskills: ["", ""]
        // },
        // {
        //     img_logo: "/CenturyLink_logo.png",
        //     img_alt: "CenturyLink Logo",
        //     img_style:  '{"paddingTop": "15%"}',
        //     jobtitle: "Web Content Manager",
        //     company: "Rockford Corporation",
        //     dates: "",
        //     job_description: [
        //         //`Strategic buyer of services, with a documented record of leveraging purchasing power to
        //         //facilitate organizational objectives.`,
        //         //`Managed new and ongoing purchasing agreements with an annual spend of over $100
        //         //million through contract negotiations, performance evaluations and site visits for the travel, training
        //         //services, and promotional items/branded merchandise programs`,
        //         //`Developed and implemented corporate communication strategy for Travel program to
        //         //54,000 employees in 14-state territory`,
        //         //`Negotiated $2M in cost savings and cost avoidances in employee travel program`,
        //         //`Negotiated multi-year contract for Management Diversity Training resulted in a 20% savings.`,
        //         //`Negotiated $5.5M subcontracting commitments for technician training services`,
        //         //`Reduced individual employee training fees by approximately 11%`,
        //         //`Negotiated a multi-year contract for branded services with a 7% savings from unit cost
        //         //reductions, rebate plan, and volume incentives`,
        //         //`Negotiated a first-time subcontracting plan with associated financial penalties to primary
        //         //vendor in lieu of meeting requirements`,
        //         //`Successfully implemented first-time Minority/Women-owned Business Enterprise (M/WBE)
        //         //subcontracting plan resulting in increased corporate spending with minority travel service providers
        //         //by 10%.`
        //     ],
        //     skillset: "no",
        //     skill_title: "",
        //     listofskills: ["", ""]
        // },
        // {
        //     img_logo: "/CenturyLink_logo.png",
        //     img_alt: "CenturyLink Logo",
        //     img_style:  '{"paddingTop": "15%"}',
        //     jobtitle: "Special Events Planner",
        //     company: "Minnesota Orchestra",
        //     dates: "",
        //     job_description: [
        //         //`Strategic buyer of services, with a documented record of leveraging purchasing power to
        //         //facilitate organizational objectives.`,
        //         //`Managed new and ongoing purchasing agreements with an annual spend of over $100
        //         //million through contract negotiations, performance evaluations and site visits for the travel, training
        //         //services, and promotional items/branded merchandise programs`,
        //         //`Developed and implemented corporate communication strategy for Travel program to
        //         //54,000 employees in 14-state territory`,
        //         //`Negotiated $2M in cost savings and cost avoidances in employee travel program`,
        //         //`Negotiated multi-year contract for Management Diversity Training resulted in a 20% savings.`,
        //         //`Negotiated $5.5M subcontracting commitments for technician training services`,
        //         //`Reduced individual employee training fees by approximately 11%`,
        //         //`Negotiated a multi-year contract for branded services with a 7% savings from unit cost
        //         //reductions, rebate plan, and volume incentives`,
        //         //`Negotiated a first-time subcontracting plan with associated financial penalties to primary
        //         //vendor in lieu of meeting requirements`,
        //         //`Successfully implemented first-time Minority/Women-owned Business Enterprise (M/WBE)
        //         //subcontracting plan resulting in increased corporate spending with minority travel service providers
        //         //by 10%.`
        //     ],
        //     skillset: "no",
        //     skill_title: "",
        //     listofskills: ["", ""]
        // },
        // {
        //     img_logo: "/CenturyLink_logo.png",
        //     img_alt: "CenturyLink Logo",
        //     img_style:  '{"paddingTop": "15%"}',
        //     jobtitle: "Marketing Manager, Business Development",
        //     company: "Weber Shandwick Worldwide",
        //     dates: "",
        //     job_description: [
        //         //`Strategic buyer of services, with a documented record of leveraging purchasing power to
        //         //facilitate organizational objectives.`,
        //         //`Managed new and ongoing purchasing agreements with an annual spend of over $100
        //         //million through contract negotiations, performance evaluations and site visits for the travel, training
        //         //services, and promotional items/branded merchandise programs`,
        //         //`Developed and implemented corporate communication strategy for Travel program to
        //         //54,000 employees in 14-state territory`,
        //         //`Negotiated $2M in cost savings and cost avoidances in employee travel program`,
        //         //`Negotiated multi-year contract for Management Diversity Training resulted in a 20% savings.`,
        //         //`Negotiated $5.5M subcontracting commitments for technician training services`,
        //         //`Reduced individual employee training fees by approximately 11%`,
        //         //`Negotiated a multi-year contract for branded services with a 7% savings from unit cost
        //         //reductions, rebate plan, and volume incentives`,
        //         //`Negotiated a first-time subcontracting plan with associated financial penalties to primary
        //         //vendor in lieu of meeting requirements`,
        //         //`Successfully implemented first-time Minority/Women-owned Business Enterprise (M/WBE)
        //         //subcontracting plan resulting in increased corporate spending with minority travel service providers
        //         //by 10%.`
        //     ],
        //     skillset: "no",
        //     skill_title: "",
        //     listofskills: ["", ""]
        // },

    ]



    return (
        <div>
            <div className={styles.joblist}>
                {jobData.map((item, index) => (
                    <div key={index}>
                    <div className={styles.company_image}>
                        <img src={item.img_logo} alt={item.img_alt} className={styles.image} style={item.img_style ? JSON.parse(item.img_style) : {}}/>
                    </div>
                    { index > 0 ? <div className={styles.lineborder}></div> : null}
                        <div className='redborder'>
                            <div className={styles.redborder_title}>
                                {item.jobtitle}
                                <p className='redfont'>{item.company}</p>
                            </div>
                        </div>
                        <div className={montserrat.className}>
                            <div className={styles.time}>
                                {item.dates}
                            </div>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    {item.job_description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {item.skillset === 'yes' && (
                            <div key={index}>
                            <div className={styles.title}>
                               {item.skill_title}
                            </div>
                            <div className={montserrat.className}>
                               <ul className={styles.list}>
                                    {item.listofskills.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                               </ul>
                           </div>
                           </div>
                        )}
                    </div>
                ))}
                
            </div>
        </div>   
    );
}

export default JoblistComponent;
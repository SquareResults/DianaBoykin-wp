import React, {useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google'
import styles from './projects.module.css'
import FadeInOnScroll from './FadeInOnScroll';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const montserrat = Montserrat({
    weight: ['400', '800'],
    subsets: ['latin']
  })

const ProjectsSection = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if the user's preferred color scheme is dark
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Set initial dark mode state based on the user's preferred color scheme
        setDarkMode(darkModeMediaQuery.matches);

        // Listen for changes in the user's preferred color scheme
        const darkModeListener = (e) => {
            setDarkMode(e.matches);
        };

        darkModeMediaQuery.addListener(darkModeListener);

        // Clean up the listener when the component unmounts
        return () => darkModeMediaQuery.removeListener(darkModeListener);
    }, []); // Empty dependency array ensures useEffect only runs once


    const projectData = [
        {
            projecttitle: "Data Center and Artificial Intelligence Partner Resource Hub – SharePoint Site, Intel",
            project_description: [
                `Objectives were Stand up a central resource to share strategic partner resources on Data Center and AI outbound marketing strategies and programs, product messaging, launch updates across internal partner teams.Inform partner teams of centralized outbound marketing strategies and programs in order to share opportunities for partner participation that align to Intel’s most important business priorities including AI, cloud, security and sustainability. Support our global partners in generating end-user demand for Intel-based data center systems, services, and solutions through co-marketing programs.`,
                `Increased internal access to actionable partner resources by 200% across 5 global regions as the result`,

            ],
            skillset: "yes",
            skill_title: "",
            listofskills: []
        },
        {
            projecttitle: "Intel Xeon 6 Product and Gaudi 3 Launch, Partner Launch Integration, Intel",
            project_description: [
                `Objectives were Include regional and global Intel partners in the Intel Xeon 6 processor and Gaudi 3 launch activations. Inform partners of Xeon 6 launch plans and opportunities for co-marketing and go-to-market opportunities through the development of partner playbooks. Support partners in launch participation activations and be a source of expertise in partner co-marketing opportunities, processes and deadlines.`,
                `As a result, 58 partners participated in the ecosystem logo wall, the initiative was featured in the Xeon 6 launch video which garnered over 15,000 views, and it was also included in the CEO keynote with over 60,000 online views (live and on-demand). Additionally, custom partner co-marketing videos were created for top global partners.`

            ],
            skillset: "yes",
            skill_title: "",
            listofskills: []
        },
        // {
        //     projecttitle: "Team Development and Career Growth",
        //     project_description: [
        //         `Worked closely with team members to align their career aspirations and set development goals.`,
        //         `Supported team members in achieving certifications and attending industry conferences.`,
        //         `Provided mentorship and guidance on leadership roles and cross-training opportunities.`

        //     ],
        //     skillset: "yes",
        //     skill_title: "",
        //     listofskills: []           
        // },
    ]




    return (
        
        <div>
            <div className='section_title'>Projects</div>
            <div className={styles.projects}>
                {projectData.map((item, index) => (
                    <div key={index}>
                        <FadeInOnScroll>                 
                        
                        { index > 0 ? <div className={styles.lineborder}></div> : null}
                        
                        <div className={styles.company_image}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.img_logo_dark || item.img_logo_light ? (
                                        <img
                                            src={darkMode ? item.img_logo_dark : item.img_logo_light}
                                            alt={item.img_alt}
                                            className={styles.image}
                                        />
                                    ) : null}
                                </a>                                                
                        </div>

                        <div className='redborder'>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className={styles.redborder_title}>
                                {item.projecttitle}
                                {/* <p className={montserrat.className} style={{fontSize: '15px'}}>{item.projecttitle_sub}</p> */}
                                
                            </div>
                            </a>
                        </div>
                        <div className={montserrat.className}>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    {item.project_description.map((desc, i) => (
                                        <li className={styles.liaragraph} key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={montserrat.className}>
                            <div className={styles.round_container}>
                                {item.listofskills.map((skill, index) => (
                                    <div className={styles.round_item} key={index}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        </FadeInOnScroll>
                    </div>
                ))}           
                
            </div> 

        </div> 
    );
}

export default ProjectsSection;
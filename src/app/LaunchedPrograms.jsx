import React from 'react'
import { Montserrat } from 'next/font/google' 
import styles from './launchedprograms.module.css'

const montserrat = Montserrat({
    weight: ["400","800"],
    subsets: ['latin']
})


const LaunchedPrograms = () => {

    const openPdf = (filename) => {
        const pdfUrl = '/resumes/' + filename;
        window.open(pdfUrl, '_blank');
      };


    // return (
    //     <div>
    //         <div className={styles.launchedprograms}>

    //             {/* FIRST SECTION */}
    //             <div className={styles.background_1}>
    //                 <div className={styles.text}>
    //                 <div className={styles.titlecontainer}>
    //                     <div className={styles.redborder}>
    //                         <div className='redborder_title'>
    //                         Data Center and Artificial Intelligence Partner Resource Hub
    //                             <div className={montserrat.className}>
    //                                 <p className={styles.subtitle}>
    //                                 Intel, Sharepoint site
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>

    //                 </div>
    //                 <div className={montserrat.className} style={{position: 'relative'}}>
    //                     <p className={styles.subsection_description}>
    //                         <ul>
    //                             <li><strong>Objectives</strong></li>                            
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}><strong>Stand up</strong> a central resource to share strategic partner resources on Data Center and AI outbound marketing strategies and programs, product messaging, launch updates across internal partner teams.
    //                                 </li>
    //                                 <li style={{listStyle: 'circle', marginLeft: '8%'}}><strong>Inform</strong> partner teams of centralized outbound marketing strategies and programs in order to share opportunities for partner participation that align to Intel’s most important business priorities including AI, cloud, security and sustainability.</li>    
    //                                 <li style={{listStyle: 'circle', marginLeft: '8%'}}><strong>Support</strong> our global partners in generating end-user demand for Intel-based data center systems, services, and solutions through co-marketing programs.
    //                                 </li>
    //                             <li><strong>Result</strong></li>
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}>Increased internal access to actionable partner resources by 200% across 5 global regions.
    //                            </li>
    //                         </ul>
    //                     </p>
    //                 </div>
    //                 </div>
    //             </div>

    //             {/* SECOND SECTION */}
    //             <div className={styles.background_2}>
    //                 <div className={styles.text}>
    //                 <div className={styles.titlecontainer}>
    //                     <div className={styles.redborder}>
    //                         <div className='redborder_title'>
    //                         Intel Xeon 6 Product and Gaudi 3 Launch, Partner Launch Integration
    //                             <div className={montserrat.className}>
    //                                 <p className={styles.subtitle}>
    //                                 Intel
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className={montserrat.className} style={{position: 'relative'}}>
    //                     <p className={styles.subsection_description}>
    //                         <ul>
    //                             <li><strong>Objectives</strong></li>
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}><strong>Include</strong> regional and global Intel partners in the Intel Xeon 6 processor and Gaudi 3 launch activations.</li>
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}><strong>Inform</strong> partners of Xeon 6 launch plans and opportunities for co-marketing and go-to-market opportunities through the development of partner playbooks.</li>
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}><strong>Support</strong> partners in launch participation activations and be a source of expertise in partner co-marketing opportunities, processes and deadlines.</li>
    //                             <li><strong>Results</strong></li>
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}>58 partners participated in ecosystem logo wall.</li>
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}>Inclusion in Xeon 6 launch video, 15k+ views.</li>
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}>Inclusion in CEO keynote, 60k+ online views (live+on demand).</li>
    //                             <li style={{listStyle: 'circle', marginLeft: '8%'}}>Custom partner co-marketing videos for top global partners.</li>
    //                         </ul>
    //                     </p>
    //                 </div>
    //                 </div>

    //             {/* EXAMPLE SECTION */}
    //             {/* <div className={styles.background_5}>
    //                 <div className={styles.titlecontainer}>
    //                     <div className={styles.redborder}>
    //                         <div className='redborder_title'>
    //                             H&#38;R Block &#45; $20M in Savings
    //                             <div className={montserrat.className}>
    //                                 <p className={styles.subtitle}>
    //                                     Established the 1st Telecom Expense Management System
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className={styles.buttons}>
    //                         <div className={montserrat.className}>
    //                             launched 1st telecom system
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className={montserrat.className}>
    //                     <div className={styles.gridContainer}>
    //                         <div className={styles.gridItem}>
    //                             <div className={styles.subsection_title}>
    //                                 Situation + Obstacles
    //                             </div>
    //                             <p className={styles.subsection_description}>
    //                                 text
    //                             </p>
    //                         </div>
    //                         <div className={styles.gridItem}>
    //                             <div className={styles.subsection_title}>
    //                                 My Personal Actions
    //                             </div>
    //                             <p className={styles.subsection_description}>
    //                                 text
    //                             </p>
    //                         </div>
    //                         <div className={styles.gridItem}>
    //                             <div className={styles.subsection_title}>
    //                                 Impact + Results    
    //                             </div>
    //                             <p className={styles.subsection_description}>
    //                                 text
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div> */}
    //             </div>
    //         </div> 
    //     </div>
    // );
}

export default LaunchedPrograms;
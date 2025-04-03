import React from 'react'
import { Montserrat } from 'next/font/google' 
import styles from './redblackboxes.module.css'

const montserrat = Montserrat({
    weight: ["400"],
    subsets: ['latin']
})


const RedBlackBoxes = () => {
    return (
        <div>
            <h1>Achievements</h1>
            <div className={styles.redblackboxes}>
                <div className={styles.gridContainer}>
                    <div className={styles.backgrid_a}>
                        <div className={styles.gridItem_a}>
                            <div className={styles.title}>
                            Maximizing Revenue: Listing Precision
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.description}>
                                <div className={montserrat.className}>
                                <p>Drove partner readiness for 5 key global partners and 150 channel partners enabling go to market strategies for Intel Xeon product launches.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.backgrid_r}>
                        <div className={styles.gridItem_a}>
                            <div className={styles.title}>
                            Elevating Awareness: Targeted Persona Strategies.
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.description}>
                                <div className={montserrat.className}>
                                Produced 12 partner launch playbooks within 3 years that resulted in a 20% annual increase in partner participation and co-marketing opportunities for 4 Xeon product portfolio launches.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.backgrid_b}>
                        <div className={styles.gridItem_b}>
                            <div className={styles.title}>
                            Fostering Growth: Engaging Employee Networks
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.description}>
                                <div className={montserrat.className}>
                                Developed an online partner marketing hub as a source to share key messaging, strategy, and activation plans with partner leads to enhance partner alignment and increase employee access to actionable strategic by 200% resources.
                                </div>
                            </div>
                        </div>
                    </div>   
                    {/*<div className={styles.backgrid_rb}>
                        <div className={styles.gridItem_b}>
                            <div className={styles.title}>
                            Boosting Views & Revenue: Dynamic Blog Strategy
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.description}>
                                <div className={montserrat.className}>
                                Increased organic views and revenue for company products and services by 75% through development and maintenance of corporate blog content marketing strategy.
                                </div>
                            </div>
                        </div>
                    </div>*/}    
                </div>
            </div>
        </div>
    );
}

export default RedBlackBoxes;
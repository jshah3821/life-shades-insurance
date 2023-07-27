import React from 'react';
import classes from "./MediCare.module.scss";
import CusContainer from '../../components/layout/CusContainer';
import CardDetail from '../../components/CardDetail/CardDetail';

const MediCare = () => {
    return (
        <>
        <React.Fragment>
                <div className={classes.Medicare_page_main}>
                    <div className={classes.caption_data}>
                        <span className={classes.caption_data_border}>Medicare</span>
                    </div>
                </div>
                <CusContainer>
                    <>
                    <div className={classes.medicare_data_section}>
                        <div className={classes.title_data}>
                            <h1>
                                Our goal at UIA is to help you understand the Medicare plans that are available and best fit your unique health needs. We will educate and guide you through enrollment and use of your plan.
                            </h1>
                        </div>
                        <div className={classes.data_description}>
                            <p>We realize it's a confusing alphabet soup of Medicare part A, B, C, or D  and how those plans interact with supplemental plans.</p>
                            <p>
                                An error in timing can mean you have to pay penalties, limited enrollment opportunity, or coverage delay. As masters of Medicare, you can trust UIA to strip away the confusion and present you options such as Medicare Advantage plans, Medicare supplemental coverage and prescription drug coverage - everything you need for a healthy future.
                            </p>
                            <p>We also understand your financial health is a very important part of your overall well-being. We will support you by helping you understand the financial side of Medicare and we'll simplify the plans available to you. You will leave our office with peace of mind in your plan choice.</p>
                        </div>
                    </div>
                    <CardDetail />
                    </>
                </CusContainer>
                
        </React.Fragment>
        </>
    )
}

export default MediCare
import React from 'react';
import ContentrowTop from './ContentRowTop';
import TopBar from './TopBar';
import Footer from './Footer';

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <TopBar />

                <ContentrowTop />
            </div>

            <Footer />

        </div>

    )
}

export default ContentWrapper;

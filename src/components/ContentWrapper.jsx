import React from 'react';
import TopBar from './TopBar';
import ContentRowTop2 from "./ContentRowTop2";
import Footer from "./Footer";


function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <TopBar />
            <ContentRowTop2 />
        </div>
            <Footer />
        </div>


        );
    }
    export default ContentWrapper;
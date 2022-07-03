import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'


const MetaTags = ({ title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet"></link>
                <script ></script>
            </Helmet>
        </HelmetProvider>
    )
}

export default MetaTags
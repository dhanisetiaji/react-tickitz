import React from "react"
import ContentLoader from "react-content-loader"

const LoaderMovie = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="63" y="286" rx="2" ry="2" width="140" height="10" />
        <rect x="63" y="312" rx="2" ry="2" width="140" height="10" />
        <rect x="27" y="24" rx="2" ry="2" width="218" height="246" />
        <rect x="42" y="339" rx="0" ry="0" width="185" height="37" />
        <rect x="137" y="406" rx="0" ry="0" width="12" height="0" />
    </ContentLoader>
)

export default LoaderMovie

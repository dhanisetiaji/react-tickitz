import React from 'react'

const backgroundStyle = {
    backgroundImage: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(43, 21, 107, 0.8939950980392157) 0%
      ), 
      url("../../img/background-sign.png")`,

    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
}

export const Sidebar = () => {
    return (
        <div className="col-lg-7 d-none d-lg-block">
            <div className="auth-card text-center" style={backgroundStyle}>
                <div className="auth-card-item">
                    <img src="../../img/logo-white.svg" alt="logo-white" />
                    <p className="auth-card-auth">wait, watch, wow!</p>
                </div>
            </div>
        </div>
    )
}

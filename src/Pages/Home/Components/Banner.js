import React from 'react'

export const Banner = () => {
    return (
        <div className="container mt-3">
            <div className="row querydevice">
                <div className="col-md-6">
                    <p className="text-banner">Nearest Cinema, Newest Movie,<br /> Find out now!</p>
                </div>
                <div className="col-md-6">
                    <div className="row banner-mobile">
                        <div className="col-4 text-center col-banner">
                            <img className="img-banner-all img-b-1 " src="./img/Rectangle1.png" alt="banner" />
                        </div>
                        <div className="col-4 text-center col-banner">
                            <img className="img-banner-all img-b-2 " src="./img/Rectangle2.png" alt="banner" />
                        </div>
                        <div className="col-4 text-center col-banner">
                            <img className="img-banner-all img-b-3" src="./img/Rectangle3.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export const FormJoin = () => {
    return (<>
        <div className="joining container">
            <div className="row text-center shadow">
                <div className="col-md-12 card-join">
                    <h5 className="text-join">Be the vanguard of the <br />Moviegoers</h5>
                    <form action="" className="row my-5 justify-content-center">
                        <div className="col-md-6">
                            <div className="row justify-content-center">
                                <div className="col-md-6 text-end input-search-mobile">
                                    <input type="email" className="form-control" id="joining" placeholder="Type your email" />
                                </div>
                                <div className="col-auto text-start button-join">
                                    <button type="submit" className="btn btn-primary mb-3">Join now</button>
                                </div>
                            </div>

                        </div>
                    </form>
                    <p>By joining you as a Tickitz member, <br /> we will always send you the latest updates via email .
                    </p>
                </div>
            </div>
        </div>
    </>)
}

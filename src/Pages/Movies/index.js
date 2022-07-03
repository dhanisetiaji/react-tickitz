import React, { useEffect } from 'react'
import { Navbar } from '../../Components/Navbar'

const Movies = () => {
    useEffect(() => {
        document.title = "Tickitz - List Movies"
    })
    return (<>
        <Navbar />
    </>)
}

export default Movies
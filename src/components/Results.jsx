import React, {useEffect} from "react"
import {allOperations} from '../functions/ammperFunctions.js'
import "../css/Results.css"


const Results = () => {
    useEffect(() => {
        allOperations()
    },[])

    return (
       <div className="results">
        <h6>Last 3 Months balance</h6>
        <p>Information here ...</p>
       </div> 
    )
}
export default Results





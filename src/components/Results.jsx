import React, {useEffect, useState} from "react"
import {allOperations} from '../functions/ammperFunctions.js'
import "../css/Results.css"


const Results = () => {
    const [transactions, setTransactions] = useState(null)

    useEffect(() => {
        allOperations(setTransactions)
    },[])

    return (
       <div className="results">
        <h6>Last 3 Months balance</h6>
        
       </div> 
    )
}
export default Results





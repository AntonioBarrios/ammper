import React, {useEffect} from "react"
import {allOperations} from '../functions/ammperFunctions.js'


const Results = () => {
    useEffect(() => {
        allOperations()
    },[])

    return (
       <div>Results</div> 
    )
}
export default Results
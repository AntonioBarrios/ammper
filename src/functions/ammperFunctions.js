import axios from "axios"

const allOperations = async () => {
    const request = await axios.get('https://development.belvo.com/api/transactions/id/')
}

export {
    allOperations
}
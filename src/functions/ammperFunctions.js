import axios from "axios"

const allOperations = async () => {
    const request = await axios.get('https://api.belvo.com/api/transactions/?id=2259b916-41ec-4dcb-9a01-7865d9c0657e')
    console.log(request)
}

export {
    allOperations 
}
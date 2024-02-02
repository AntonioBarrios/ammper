import axios from "axios"

const allOperations = async () => {
    const request = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(request)
}

export {
    allOperations
}
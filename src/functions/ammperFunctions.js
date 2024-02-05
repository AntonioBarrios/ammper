import axios from "axios"

const allOperations = async (state) => {
const transactions = await axios.get(
      "https://sandbox.belvo.com/api/transactions/?page_size=100&link=8848bd0c-9c7e-4f53-a732-ec896b11d4c4",
      {
        auth: {
          username: "661a8397-d351-460b-b44f-73863b21d446",
          password: "LzQZszHxr6XSM1ZX2D@DDdzTtbfaoPIgoMuaH_KvI#ZdFlXM-SFvKgbxSYjpzjA-",
        },
      }
    );
}
console.log(transactions)
export {
    allOperations
}
import axios from "axios";

async function getData(){
    const putData = await axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user");
    return putData.data
}

const putData = await getData()
console.log('123456789')
console.log("data :", putData);
console.log("12345");
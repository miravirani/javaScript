import axios from "axios";

async function gatData(){
    const firstData = await axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user");
    console.log("frdata in method == ", firstData.data);
    return firstData.data
}
const firstData = await gatData();
console.log(12345);
console.log("after methode calling.....", firstData);
console.log("234567");
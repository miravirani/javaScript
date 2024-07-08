import axios from "axios";

function getData(){
    let promice = new Promise ((res, rej) => {
        axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user")
        .then((dataApi) => {
            console.log("data api calling :", dataApi.data);
        }).catch((error) => {
            console.log("error ", error);
        })
    })
    return promice;
}

getData()
// .then((dataApi) => {
//     console.log(12345);
//     console.log("data : ", dataApi);
//     console.log("45678");
// }).catch((error) => {
//     console.log("error :", error);
// })
import axios from "axios";

function getData() {
    const promise = new Promise((resolve, reject) => {
        
        axios.get(`https://6620acad3bf790e070b04045.mockapi.io/user/user`)
        .then(dataApi =>{
            console.log("resolve dataApi = ", dataApi.data);
        }).catch(error => {
            console.log("reject error = ", error.data);
        })
    });
    return promise;
}

getData().then(dataApi => {
        console.log(3456789789);
        console.log(`After Method Calling :->`, dataApi);
        console.log(5678998);
    }).catch(error => {
        console.error("Error:", error);
    });
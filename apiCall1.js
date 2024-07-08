import axios from "axios";

function getData() {
    try {
        axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user")
            .then(dataApi => {
                console.log(dataApi.data);
            }).catch(err => {
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}
getData()
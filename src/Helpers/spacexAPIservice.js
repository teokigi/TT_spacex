const baseURL = 'https://api.spacexdata.com/v4/launches/'

class Request {

    get(){
        console.log("fetching ");
        
        return fetch(baseURL)
        .then(res => res.json())
    }

}


export default Request;

import axios from "axios"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    findBooks: function(q) {
        console.log("Called findBooks")
        return axios.get("/googlebooks/", {params: {q: "title:" + q} } 
        );
    
},
saveBook: function(bookObject){
    axios.post("", bookObject)
}
}
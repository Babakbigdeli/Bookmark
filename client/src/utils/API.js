import axios from "axios"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    findBooks: function(q) {
        console.log("Called findBooks")
        return axios.get("/googlebooks/", {params: {q: "title:" + q} } 
        );
    
},
saveBook: function(bookObject){
    return axios.post("/books/", bookObject)
},

getBooks: () => {
    axios.get("/googlebooks/",).then((response) => {
        const data = response.data;
        this.setState({ books: data});
        console.log('data has been recieved!!');
    })
    .catch(() => {
        alert('error');
    });
},

saveBookToUser: (email, bookId) => {
    axios.post("/user/addBook", {
        email,
        bookId
    })
}
}
const axios = require("axios");

module.exports = {
    getOpenLibraryBooks: function(req,res) {
        const {query: params} = req;

        axios.get("", {
            params
        }).then(results => console.log(results))
    }
}
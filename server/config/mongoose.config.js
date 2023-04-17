const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/test_bin" , {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("DataBase is secured and we are Connected"))
    .catch((err) => console.log("Failed to connect to authors (Mongo)", err));
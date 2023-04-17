// const { deleteAnExistingUser } = require("../controller/origin.controller");
const Test = require("../controllers/test.controllers");

module.exports = app => {
    
    app.post("/api/person" , Test.create)
    app.get("/api/person", Test.findAll)
    app.get("/api/person/:id", Test.findOne)
    app.delete("/api/person/:id", Test.delete)
    app.put("/api/person/:id" , Test.update)
 }
 
 
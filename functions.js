const { axios } = require("axios");

const functions = {
    add: function(num1,num2){
        return num1+num2;
    },
    isNull: function(){
        return null
    },
    createUser: function(){
        const user = {'FirstName': "Rohit"};
        user['LastName'] = "Kumar";
        return user;
    },
    marksCheck: function(marks1,marks2){
        return marks1+marks2;
    },
    fetchUser: function(){
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=>{res.data})
        .catch((err)=>{'Error'})
    }
}

module.exports = functions;
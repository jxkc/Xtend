// This is going to be a Script for creating a User
// TO COMPLETE LATER 

/* 
User needs:-
    - Name
    - ID
    - Profile Picture
    - Array of the posts made by the user.

User should also be able to:-
    - Login
    - Add Posts (XBlock...)
    - Have Unique Feeds...
*/

let Users = new Array();

function UniqueID(length) {
    var result = '';

    //characters defines the characters being used for the String
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var counter = 0;

    // While the counter is less than the length
    //  Iterate through loop adding random chars to the result.
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    
    return result;
};

//This function creates a User
function createUser(username, password, email){
    let newuser = {
        Username: username,
        Password: password,
        Email: email,
        ID: UniqueID(8)
    };

    return newuser;
}

function addUser(User){
    Users.push(User);
}
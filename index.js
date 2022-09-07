module.exports = function verifyEmail(email){
    console.log("remove this log to demonstrate git")
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

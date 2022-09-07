module.exports = function verifyEmail(email){
    console.log("remove this log to demonstrate git different change")
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

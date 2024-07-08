import otpGenerator from "otp-generation";

console.log("otp =",otpGenerator.generate(6,{
    upperCaseAlphabets: false,
    lowerCaseAlphabets : false,
    specialChars: false
}));


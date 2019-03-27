const EMAIL="EMAIL"
const USERNAME="USERNAME"
const PHONENUMBER="PHONENUMBER"
const PIN_CODE="PIN_CODE"

const USERNAME_PATTERN = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/
const PHONENUMBER_PATTERN = /[6-9]{1}[0-9]{9}/
const PIN_CODE_PATTERN = /[0-9]{6}/
const EMAIL_PATTERN =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function validate(text,type){
  
    switch(type){
        case EMAIL:{
            return EMAIL_PATTERN.test(text);
        }

        case USERNAME:{
            return USERNAME_PATTERN.test(text);
        }

        case PHONENUMBER:{
            return PHONENUMBER_PATTERN.test(text);
        }

        case PIN_CODE:{
            return PIN_CODE_PATTERN.test(text);
        }

        default: return false
    }
}

export const type={
    USERNAME,EMAIL,PHONENUMBER,PIN_CODE
}
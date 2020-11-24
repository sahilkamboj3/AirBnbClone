import { ValidatorType } from '../../util/types';

export const isValidNumber = (num: string): ValidatorType => {
   if (num.length < 10) {
    return {
        valid: false,
    }
   }
   return {
       valid: true,
   }
}

export const isValidEmail = (email: string): ValidatorType => {
    const validDomains: string[] = [
        ".com",
        ".org",
        ".cc`"
    ]

    if (!email.includes("@")) {
        return {
            valid: false,
        }
    }

    let isDomain: boolean = false;
    for (let i = 0; i < validDomains.length; i++) {
       if (email.includes(validDomains[i])) {
            return {
                valid: true,
            }
       }
    }

    return {
        valid: isDomain,
    }
}
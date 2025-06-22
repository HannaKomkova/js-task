let promptPassword = prompt ('enter password');

const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*:?]).{8,}$/;

const validatePassword = (password) => {
    try {
        if (pattern.test(password)) {
            return true;
        } else {
            throw new Error('Пароль не удовлетворяет требованиям')
        }
    } catch (error) {
        return error;
    }
}

let res = validatePassword(promptPassword);

console.log(res);







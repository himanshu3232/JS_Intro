const prompt = require('prompt-sync')()

const is_valid_date = (day, month) => {
    if(month>=3 && month<=6){
        if((month === 3 && day <20) || (month === 6 && day > 20)){
            return false;
        }
        return true;
    }
    return false;
}

const day = parseInt(prompt('Enter Day: '),10)
const month = parseInt(prompt('Enter Month: '),10)

console.log(is_valid_date(day, month))


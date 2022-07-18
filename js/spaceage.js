/***
 * Convert the age in second of the earth to an age
 * of the given planet
 * @param {number} s The time in seconds
 * @param {string} planet The planet we convert age to
 * @return {string} your age returned in years of the give planet
 */

function spaceAge(s, planet){
    let years;
    let earthyear = s / 31557600;
    switch(planet){
        case 'Earth' : {
            years = earthyear;
            break;
        }
        case 'Mercury' : {
            years = earthyear / 0.2408467;
            break;
        }
        case 'Venus' : {
            years = earthyear / 0.61519726;
            break;
        }
        case 'Mars' : {
            years = earthyear / 1.8808158 ;
            break;
        }
        case 'Jupiter' : {
            years = earthyear / 11.862615;
            break;
        }
        default : return 'Planet is not recognized';
    }
    return `Your age in ${planet} years is ${years}`;
}

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
let test = 1136073600;

for(planet of planets){
    console.log(spaceAge(test, planet));
}
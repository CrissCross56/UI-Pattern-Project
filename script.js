
console.log(baseString);
//have diff strings for the diff family members
const rick = 'rick';
const morty = 'morty';
const summer = 'summer';
const jerry = 'jerry';
const beth = 'beth';
//have one here for mr poopy butthole

                                    //                             V   put variables for name placeholders in here
let currentURL = `https://rickandmortyapi.com/api/character/?name=${}`;


//have a function to determine what goes inside the template literal
function userChoice(input){

    switch (input) {
        case value:
            
            break;
    
        default:
            break;
    }

    return;
}

let firstSeason = [];
//get the first 11 eps from the api
fetch(currentURL)
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    //code goes here
    console.log("were getting here");
    console.log(response);
  })
  .catch((err) => {
    //will throw an error for us if something goes wrong
  });

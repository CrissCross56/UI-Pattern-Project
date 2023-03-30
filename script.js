

//have diff strings for the diff family members
//gain access to ur DOM elements
let image = document.querySelector('#chara');
let displayName = document.querySelector('#name');
let displayInfo = document.querySelector('p');
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let family;
// let charaName = family[0];

let iteration = 0;
//have one here for mr poopy butthole

                                    //                             
let currentURL = `https://rickandmortyapi.com/api/character/?location=c137`;


//attach event listeners


//get the first five characters from earth c137, main cast family
//make several requests
fetch(currentURL)
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    //code goes here
    console.log("were getting here");
    // 0, 1, 2, 3, 4 '
    family = []
    for(let i = 0; i < 5; i ++){

      family.push(response.results[i]);
    }
    
  })
  .then(() => {
    prevButton.addEventListener('click', ()=> getPrev());
    nextButton.addEventListener('click', () => getNext());
    setUpPage();
  })
  .catch((err) => {
    //will throw an error for us if something goes wrong
  });

function getPrev(){
  iteration --;
  if(iteration < 0){
    iteration = family.length - 1;
    setUpPage();
  }
  else{
    console.log('we went down', iteration);
    setUpPage();
  }
}

function getNext(){
  iteration++;
  if(iteration > family.length - 1){
    iteration = 0;
    setUpPage();
  }
  else{
    console.log('we plussed', iteration)
    setUpPage();
  }
}

function setUpPage(){
  console.log(family[iteration]);
  // console.log(family)
  console.log(family[iteration].name)
  displayName.innerText = family[iteration].name;
  image.src = family[iteration].image;
  displayInfo.innerText = `Status: ${family[iteration].status} 
  Species: ${family[iteration].species}`
  //set up event listeners
  
  
}


// setUpPage();
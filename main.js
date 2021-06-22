//Get the button so I can add an event listener
var makeStoryButton = document.getElementById('story-maker-button');
makeStoryButton.addEventListener('click', testUserInput);

//Get the user input value so I can test that it's been entered and so I can use it in the story.
function testUserInput() {
    var userInput = document.getElementsByName("input");
    do {
        alert("You missed a spot.");
    }
    while (userInput.value == null)
    makeStoryFunction();
}


//Create a function to generate the story
var nounInputValue = document.getElementById('noun-input');
var adverbInputValue = document.getElementById('adverb-input');
var nameInputValue = document.getElementById('name-input');
function makeStoryFunction() {
    var storyTitle = document.getElementById('user-story-title');
    var storyContents = document.getElementById('user-story-contents');
    storyTitle.innerText = "I think I'm gonna be sick";
    storyContents.innerText = "Earlier I was " + adverbInputValue.value + " minding my own damn business when all of the sudden " + nameInputValue.value + " appeared out of no where and hit me with a " + nounInputValue.value + ". They gave me a concussion and I've been throwing up nonstop since. Man, I can't stand " + nameInputValue.value + "!";
};
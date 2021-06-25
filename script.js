        //Get the input fields so that I can test if they've been filled out
        var inputField = document.getElementsByName('input');
        if (inputField.value <= 0) {
            var inputError = alert("You missed a spot.");
        }
        else
        {
            makeStoryFunction;
        }
        //Get the button so I can add an event listener
        var makeStoryButton = document.getElementById('story-maker-button');
        //Create a function to generate the story
        var makeStoryFunction = function()
        {
                var storyTitle = document.getElementById('user-story-title');
                var nounInputValue = document.getElementById('noun-input');
                var adverbInputValue = document.getElementById('adverb-input');
                var nameInputValue = document.getElementById('name-input');
                var storyContents = document.getElementById('user-story-contents');
                storyTitle.innerHTML = "I think I'm gonna be sick";
                storyContents.innerHTML = "Earlier I was " + adverbInputValue.value + " minding my own damn business when all of the sudden " + nameInputValue.value + " appeared out of no where and hit me with a " + nounInputValue.value + ". They gave me a concussion and I've been throwing up nonstop since. Man, I can't stand " + nameInputValue.value + "!";
        };
        makeStoryButton.addEventListener('click', makeStoryFunction);
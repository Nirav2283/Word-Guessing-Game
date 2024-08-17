let List = [
    {
        word: "python",
        question: "Which Programming language is used for machine learning?",
        hint: "Name start with P"
    },

    {
        word: "calculator",
        question: "Which Device used for calculate mathematical operation?",
        hint: "It is also avaliable in mobile and physical too.."

    },

    {
        word: "firoz",
        question: "Which professor conduct OAT lecture?",
        hint: "he/she says formulllla instead of formula"

    },

    {
        word: "krunal",
        question: "which professor is placement coordinator in du?",
        hint: "he/she was taught Digital Fundamental in 1st sem"

    },
    {
        word: "jayesh",
        question: "who is HOD of sem 3?",
        hint: "name start with 'J'"

    }

]
//here the game starts
function startGame() {
    document.getElementById('instructionOverlay').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    wordGenerator();
    document.getElementById('music').play();
}

function displayInfo(){
    document.getElementById('developerInfoCard').style.display = 'flex'
}

// Function to close the developer info card
function closeInfo() {
    document.getElementById('developerInfoCard').style.display = 'none';
}



//this function will generate a random word from the list and create a blanks according to word.
let selectedWord;
let chance;
typingInput = document.querySelector(".invisible1");
let randomIndex;
function wordGenerator() {
    randomIndex = Math.floor(Math.random() * List.length);
    selectedWord = List[randomIndex].word;
    let que = List[randomIndex].question;
    chance = 10;

    console.log(selectedWord);

    let display = ""
    for (let i = 0; i < selectedWord.length; i++) {
        display += "<input type='text' class='demo'>";
    }

    document.getElementById('boxes').innerHTML = display;
    document.getElementById('question').textContent = que;
    document.getElementById('chance').textContent = chance;
    document.getElementById('hint').textContent = "";
    document.getElementById('developerInfoCard2').style.display = 'none'
    document.getElementById('developerInfoCard3').style.display = 'none'
}
wordGenerator()

// //generate a hint
function hint() {
    let hint = List[randomIndex].hint;
    document.getElementById('hint').textContent = "Hint: " + hint;
    chance--;
    document.getElementById('hintButton').disabled = true;
    document.getElementById('hintButton').style.opacity = 0.5;
    document.getElementById('chance').textContent = chance;
}

//this function will give a next question
function next() {
    document.getElementById('hintButton').disabled = false;
    document.getElementById('hintButton').style.opacity = 1;
    wordGenerator()
}

//this will reset a game
function resetgame() {
    for (let i = 0; i < selectedWord.length; i++) {
        document.getElementById('boxes').querySelectorAll("input")[i].value = "";
    }
    chance = 10;
    document.getElementById('hint').textContent = "";
    document.getElementById('hintButton').disabled = false;
    document.getElementById('hintButton').style.opacity = 1;
    document.getElementById('chance').textContent = chance;
}

function checkans() {
    let inputs = document.getElementById('boxes').querySelectorAll("input");
    for (let i = 0; i < selectedWord.length; i++) {
        inputs[i].value = selectedWord[i];
    }
}
//main logic of game
typing = document.querySelector('invisible1');
document.addEventListener("keydown", () => typing.focus())
document.addEventListener("input", init);

function init(e) {
    let key = e.target.value;
    let incorrect = [], correct = [];

    if (key.match(/^[a-z]+$/i)) {
        if (selectedWord.includes(key)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === key) {
                    correct.push(key);
                    document.getElementById('boxes').querySelectorAll("input")[i].value = key;
                }
            }
            let allGuessed = true;
            let inputs = document.getElementById('boxes').querySelectorAll("input");
            for (let i = 0; i < selectedWord.length; i++) {
                if (inputs[i].value !== selectedWord[i]) {
                    allGuessed = false;
                    break;
                }
            }
            // setTimeout
            // if (allGuessed) {
            //     alert("Congratulations! You've guessed the word correctly.");
            //     document.getElementById('hintButton').disabled = false;
            //     setTimeout(wordGenerator, 1500);
            // }
            

            //using this user will not face a delay to display a late input
            if (allGuessed) {
                function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
    
            async function displayLetter() {
                await delay(500);
                
                document.getElementById('developerInfoCard2').style.display = 'flex'
                document.getElementById('hintButton').disabled = false;
                document.getElementById('hintButton').style.opacity = 1;
                setTimeout(wordGenerator, 1500);
            }
    
            displayLetter() 
            }

        } else {
            incorrect.push(key);
            chance--;
            document.getElementById('wrong').textContent = incorrect
           
           
        }
        document.getElementById('chance').textContent = chance;
    }

    typingInput.value = "";

    if (chance == 0) {
        checkans()
        document.getElementById('hintButton').disabled = false;
        document.getElementById('hintButton').style.opacity = 1;
        document.getElementById('developerInfoCard3').style.display = 'flex'
        setTimeout(wordGenerator, 3500);
      

    }
}
typingInput.addEventListener("input", init);
// inputs.addEventListener("click" , ()=>typingInput.focus())
//this method is automatically focus on inputbox
document.addEventListener("keydown", () => typingInput.focus())


//creating a keyboard for Mobile user
      
function openKeyboard() {
    typingInput.focus();
}

   

function handleKeyboardChoice(hasPhysicalKeyboard) {
    document.getElementById('keyboardQueryOverlay').style.display = 'none';
    
    if (hasPhysicalKeyboard) {
        typingInput.focus();
    } else {
      
        // Add "Open Keyboard" button and show instructions
        let keyboardContainer = document.getElementById('keyboardContainer');
        let openKeyboardButton = document.createElement('button');
        openKeyboardButton.textContent = "Open Keyboard";
        openKeyboardButton.className = "button-89";
        openKeyboardButton.onclick = openKeyboard;
        keyboardContainer.appendChild(openKeyboardButton);
    }
}



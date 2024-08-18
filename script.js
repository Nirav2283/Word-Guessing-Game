let List = [
    {
        "word": "python",
        "question": "Which Programming language is used for machine learning?",
        "hint": "Name start with P"
    },

    {
        "word": "calculator",
        "question": "Which Device used for calculate mathematical operation?",
        "hint": "It is also avaliable in mobile and physical too.."

    },

    {
        "question": "What term refers to the process of converting data into a code to prevent unauthorized access?",
        "word": "encryption",
        "hint": "It starts with 'E' and is crucial for data security."
    },

    {
        "word": "debugging",
        "question": "What is the term used to describe the process of identifying and fixing errors in a program?",
        "hint": "It involves finding and resolving bugs in the code."
    },
    {
        "word": "algorithm",
        "question": "What do we call a step-by-step set of instructions designed to solve a specific problem?",
        "hint": "It's a foundational concept in computer science, often used in programming and problem-solving."
    },

    {
        "word": "javascript",
        "question": "Which programming language is widely used for adding interactivity to websites?",
        "hint": "This language runs in the browser and is often used alongside HTML and CSS."
    },
    {
        "word": "java",
        "question": "Which programming language is known for its 'write once, run anywhere' capability and is commonly used in enterprise environments?",
        "hint": "This language shares its name with an island in Indonesia and a type of coffee."
    },
    {
        "word": "cybersecurity",
        "question": "What is the practice of protecting systems, networks, and programs from digital attacks?",
        "hint": "This field is crucial for safeguarding sensitive information and ensuring the integrity of data."
    },
    {
        "word": "cloud",
        "question": "What is the term for delivering computing services like storage, databases, and software over the internet?",
        "hint": "This technology allows users to access resources remotely rather than on a local server or personal computer."
    },
    {
        "word": "database",
        "question": "What is a structured collection of data that can be easily accessed, managed, and updated?",
        "hint": "This system is often used to store information for websites and applications, and can be queried using SQL."
    },
    {
        "word": "compiler",
        "question": "What is the program that translates source code written in a high-level programming language into machine code?",
        "hint": "This tool is essential for converting human-readable code into something a computer can execute."
    },
    {
        "word": "bit",
        "question": "What is the basic unit of information in computing, representing a state of 0 or 1?",
        "hint": "This term is a contraction of 'binary digit'."
    },
    {
        "word": "binary",
        "question": "What is the number system that uses only two digits, 0 and 1, to represent all data in computers?",
        "hint": "This system is the foundation of all digital systems and is used in computing and electronics."
    },
    {
        "word": "loop",
        "question": "What is the control structure in programming that repeats a block of code while a condition is true?",
        "hint": "This structure is essential for tasks that require repetitive operations."
    },
    {
        "word": "stack",
        "question": "What is the data structure that follows the Last In, First Out (LIFO) principle?",
        "hint": "This structure is used in various algorithms, such as in expression evaluation and backtracking."
    },
    {
        "word": "queue",
        "question": "What is the data structure that follows the First In, First Out (FIFO) principle?",
        "hint": "This structure is often used in scheduling and managing tasks in order."
    },
    {
        "word": "function",
        "question": "What is the reusable block of code that performs a specific task in a program?",
        "hint": "This concept is crucial for organizing and reusing code efficiently."
    },
    {
        "word": "sql",
        "question": "What is the language used to communicate with and manage databases by performing tasks such as querying, updating, and managing data?",
        "hint": "This language stands for Structured Query Language."
    },
    {
        "word": "regex",
        "question": "What is the sequence of characters that forms a search pattern, often used for string searching algorithms?",
        "hint": "This tool is commonly used in text processing and pattern matching."
    },
    {
        "word": "pixel",
        "question": "What is the smallest unit of a digital image or graphic that can be displayed and represented on a digital display device?",
        "hint": "This element is often used in digital cameras and screens."
    },
    {
        "word": "graph",
        "question": "What is the data structure that consists of a set of nodes (vertices) and a set of edges connecting pairs of nodes?",
        "hint": "This structure is widely used in network analysis, social media, and pathfinding algorithms."
    },
    {
        "word": "array",
        "question": "What is the data structure that stores elements in a contiguous block of memory and allows indexed access to elements?",
        "hint": "This structure is best for scenarios requiring quick access to elements by index."
    },
    {
        "word": "thread",
        "question": "What is the term for a lightweight process that allows for concurrent execution of code in Java?",
        "hint": "Threads can be created by implementing the `Runnable` interface or extending the `Thread` class."
    },
    {
        "word": "static",
        "question": "What is the keyword in Java used to declare a member that belongs to the class rather than any instance of the class?",
        "hint": "Static methods and variables can be accessed without creating an instance of the class."
    },
    {
        "word": "form",
        "question": "What is the HTML tag used to create an interactive form that can collect user input?",
        "hint": "This tag often includes elements like `<input>`, `<textarea>`, and `<button>`."
    },
    {
        "word": "table",
        "question": "What is the HTML tag used to define a table in a webpage, containing rows and columns of data?",
        "hint": "This tag is used in conjunction with `<tr>`, `<td>`, and `<th>` to organize tabular data."
    },
    {
        "word": "script",
        "question": "What is the HTML tag used to include JavaScript code in a webpage or link to an external JavaScript file?",
        "hint": "This tag is used to add interactivity and dynamic behavior to web pages."
    },
    {
        "word": "path",
        "question": "What is the term for the part of the URL that specifies the route or endpoint in an Express.js application?",
        "hint": "This term is used to define the routes in `app.get()`, `app.post()`, and other route methods."
    },
    {
        "word": "route",
        "question": "What is the term for a specific URL pattern that is associated with a handler function in an Express.js application?",
        "hint": "Routes are defined using methods like `app.get()`, `app.post()`, and `app.put()`."
    },
    {
        "word": "server",
        "question": "What is the term for the process that listens for incoming requests and sends responses back to clients in an Express.js application?",
        "hint": "This process is started using `app.listen()`."
    },

]
//here the game starts
function startGame() {
    document.getElementById('instructionOverlay').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    
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
let score = 0;
let original = [...List] ; // this will not repeat question
let chance;
typingInput = document.querySelector(".invisible1");
let randomIndex;
let questionasked = 0;

function wordGenerator() {
    if(questionasked >= 5){
        endgame();
        return;
    }
    if(List.length === 0){
        List = [...original];
    }
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

    //remove the question from list
    List.splice(randomIndex, 1);
    questionasked++;
}

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
    document.getElementById('wrong').textContent = ""
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
    document.getElementById('wrong').textContent = "";
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
                score++;
                setTimeout(wordGenerator, 1500);
            }
    
            displayLetter() 
            }

        } else {
            incorrect.push(key);
            chance--;
            document.getElementById('wrong').textContent = incorrect.join(', ');
           
           
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
        wordGenerator();
    } else {
      
        // Add "Open Keyboard" button and show instructions
        let keyboardContainer = document.getElementById('keyboardContainer');
        let openKeyboardButton = document.createElement('button');
        openKeyboardButton.textContent = "Open Keyboard";
        openKeyboardButton.className = "button-89";
        openKeyboardButton.onclick = openKeyboard;
        keyboardContainer.appendChild(openKeyboardButton);
        wordGenerator();
    }
}
function endgame(){
    document.getElementById('developerInfoCard4').style.display = 'flex'
    document.getElementById('score').textContent = score;
    document.getElementById('developerInfoCard2').style.display = 'none'
    document.getElementById('developerInfoCard3').style.display = 'none'
    document.getElementById('gameContainer').style.display = 'none';
}


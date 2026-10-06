// ========================================
// CYBERSECURITY QUIZ
// ========================================


// ========================================
// QUESTIONS
// ========================================

const questions = [

    {
        question: "What is phishing?",
        choices: [
            "A type of computer",
            "A fraudulent attempt to obtain information",
            "A programming language",
            "A type of antivirus"
        ],
        answer: 1
    },

    {
        question: "Which is the strongest password?",
        choices: [
            "password123",
            "12345678",
            "John2008",
            "T7!qP9#zL2"
        ],
        answer: 3
    },

    {
        question: "What should you do when you receive a suspicious link?",
        choices: [
            "Click it immediately",
            "Share it with friends",
            "Check it before clicking",
            "Enter your password"
        ],
        answer: 2
    },

    {
        question: "What does 2FA provide?",
        choices: [
            "An additional layer of account security",
            "Faster internet",
            "More storage",
            "A stronger Wi-Fi signal"
        ],
        answer: 0
    },

    {
        question: "Which information should you avoid sharing publicly?",
        choices: [
            "Your favorite color",
            "Your favorite game",
            "Your password",
            "Your favorite food"
        ],
        answer: 2
    },

    {
        question: "What is malware?",
        choices: [
            "A type of monitor",
            "Malicious software",
            "A programming language",
            "A search engine"
        ],
        answer: 1
    },

    {
        question: "What should you do if you receive a suspicious email?",
        choices: [
            "Open every attachment",
            "Reply with your password",
            "Ignore or report it",
            "Forward it to everyone"
        ],
        answer: 2
    },

    {
        question: "Why should you update your software?",
        choices: [
            "To make your phone heavier",
            "Updates can fix security vulnerabilities",
            "To delete your files",
            "To remove your internet connection"
        ],
        answer: 1
    },

    {
        question: "What is a good practice when using public Wi-Fi?",
        choices: [
            "Share passwords with strangers",
            "Access every suspicious website",
            "Be careful when accessing sensitive accounts",
            "Turn off all security settings"
        ],
        answer: 2
    },

    {
        question: "What should you do if you think your account has been compromised?",
        choices: [
            "Ignore it",
            "Change your password and secure the account",
            "Give someone your password",
            "Post your password online"
        ],
        answer: 1
    },

    {
        question: "Which is an example of sensitive information?",
        choices: [
            "Your favorite movie",
            "Your favorite color",
            "Your bank account details",
            "Your favorite sport"
        ],
        answer: 2
    },

    {
        question: "What should you do with a suspicious attachment?",
        choices: [
            "Open it immediately",
            "Download it on every device",
            "Verify the sender before opening it",
            "Send it to strangers"
        ],
        answer: 2
    },

    {
        question: "What does a firewall help protect against?",
        choices: [
            "Unauthorized network access",
            "Low battery",
            "Broken screens",
            "Slow typing"
        ],
        answer: 0
    },

    {
        question: "What is a digital footprint?",
        choices: [
            "A mark left by a computer",
            "The record of your online activities",
            "A computer virus",
            "A type of password"
        ],
        answer: 1
    },

    {
        question: "Which action can help protect your online accounts?",
        choices: [
            "Using the same password everywhere",
            "Sharing passwords with friends",
            "Using strong and unique passwords",
            "Writing passwords publicly"
        ],
        answer: 2
    },

    {
        question: "What should you do before downloading an unfamiliar app?",
        choices: [
            "Check its source and reviews",
            "Download it immediately",
            "Disable your security settings",
            "Give it every permission"
        ],
        answer: 0
    },

    {
        question: "What is ransomware?",
        choices: [
            "Software that locks or encrypts data and demands payment",
            "A type of keyboard",
            "A search engine",
            "A social media platform"
        ],
        answer: 0
    },

    {
        question: "What should you do if a website asks for unnecessary personal information?",
        choices: [
            "Provide everything",
            "Be cautious and avoid sharing it",
            "Share it publicly",
            "Send your password too"
        ],
        answer: 1
    },

    {
        question: "Why is reusing the same password risky?",
        choices: [
            "It makes your device slower",
            "One compromised account can put other accounts at risk",
            "It uses too much storage",
            "It damages your keyboard"
        ],
        answer: 1
    },

    {
        question: "What is a scam?",
        choices: [
            "A legitimate security update",
            "A deceptive scheme intended to trick people",
            "A computer component",
            "A programming tool"
        ],
        answer: 1
    },

    {
        question: "Which is a warning sign of a phishing message?",
        choices: [
            "Unexpected urgency",
            "A normal conversation",
            "A message from a trusted friend you expected",
            "A school announcement you verified"
        ],
        answer: 0
    },

    {
        question: "What should you do if someone asks for your password?",
        choices: [
            "Give it to them",
            "Post it online",
            "Keep it private",
            "Send it through public chat"
        ],
        answer: 2
    },

    {
        question: "What is encryption?",
        choices: [
            "Deleting a file",
            "Converting information into a protected form",
            "Making a computer faster",
            "Removing a password"
        ],
        answer: 1
    },

    {
        question: "Which is safer when creating an online account?",
        choices: [
            "Using your birthday as your password",
            "Using a unique strong password",
            "Using 'password123'",
            "Using your full name"
        ],
        answer: 1
    },

    {
        question: "What should you do with an unexpected message asking for money?",
        choices: [
            "Send the money immediately",
            "Verify the request independently",
            "Forward it to everyone",
            "Give the sender your password"
        ],
        answer: 1
    },

    {
        question: "Why should you lock your device when you are not using it?",
        choices: [
            "To protect it from unauthorized access",
            "To make it charge faster",
            "To increase storage",
            "To improve the camera"
        ],
        answer: 0
    },

    {
        question: "What is identity theft?",
        choices: [
            "Someone using another person's personal information",
            "Losing your phone",
            "Forgetting a password",
            "Deleting an old account"
        ],
        answer: 0
    },

    {
        question: "Which should you avoid when using a public computer?",
        choices: [
            "Logging out after use",
            "Using strong passwords",
            "Saving your password in the browser",
            "Closing your accounts"
        ],
        answer: 2
    },

    {
        question: "What is the safest response to a suspicious pop-up?",
        choices: [
            "Click every button",
            "Download whatever it recommends",
            "Close it without interacting with it",
            "Enter your personal information"
        ],
        answer: 2
    },

    {
        question: "Why should you be careful about what you post online?",
        choices: [
            "Online posts can contribute to your digital footprint",
            "The internet deletes everything automatically",
            "Nobody can see public posts",
            "Posts cannot be copied"
        ],
        answer: 0
    },

    {
        question: "What is a secure way to verify a suspicious message from a company?",
        choices: [
            "Use the contact information provided in the suspicious message",
            "Contact the company through its official website or app",
            "Reply with your password",
            "Click the message's link"
        ],
        answer: 1
    },

    {
        question: "What should you do if you accidentally click a suspicious link?",
        choices: [
            "Enter more information",
            "Ignore all warnings",
            "Close the page and take appropriate security steps",
            "Share the link"
        ],
        answer: 2
    },

    {
        question: "What is antivirus software designed to do?",
        choices: [
            "Help detect and remove malicious software",
            "Increase your screen size",
            "Create social media accounts",
            "Improve your typing speed"
        ],
        answer: 0
    },

    {
        question: "Which is an example of two-factor authentication?",
        choices: [
            "Password only",
            "Username only",
            "Password plus a verification code",
            "Email address only"
        ],
        answer: 2
    },

    {
        question: "What should you do when using an unfamiliar USB drive?",
        choices: [
            "Use it immediately",
            "Be cautious because it may contain malicious software",
            "Give it to everyone",
            "Disable your antivirus"
        ],
        answer: 1
    },

    {
        question: "Which is a good cybersecurity habit?",
        choices: [
            "Regularly reviewing account activity",
            "Sharing passwords",
            "Ignoring security alerts",
            "Using unknown software"
        ],
        answer: 0
    },

    {
        question: "What should you do if you receive a login alert you do not recognize?",
        choices: [
            "Ignore it",
            "Investigate the account and secure it if necessary",
            "Share the alert publicly",
            "Give someone your password"
        ],
        answer: 1
    },

    {
        question: "Why should you avoid downloading files from unknown websites?",
        choices: [
            "They may contain malware",
            "They are always too large",
            "They can make your keyboard dirty",
            "They always delete your browser"
        ],
        answer: 0
    },

    {
        question: "What is a brute-force attack?",
        choices: [
            "Trying many possible passwords to gain access",
            "Physically breaking a computer",
            "Sending a normal email",
            "Updating software"
        ],
        answer: 0
    },

    {
        question: "Which action makes an online account more secure?",
        choices: [
            "Enabling two-factor authentication",
            "Sharing your password",
            "Using a simple password",
            "Ignoring security alerts"
        ],
        answer: 0
    },

    {
        question: "What should you do before entering your password on a website?",
        choices: [
            "Check that the website is legitimate",
            "Share the password first",
            "Ignore the website address",
            "Use any random website"
        ],
        answer: 0
    },

    {
        question: "What is a secure way to handle passwords?",
        choices: [
            "Write them on a public post",
            "Use a reputable password manager",
            "Use the same password everywhere",
            "Share them with classmates"
        ],
        answer: 1
    },

    {
        question: "Which message is most suspicious?",
        choices: [
            "A normal message from a friend",
            "A message demanding immediate payment through an unknown link",
            "A verified school announcement",
            "A message you were expecting"
        ],
        answer: 1
    },

    {
        question: "What is cyberbullying?",
        choices: [
            "Using digital platforms to repeatedly harass or harm someone",
            "Updating a computer",
            "Creating a password",
            "Installing antivirus software"
        ],
        answer: 0
    },

    {
        question: "Why should you review app permissions?",
        choices: [
            "To understand what information an app can access",
            "To make your phone heavier",
            "To remove your internet",
            "To increase your screen brightness"
        ],
        answer: 0
    },

    {
        question: "What should you do when a website has an unusual URL?",
        choices: [
            "Trust it immediately",
            "Be cautious and verify the website",
            "Enter your password",
            "Share it with friends"
        ],
        answer: 1
    },

    {
        question: "What is a security update?",
        choices: [
            "An update that may fix security problems",
            "A new wallpaper",
            "A new keyboard",
            "A social media post"
        ],
        answer: 0
    },

    {
        question: "Which action can help protect your social media account?",
        choices: [
            "Enable two-factor authentication",
            "Share your password",
            "Accept every unknown request",
            "Post private information publicly"
        ],
        answer: 0
    },

    {
        question: "What should you do if you receive a suspicious friend request?",
        choices: [
            "Accept immediately",
            "Check whether the account is legitimate",
            "Give the account your password",
            "Send personal information"
        ],
        answer: 1
    },

    {
        question: "What is the main goal of cybersecurity awareness?",
        choices: [
            "To help people recognize and avoid digital threats",
            "To make computers more expensive",
            "To eliminate the internet",
            "To make passwords unnecessary"
        ],
        answer: 0
    }

];


// ========================================
// VARIABLES
// ========================================

let currentQuestion = 0;

let score = 0;

let answered = false;


// ========================================
// SHUFFLE QUESTIONS
// ========================================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        let j =
            Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];

    }

}


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").textContent =
        q.question;

    document.getElementById("progress").textContent =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        questions.length;


    for (let i = 0; i < 4; i++) {

        let button =
            document.getElementById("choice" + i);

        button.textContent =
            q.choices[i];

        button.classList.remove("correct");

        button.classList.remove("wrong");

        button.disabled = false;

    }


    document.getElementById("feedback").innerHTML =
        "";

    answered = false;

}


// ========================================
// CHECK ANSWER
// ========================================

function checkAnswer(choice) {

    if (answered) {
        return;
    }

    answered = true;

    let q = questions[currentQuestion];

    let buttons =
        document.querySelectorAll(".choices button");


    // CORRECT

    if (choice === q.answer) {

        buttons[choice].classList.add("correct");

        document.getElementById("feedback").innerHTML =
            "✅ Correct!";

        score++;

    }


    // WRONG

    else {

        buttons[choice].classList.add("wrong");

        buttons[q.answer].classList.add("correct");

        document.getElementById("feedback").innerHTML =

            "❌ Incorrect!" +
            "<strong>Correct answer: " +
            q.choices[q.answer] +
            "</strong>";

    }


    // Disable choices

    for (let button of buttons) {

        button.disabled = true;

    }


    // Automatically go to next question
    // after 2 seconds

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        }

        else {

            showResult();

        }

    }, 2000);

}


// ========================================
// SHOW FINAL RESULT
// ========================================

function showResult() {

    let percentage =
        Math.round(
            (score / questions.length) * 100
        );


    let message = "";


    if (percentage >= 90) {

        message =
            "Excellent! You have strong cybersecurity awareness.";

    }

    else if (percentage >= 75) {

        message =
            "Great job! You have good cybersecurity awareness.";

    }

    else if (percentage >= 50) {

        message =
            "Not bad! There is still more to learn about cybersecurity.";

    }

    else {

        message =
            "Keep learning! Improving your cybersecurity awareness can help keep you safer online.";

    }


    document.querySelector(".quiz-container").innerHTML = `

        <h1>🎉 Quiz Complete!</h1>

        <div class="question-box">

            <div>

                <p style="font-size: 28px;">
                    Your Score
                </p>

                <p style="font-size: 50px; margin: 10px;">
                    ${score} / ${questions.length}
                </p>

                <p style="font-size: 25px;">
                    ${percentage}%
                </p>

                <p style="font-size: 18px;">
                    ${message}
                </p>

            </div>

        </div>

        <button
            id="restartButton"
            onclick="restartQuiz()">

            🔄 Try Again

        </button>

    `;

}


// ========================================
// RESTART QUIZ
// ========================================

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    shuffle(questions);

    showQuestion();

}


// ========================================
// START QUIZ
// ========================================

shuffle(questions);

showQuestion();

// --- Sign In Buttons Logic ---
const signInButtons = document.querySelectorAll('.signInButton');

if (signInButtons.length > 0) {
    signInButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            window.location.href = "signin.html";
        });
    });
}

// --- Pushpa Image Click Logic ---
const pushpaImage = document.getElementById('pushpaImage');

if (pushpaImage) {
    pushpaImage.addEventListener('click', function() {
        console.log("Pushpa image clicked! Redirecting to Pushpa: The Rise Wikipedia.");
        window.location.href = 'https://en.wikipedia.org/wiki/Pushpa:_The_Rise';
    });
} else {
    console.error("Pushpa image with ID 'pushpaImage' not found in the HTML. Please check the ID for typos.");
}


const luckybhaskarImage = document.getElementById('luckybhaskarImage');

if (luckybhaskarImage) {
    luckybhaskarImage.addEventListener('click', function() {
        console.log("Lucky Bhaskar image clicked! Redirecting to Telugu trailer.");
        window.location.href = 'https://www.youtube.com/watch?v=krdomVobIxE';
    });
} else {
    console.error("Lucky Bhaskar image with ID 'luckybhaskarImage' not found in the HTML.");
}



const faqBoxes = document.querySelectorAll('.fbox');

if (faqBoxes.length > 0) {
    
    faqBoxes.forEach(box => {
       
        const questionHeader = box.querySelector('.question-header');
        
        if (questionHeader) {
            questionHeader.addEventListener('click', function() {
             
                box.classList.toggle('active');

               
                faqBoxes.forEach(otherBox => {
                   
                    if (otherBox !== box && otherBox.classList.contains('active')) {
                        otherBox.classList.remove('active');
                    }
                });
            });
        }
    });
} else {
    
    console.warn("No elements with class 'fbox' found for FAQ accordion. Ensure your HTML structure is correct.");
}
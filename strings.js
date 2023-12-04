// Assignment 3.1: Palindrome Checker | Lela J. Sanchez

function isPalindrome(str)
{
    // create a constant/variable to hold our cleaned string that replaces 
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // ^ is a negation or negated character class. It matches any character not listed in the character set.
    // /[^a-zA-Z0-9]/ matches any non-alphanumeric character (e.g., special characters, punctuation, spaces).
    // The g flag ensures that it replaces all occurrences in the string.

    // check if cleanedStr is equal to its reverse by using ===
    return cleanedStr === cleanedStr.split("").reverse().join(""); // return the reversed string using the reverse() method!
    // .split("") Splits the cleaned string into an array of chars
    // .reverse() Reverses the order of the elements in the array
    // .join("") Joins the reversed array back into a string
}

function checkPalindrome()
{
    const userInput = document.getElementById("inputString").value.trim(); // trim() method removes white space from both ends of a string, but not anywhere in between

    if (userInput === "") // If the user did not enter anything...
    {
        alert("INVALID INPUT! Please enter a valid string."); // alert to invalid input then return
        return;
    }

    let resultMessage;

    // check if the userInput is a Palindrome
    if (isPalindrome(userInput)) // takes in the userInput as the str/string parameter
    {
        resultMessage = "The entered string is a palindrome. Congratulations!";
    }
    else // if it is not a Palindrome OR equal to itself spelled backwards...
    {
        resultMessage = "The entered string is NOT a palindrome. Try Again!";
    }
    alert(resultMessage);

    document.getElementById("results").innerHTML = "You entered: " + userInput + " | Result: " + resultMessage; // concatination of strings
}
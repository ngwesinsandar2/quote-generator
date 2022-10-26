"use strict";

const loader = document.querySelector(".loader");
const quoteTextCon = document.querySelector(".quote-text-con");
const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");
const generateBtn = document.querySelector(".generate-btn");

const quotesUrl = "https://type.fit/api/quotes";
let quotesArr = [];

const quotesGenerator = async () => {
    loader.hidden = false
    quoteTextCon.hidden = true
    author.hidden = true

    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        quotesArr = data

        setTimeout(() => {
        loader.hidden = true
        quoteTextCon.hidden = false
        author.hidden = false
        let randomNum = Math.floor(Math.random() * quotesArr.length);
        if(quotesArr[randomNum].text.length >= 80) quoteText.style.fontSize = "33px";
        quoteText.textContent = quotesArr[randomNum].text;
        if(!quotesArr[randomNum].author) {
            author.textContent = "Anonymous"
        }else{
            author.textContent = quotesArr[randomNum].author;
        }
    }, 2000);
    } catch (error) {
        console.log(error)
    }
}
quotesGenerator();
generateBtn.addEventListener("click", quotesGenerator);
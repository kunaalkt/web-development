const formElement = document.forms["quote-generator"];
const genreSelectElement = formElement.genre;
const genreOptionsElement = formElement.genre.options;
const generateButtonElement = document.querySelector(".js-generate-btn");
const autoGenerateButtonElement = document.querySelector(
  ".js-auto-generate-btn"
);
const quoteTextElement = document.querySelector(".js-quote-text");
const quoteQuotationElement = document.querySelector(".js-quote-quotation");
const quoteAuthorElement = document.querySelector(".js-quote-author");

let interval;

autoGenerateButtonElement.addEventListener("click", (event) => {
  if (genreSelectElement.value != "") {
    if (autoGenerateButtonElement.classList.contains("is-generating")) {
      clearInterval(interval);
      autoGenerateButtonElement.classList.remove("is-generating");
      genreSelectElement.disabled = false;
      generateButtonElement.disabled = false;
    } else {
      autoGenerateButtonElement.classList.add("is-generating");
      genreSelectElement.disabled = true;
      generateButtonElement.disabled = true;
      formElement.onsubmit(event);
      interval = setInterval(() => {
        formElement.onsubmit(event);
      }, 8900);
    }
  } else {
    alert("Select a genre!");
  }
});

formElement.onsubmit = function generateQuote(event) {
  event.preventDefault();

  const optionValue = this.genre.value;
  switch (optionValue) {
    case "philosophical":
      getQuoteFromId(pQuotes, generateRandomNumber());
      break;
    case "inspirational":
      getQuoteFromId(iQuotes, generateRandomNumber());
      break;
    case "wisdom":
      getQuoteFromId(wQuotes, generateRandomNumber());
      break;
    case "success":
      getQuoteFromId(sQuotes, generateRandomNumber());
      break;
    case "love":
      getQuoteFromId(loQuotes, generateRandomNumber());
      break;
    default:
      alert("Select a genre!");
      break;
  }
};

function generateRandomNumber() {
  return Math.floor(Math.random() * (30 - 1 + 1) + 1);
}

function getQuoteFromId(array, id) {
  array.forEach((quote) => {
    let matchingQuote;
    if (quote.id === id) {
      matchingQuote = quote;
      const quotation = matchingQuote.quotation;
      const author = matchingQuote.author;

      if (quoteQuotationElement.innerText === "") {
        toggleInput();
        quoteTextElement.classList.add("fade-in-text");
        renderQuote(quotation, author);
      } else {
        quoteTextElement.classList.remove("fade-in-text");
        quoteTextElement.classList.add("fade-out-text");
        toggleInput();
        setTimeout(() => {
          renderQuote(quotation, author);
        }, 3000);
      }
    }
  });
}

function renderQuote(quotation, author) {
  quoteQuotationElement.innerText = `"${quotation}"`;
  quoteAuthorElement.innerText = `~ ${author}`;
  quoteTextElement.classList.remove("fade-out-text");
  quoteTextElement.classList.add("fade-in-text");
  toggleInput();
}

function toggleInput() {
  if (!autoGenerateButtonElement.classList.contains("is-generating")) {
    if (
      genreSelectElement.disabled === true &&
      generateButtonElement.disabled === true
    ) {
      genreSelectElement.disabled = false;
      generateButtonElement.disabled = false;
    }
  }
}

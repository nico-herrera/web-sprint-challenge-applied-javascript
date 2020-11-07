// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// grab data from address
// make a second function to make the cards
// create the html layout for the data
// inside the function, path to the data and append it to the DOM
// add a click event listener

async function test() {
  try {
    const cardData = await axios(
      "https://lambda-times-api.herokuapp.com/articles"
    );
    console.log(cardData);
    for (let prop in cardData.data.articles) {
      console.log(prop);
      console.log(cardData.data.articles[prop]);
      cardData.data.articles[prop].forEach((item) => {
        document.querySelector(".cards-container").appendChild(cardMaker(item));
      });
    }
  } catch (err) {
    console.log(err);
  }
}
test();

function cardMaker(obj) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = obj.headline;

  const author = document.createElement("div");
  author.classList.add("author");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = obj.authorPhoto;

  const span = document.createElement("span");
  span.textContent = `By ${obj.authorName}`;

  document.querySelector("body").appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(img);
  author.appendChild(span);

  card.addEventListener("click", (event) => {
    console.log(headline.textContent);
  });

  return card;
}

cardMaker();

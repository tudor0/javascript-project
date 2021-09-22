let quotes2 = [
  {
    author: "Nelson Mandel",
    quote:
      "”The greatest glory in living lies not in never falling, but in rising every time we fall.”",
  },
  {
    author: "Walt Disney",
    quote: "”The way to get started is to quit talking and begin doing.”",
  },
  {
    author: "Steve Jobs",
    quote:
      "”Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.”",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "”If life were predictable it would cease to be life, and be without flavor.”",
  },
  {
    author: "Oprah Winfrey",
    quote:
      "”If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.”",
  },
  {
    author: "James Cameron",
    quote:
      "”If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.”",
  },
  {
    author: "John Lennon",
    quote: "”Life is what happens when you're busy making other plans.”",
  },
];

const button = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

button.addEventListener("click", () => {
  replacequotes(quotes2);
});

function replacequotes(quotes2) {
  let random = Math.floor(Math.random() * quotes2.length);
  quote.textContent = quotes2[random].quote;
  author.textContent = quotes2[random].author;
}

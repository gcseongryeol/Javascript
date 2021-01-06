const quoteText = document.querySelector('.quote_text');

// 명언 가져오는 함수
function getQuote() {
    randomItem(item);

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const random = randomItem(data);
            const author = random.author;
            const text = random.text;
            quoteText.innerText = `${text}`;
            quoteAuthor.innerText = `- ${author} -`
        });
}

// 랜덤하게 인자 뽑는 함수
function randomItem(item) {
    return item[Math.floor(Math.random() * item.length)];
}

function init() {
    getQuote();
}
const resultNode = document.querySelector('.result')
const numPageNode = document.querySelector('.wid')
const limNode = document.querySelector('.heig')
const btnNode = document.querySelector('.btn_r')

if(JSON.parse(localStorage.getItem("images"))) {
    showCards()
}

const useRequest = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            let imagesData = []
            data.forEach(item => {
                imagesData.push({
                    imageSrc: item.download_url,
                })
            })
            localStorage.setItem("images", JSON.stringify(imagesData))
            showCards()
        })
        .catch(() => {
            console.log('error')
        })
}

function showCards() {
    let cards = ''
    const data = JSON.parse(localStorage.getItem("images"))

    data.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img class="card__img" src="${item.imageSrc}">
            </div>
        `
        cards += cardBlock
        resultNode.innerHTML = cards
    })
}

btnNode.addEventListener('click', async () => {
    if ((numPageNode.value < 1 || numPageNode.value > 10 || isNaN(numPageNode.value)) && (limNode.value < 1 || limNode.value > 10 || isNaN(limNode.value))) {
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
    } else if (numPageNode.value < 1 || numPageNode.value > 10 || isNaN(numPageNode.value)) {
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    } else if (limNode.value < 1 || limNode.value > 10 || isNaN(limNode.value)) {
        resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10'
    } else {
        await useRequest(`https://picsum.photos/v2/list?page=${numPageNode.value}&limit=${limNode.value}`)
    }
})
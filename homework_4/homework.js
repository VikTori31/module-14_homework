const resultNode = document.querySelector('.result')
const widNode = document.querySelector('.wid')
const heigNode = document.querySelector('.heig')
const btnNode = document.querySelector('.btn_r')

const useRequest = (url) => {
    return fetch(url)
        .then((response) => {
            return response
        })
        .then((data) => {
            const cardBlock = `
                    <div class="card">
                        <img class="card__img2" src="${data.url}">
                    </div>
                    `
            resultNode.innerHTML = cardBlock
        })
        .catch(() => {
            console.log('error')
        })
}

btnNode.addEventListener('click', async () => {
    if (widNode.value < 100 || widNode.value > 300 || isNaN(widNode.value)) {
        resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
    } else if (heigNode.value < 100 || heigNode.value > 300 || isNaN(heigNode.value)) {
        resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
    } else {
        await useRequest(`https://picsum.photos/${widNode.value}/${heigNode.value}`)
    }
})
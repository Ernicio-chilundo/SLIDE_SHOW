
const images = [
    { "id": "1", "url": "./img/chrono.jpg" },
    { "id": "2", "url": "./img/inuyasha.jpg" },
    { "id": "3", "url": "./img/ippo.png" },
    { "id": "2", "url": "./img/tenchi.jpg" },
    { "id": "2", "url": "./img/tenjhotenge.jpg" },
    { "id": "2", "url": "./img/yuyuhakusho.jpg" },
]

const containerItems = document.getElementById("container_items")
const loadImages = (images, containerItems) => {
    images.forEach(image => {
        containerItems.innerHTML += `
        <div class="item">
            <img src="${image.url}">
        </div>
        `
    })
}
loadImages(images, containerItems)
let items = document.querySelectorAll(".item")

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll(".item")
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll(".item")
}

document.getElementById("previous").addEventListener("click", previous)
document.getElementById("next").addEventListener("click", next)
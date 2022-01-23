const masonry = new Macy({
    container: '.gallery',
    mobileFirst: true,
    columns: 3,
})

const textsMap = new Map();
textsMap.set("default", "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and other East Asian countries. After water, it is the most widely consumed drink in the world. There are many different types of tea; some have a cooling, slightly bitter, and astringent flavour, while others have vastly different profiles that include sweet, nutty, floral, or grassy notes. Tea has a stimulating effect in humans primarily due to its caffeine content. Tea plants are native to East Asia and probably originated in the borderlands of southwestern China and north Burma. An early credible record of tea drinking dates to the 3rd century AD, in a medical text written by Hua Tuo.It was popularised as a recreational drink during the Chinese Tang dynasty, and tea drinking spread to other East Asian countries. Portuguese priests and merchants introduced it to Europe during the 16th century. During the 17th century, drinking tea became fashionable among the English, who started to plant tea on a large scale in India.")
textsMap.set("black", "Black tea, also translated to red tea in various Asian languages, is a type of tea that is more oxidized than oolong, yellow, white and green teas. Black tea is generally stronger in flavor than other teas. All five types are made from leaves of the shrub (or small tree) Camellia sinensis. Two principal varieties of the species are used – the small-leaved Chinese variety plant (C. sinensis var. sinensis), used for most other types of teas, and the large-leaved Assamese plant (C. sinensis var. assamica), which was traditionally mainly used for black tea, although in recent years some green and white teas have been produced. First originating in China, the beverage's name there is hong cha (Chinese: 紅茶, \"red tea\") due to the color of the oxidized leaves when processed appropriately. Today, the drink is widespread throughout East and Southeast Asia, both in consumption and harvesting, including in Indonesia, Japan, Korea and Singapore. Similar variants are also available in South Asian countries.")
textsMap.set("green", "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Green tea originated in China, and since then its production and manufacture has spread to other countries in East and Southeast Asia. Several varieties of green tea exist, which differ substantially based on the variety of C. sinensis used, growing conditions, horticultural methods, production processing, and time of harvest. Although there has been considerable research on the possible health effects of consuming green tea regularly, there is little evidence that drinking green tea has any effects on health")
textsMap.set("rooibos", "Rooibos (/ˈrɔɪbɒs/ ROY-boss; Afrikaans: [rɔːibɔs]; Aspalathus linearis), meaning \"red bush\"; is a broom-like member of the plant family Fabaceae that grows in South Africa's fynbos. The leaves are used to make a herbal tea that is called by the names: rooibos (especially in Southern Africa), bush tea, red tea, or redbush tea (predominantly in Great Britain). The tea has been popular in Southern Africa for generations, and since the 2000s has gained popularity internationally. The tea has an earthy flavor, similar to yerba mate or tobacco. Rooibos was formerly classified as Psoralea but is now thought to be part of Aspalathus following Dahlgren (1980). The specific name of linearis was given by Burman (1759) for the plant's linear growing structure and needle-like leaves.")

const textSourceParagraph = document.getElementById("textSource")

textSourceParagraph.innerHTML = textsMap.get("default")

const blackDiv = document.getElementById("black")
const greenDiv = document.getElementById("green")
const rooibosDiv = document.getElementById("rooibos")

blackDiv.addEventListener("mouseover", (e) => {
    textSourceParagraph.innerHTML = textsMap.get("black")
})
blackDiv.addEventListener("mouseleave", (e) => {
    textSourceParagraph.innerHTML = textsMap.get("default")
})

greenDiv.addEventListener("mouseover", (e) => {
    textSourceParagraph.innerHTML = textsMap.get("green")
})
greenDiv.addEventListener("mouseleave", (e) => {
    textSourceParagraph.innerHTML = textsMap.get("default")
})

rooibosDiv.addEventListener("mouseover", (e) => {
    textSourceParagraph.innerHTML = textsMap.get("rooibos")
})
rooibosDiv.addEventListener("mouseleave", (e) => {
    textSourceParagraph.innerHTML = textsMap.get("default")
})

const galleryButton = document.getElementById("galleryButton")
const gallerySection = document.getElementById("galleryId")
galleryButton.addEventListener("mousedown", (e) => {
    gallerySection.scrollIntoView();
})

const productsButton = document.getElementById("productsButton")
const productsSection = document.getElementById("productsId")
productsButton.addEventListener("mousedown", (e) => {
    productsSection.scrollIntoView();
})

const homeButton = document.getElementById("homeButton")
const homeSection = document.getElementById("homeId")
homeButton.addEventListener("mousedown", (e) => {
    homeSection.scrollIntoView();
})


const contactButton = document.getElementById("contactButton")
const contactSection = document.getElementById("contactId")
contactButton.addEventListener("mousedown", (e) => {
    contactSection.scrollIntoView();
})


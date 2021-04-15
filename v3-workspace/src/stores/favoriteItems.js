import { reactive, onBeforeMount } from 'vue'

const favoriteItemStore = reactive({
  favoriteItems: ['Ramen', 'Bento', 'Sushi', 'Gyro', 'Curry'],
  userInput: 'Chocolate'
})

export default {
  beforeMount() {}
}

onBeforeMount(() => {
  api
    .fetch(URL)
    .then(response => response.json)
    .then(data => {
      favoriteItemStore.favoriteItems = data
    })
})

const addNewItemToList = () => {
  favoriteItemStore.favoriteItems.push(favoriteItemStore.userInput)
}

export default () => ({
  favoriteItemStore, addNewItemToList
})

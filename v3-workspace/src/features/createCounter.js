import { computed, reactive, toRefs } from 'vue'

// It's just JavaScript
const state = reactive({
  currentCount: 8,
  doubleCount: computed(() => {
    return state.currentCount * 2
  })
})

const incrementCount2 = () => {
  state.currentCount += 10
}

export default {
  ...toRefs(state),
  incrementCount2
}

import { ref } from 'vue'

function useCountFactory() {
  const count = ref(0)

  function incrementCount() {
    count.value++
  }

  return {
    count,
    incrementCount
  }
}

export default useCountFactory

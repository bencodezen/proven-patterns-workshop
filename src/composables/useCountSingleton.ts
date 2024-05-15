import { ref } from 'vue'

export const count = ref(0)

export function incrementCount() {
  count.value++
}

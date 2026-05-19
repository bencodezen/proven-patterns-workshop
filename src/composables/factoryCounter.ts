import { ref, computed } from 'vue'

export function useCounter() {
  const current = ref(0)
  const double = computed(() => current.value * 2)
  const increment = () => current.value++

  return {
    current,
    double,
    increment,
  }
}

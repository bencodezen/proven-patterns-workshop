import { ref, computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

// Shared Singleton State
export const ingredientList = ref([
  { id: 1, name: 'Rice' },
  { id: 2, name: 'Soy Sauce' },
  { id: 3, name: 'Wasabi' },
  { id: 4, name: 'Seaweed' },
])

export const evenIngredients = computed(() => {
  return ingredientList.value.filter((item) => item.id % 2 === 0)
})

export function addIngredient(name: MaybeRefOrGetter<string>) {
  const reactiveName = ref(name)

  const formattedName = computed(() => {
    return reactiveName.value.toUpperCase()
  })

  ingredientList.value.push({ id: Math.random(), name: formattedName.value })

  return {}
}

// Factory Pattern
export function useRamenList() {
  const ramenIngredientList = ref(['Noodles', 'Soup', 'MSG', 'Protein', Math.random()])

  function addRamenIngredient() {
    ramenIngredientList.value.push('Bok Choy')
  }

  return {
    state: ramenIngredientList,
    actions: {
      addRamenIngredient,
    },
  }
}

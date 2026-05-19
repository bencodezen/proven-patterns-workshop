import { computed, ref, toRef, toValue, type MaybeRefOrGetter } from 'vue'

export function mutateRecipe(recipe: MaybeRefOrGetter<string>) {
  const recipeRef = toRef(recipe)
  const recipeValue = toValue(recipe)

  const lowercase = computed(() => recipeRef.value.toLocaleLowerCase())

  return {
    lowercase,
    recipeValue,
  }
}

// Ref
const recipe = ref('123')
mutateRecipe(recipe)

const derivedRecipe = computed(() => recipe.value.slice(0, 1))
mutateRecipe(derivedRecipe)

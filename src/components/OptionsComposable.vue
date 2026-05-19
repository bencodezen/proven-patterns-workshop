<script>
import counter from '@/composables/counter.ts'

export default defineComponent({
  setup() {
    return {
      current: counter.current,
    }
  },
})
</script>

<template></template>

<style lang="scss" scoped></style>

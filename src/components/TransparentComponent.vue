<script>
export default {
  inheritAttrs: false
  // ...
}
</script>

<script setup></script>

<template>
  <div>
    <label :for="$attrs.for">{{ $attrs.label }}</label>
    <input type="text" v-bind="$attrs" />
  </div>
</template>

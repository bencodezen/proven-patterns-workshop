<script setup lang="ts">
import { ref } from 'vue'

const data = ref({
  postId: 1,
  id: '64456ca6-8927-46d6-9ee0-6afa99e508d2',
  name: 'Chidi Anagonye',
  email: 'mystomachhurts@thegoodplace.com',
  body: 'Principles aren’t principles when you pick and choose when you’re gonna follow them.',
})
</script>

<template>
  <pre>{{ data }}</pre>
</template>

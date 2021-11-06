<template>
  <div class="demo">这里是demo 页面</div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

type propsType = {
  title: string
  list: number[]
}
const props = withDefaults(defineProps<propsType>(), {
  title: 'demo',
  list: () => [1],
})
</script>

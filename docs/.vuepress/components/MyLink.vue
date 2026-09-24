<template>
  <a :href="href" class="internal-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['href'],
};
</script>

<style>
.internal-link {
  /* 内链样式 */
}
</style>

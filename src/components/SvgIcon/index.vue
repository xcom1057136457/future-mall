<!-- 由 Dioa 创建于 2024-07-15 星期一 -->
<script lang="ts" setup>
defineOptions({
  name: 'SvgIcon',
})

const props = withDefaults(
  defineProps<{
    iconClass: string
    className?: string
    color?: string
  }>(),
  {
    iconClass: '',
    className: '',
    color: '',
  },
)

const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})

const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>

<template>
  <svg
    relative
    h-1em
    w-1em
    fill-current
    align="-2px"
    :class="svgClass"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<style lang="scss" scoped></style>

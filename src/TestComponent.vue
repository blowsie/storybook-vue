<template>
  <div>
    Name: {{ name }}<br />
    Size:{{ size }}<br />
    Color:{{ color }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  props: {
    name: {
      type: String,
      default: 'Icon',
    },
    color: {
      type: String,
      default: 'red',
    },
    size: {
      type: Number,
      default: 24,
    },
  },
};
</script>

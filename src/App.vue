/* eslint-disable no-unused-vars */
<template>
  <div class="content">123</div>
</template>

<script>
import generateMixin from "./mixins/generate.js";
export default {
  mixins: [generateMixin],
  data() {
    return {
      cards: this.setCards({length: 8})
    };
  },
};
</script>
<template>
  <section
    v-editable="blok"
    class="home_features"
  >
    <div
      v-for="blok in blok.columns"
      :key="blok._uid"
      class="flex-auto px-6"
    >
      <component :is="blok.component" :blok="blok" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
  .home_features {
    grid-column: dood-start/dood-end;
        display: grid;
        //margin: 10rem 0;
        margin: 10rem 0 10rem 0;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-template-rows: auto auto;
        align-items: start;
  }
</style>

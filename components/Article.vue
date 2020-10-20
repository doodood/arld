<template>
  <div
    v-editable="blok"
    class="prose mx-auto"
  >
    <div class="vh-100 dt w-100 tc bg-dark-gray white cover" style="background:url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center;">
      <div class="dtc v-mid">
        <header class="white-70">
          <h2 class="f6 fw1 ttu tracked mb2 lh-title">
            Issue Six
          </h2>
          <h3 class="f6 fw1 lh-title">
            Summer MMXVI
          </h3>
        </header>
        <h1 class="f1 f-headline-l fw1 i white-60">
          {{ blok.name }}
        </h1>
        <blockquote class="ph0 mh0 measure f4 lh-copy center">
          <p class="fw1 white-70">
            {{ blok.intro }}
          </p>
          <cite class="f6 ttu tracked fs-normal">Don Dood</cite>
        </blockquote>
      </div>
    </div>
    <div class="center measure-wide f5 pv5 lh-copy ph2">
      <rich-text-renderer
        :document="blok.body"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    },
    thumbnail: {
      type: Object,
      required: true
    }
  }
}
// :style="`background:url(${thumbnail.filename})no-repeat center;filter: brightness(10%);`"
</script>
<style lang="scss">
  p > img {
    margin: 2rem auto;
  }
</style>

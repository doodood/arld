<template>
  <section class="app-section">
    <h2 class="py-10 text-center font-bold text-4xl">
      Articles Overview
    </h2>
    <section class="flex py-6 mb-6">
      <div class="doody">
        <div
          v-for="article in stories"
          :key="article._uid"
          class="flex-auto px-6"
        >
          <article-prev
            v-if="article.content"
            :article-link="article.full_slug"
            :article-content="article.content"
          />
          <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
            This content loads on save. <strong>Save the entry & reload.</strong>
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      sort_by: 'position:asc',
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },
  data () {
    return {
      stories: []
    }
  },
  mounted () {
    console.log('stories ', this.stories)
  }
}
</script>
<style lang="scss" scoped>
.flex-container {
  display: grid;
  grid-template-columns: [full-start] minmax(6rem, 1fr) [dood-start] repeat( 8, [col-start] minmax(min-content, 14rem) [col-end]) [dood-end] minmax(6rem, 1fr) [full-end];
  margin: 0 auto;
  //grid-template-rows: 85vh repeat(3, min-content);

  & > div {
    grid-column: 1/-1;
  }
}
.doody {
 display: grid;
  //grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
}
</style>

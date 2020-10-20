<template>
  <div v-editable="blok">
    <h2 class="pl-6 text-lg text-gray-700 italic">
      {{ blok.title }}
    </h2>
    <div class="flex-container">
      <section class="flex">
        <article-teaser
          v-for="article in sortedArticles"
          :key="article._uid"

          :article-link="article.full_slug"
          :article-content="article.content"
        />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortedArticles () {
      // Load reference data/content from store
      const featuredArticles = this.$store.state.articles.articles.filter((article) => {
        return this.blok.articles.includes(article.uuid)
      })
      // Enable the ordering of the article previews
      featuredArticles.sort((a, b) => {
        return this.blok.articles.indexOf(a.uuid) - this.blok.articles.indexOf(b.uuid)
      })
      return featuredArticles
    }
  }
}
</script>
<style lang="scss" scoped>
.flex-container {
  display: grid;
  grid-template-columns: [full-start] minmax(6rem, 1fr) [dood-start] repeat( 8, [col-start] minmax(min-content, 14rem) [col-end]) [dood-end] minmax(6rem, 1fr) [full-end];
  margin: 0 auto;
  grid-template-rows: 85vh repeat(3, min-content);
}

.flex{
  grid-column: full-start / full-end;
  height: 85vh;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

}
</style>

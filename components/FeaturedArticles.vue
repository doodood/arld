<template>
  <div v-editable="blok">
    <h2 class="pt-2 pl-6 text-lg text-gray-700 italic">
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
/* section {
  //background-color: orangered;
  grid-column: full-start / full-end;
  display: flex;
  height: 85vh;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
} */
.flex{
  grid-column: full-start / full-end;
  //display: flex;
  height: 85vh;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

}
/* .flex-dood{
    //grid-column: full-start / full-end;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.slide {
    position: relative;
    object-fit: cover;
    width: 100%;
    &>img {
        transform: scale(1);
        object-fit: fill;
        height: 100%;
        width: fit-content;
    }
    &:hover &__overlay {
        opacity: 1;
    }
    &:hover>img {
        filter: brightness(50%);
        transform: scale(1);
    }
    &__overlay {
        opacity: 0;
        transition: all .7s;
        background-color: purple;
        line-height: normal;
        color: white;
        margin: 0 auto;
        white-space: pre-wrap;
        position: absolute;
        width: 100%;
        height: 18rem;
        bottom: 0;
        &__title {
            font-size: 2rem;
            text-align: center;
            margin: 3vh;
        }
        &__text {
            font-size: 1.8rem;
            white-space: pre-line;
            text-align: center;
            line-height: 1.9rem;
            margin: 2rem;
        }
    }
} */
</style>

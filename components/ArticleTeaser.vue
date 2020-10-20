<template>
  <!--   <nuxt-link
    :to="articleLink"
    class="article-teaser block py-4 px-6 border rounded border-gray-500"
  > -->
  <!-- <figure class="slide">
      <h2 class="pt-2 pb-4 text-2xl font-bold">
        {{ articleContent.name }}
      </h2>
      <p class="pb-6 leading-relaxed">
        {{ articleContent.intro }}
      </p>
    </figure> -->
  <!--   </nuxt-link> -->
  <!-- <figure class="flex-none slide"> -->
  <nuxt-link
    :to="articleLink"
    class="flex-none slide">
    <img v-lazy="articleContent.thumbnail.filename" alt="another">

    <div class="slide__overlay">
      <h4 class="slide__overlay__title">
        {{ articleContent.name }}
      </h4>
      <div class="slide__overlay__text">
        {{ articleContent.intro }}
      </div>
    </div>
  </nuxt-link>
  <!-- </figure> -->
</template>

<script>
export default {
  props: {
    articleContent: {
      type: Object,
      required: true
    },
    articleLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.article-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
}

.slide {
    display: inline-block;
    object-fit: cover;
     width: 70%;
     position: relative;
  //background-color: purple;
  border:1px solid white;
  //width: 300px;
  & > img {
        transform: scale(1);
        object-fit: fill;
        height: 100%;
        width: -moz-fit-content;
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
        height: 9rem;
        top: 0rem;
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
}
</style>

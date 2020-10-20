<template>
  <footer class="app-footer">
    <div class="footer text-center">
      <nuxt-link
        class="text-black-500 hover:text-blue-300 footer__link"
        to="/en/sitemap"
      >
        Sitemap
      </nuxt-link>
      <nuxt-link
        class="text-black-500 hover:text-blue-300 footer__link"
        to="/en/sitemap"
      >
        Home
      </nuxt-link>
      <nuxt-link
        class="text-black-500 hover:text-blue-300 footer__link"
        to="/en/sitemap"
      >
        About
      </nuxt-link>
      <nuxt-link
        class="text-black-500 hover:text-blue-300 footer__link"
        to="/en/sitemap"
      >
        Contact
      </nuxt-link>
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  /* py-10 bg-teal-100 */
    padding: 2rem;
    grid-column: 1/-1;

    &__link:link,
    &__link:visited {
        font-size: 1.4rem;
        //color: black;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        padding: 2rem 5rem 2rem 5rem;
        display: inline-block;
        transition: all .3s;
        &:hover {
            background-color: rgba(black, .05);
            //color: #000;
            color: white;
            transform: translateY(-5px);
        }
    }
}
</style>

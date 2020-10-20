<template>
  <header class="app-header">
    <nav>
      <ul>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/articles">
            Blog
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss">
  a:visited,a:link {
    color: black;
  }
</style>

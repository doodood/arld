<template>
  <div class="app-container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  //color: #fff;
  background-color: #35495e;
}
.app-container {
    display: grid;
    grid-template-columns: [full-start] minmax(1fr, 1fr) [dood-start] repeat( 8, [col-start] minmax(min-content, 14rem) [col-end]) [dood-end] minmax(6rem, 1fr) [full-end];
    margin: 0 auto;
    /* grid-template-rows: 95vh repeat(3, min-content); */
    grid-template-rows: 10vh repeat(3, min-content);
    //grid-gap: 10px;
    grid-auto-rows: min-content minmax(100px, auto);

    /* .app-header {
      grid-column: 1/-1;
      background-color: transparent;
      color: black;
    } */
    .app-section {
       grid-column: 1/-1;
    }
    .app-footer {
       grid-column: 1/-1;
       /* background-color: $color-primary-dark-4; */
       //grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
}
</style>

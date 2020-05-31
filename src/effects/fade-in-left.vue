<template>
<figure>
  <img src="https://jdc.jd.com/img/200x200">
  <figcaption>
    Hello World !
  </figcaption>
</figure>
</template>

<style scoped>
figure {
  position: relative;
  display: inline-block;
  margin: 0;
  max-width: 100%;
  background-color: #2266a5;
  color: #fff;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

figure > img {
  vertical-align: top;
  max-width: 100%;
}

figure figcaption {
  background-color: #135796;
  padding: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

figure,
figure:before,
figure:after,
figure *,
figure *:before,
figure *:after {
  box-sizing: border-box;
  transition: all 0.35s ease;
}

/** fade **/
figure figcaption {
  opacity: 0;
}

figure:hover figcaption {
  opacity: 1;
}

figure:hover > img, figure:hover figcaption{
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}

/** fade-in-left **/
figure figcaption {
  -webkit-transform: translate(-15%, 0);
  transform: translate(-15%, 0);
}
</style>
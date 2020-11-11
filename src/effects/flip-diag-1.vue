<template>
  <figure>
    <img src="https://raw.githubusercontent.com/Turkyden/imagehover-effects/master/placeholder.png" />
    <figcaption>
      Hello World ! 🐶
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

/** flip **/
figure {
  -webkit-perspective: 50em;
  perspective: 50em;
}

figure img {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

figure figcaption {
  opacity: 0;
}

figure:hover img {
  opacity: 0;
}

figure:hover figcaption {
  opacity: 1;
  transition-delay: 0.14s;
}

/** flip-diag-1 **/
figure figcaption {
  -webkit-transform: rotate3d(1, -1, 0, 100deg);
  transform: rotate3d(1, -1, 0, 100deg);
}

figure:hover > img {
  -webkit-transform: rotate3d(-1, 1, 0, 100deg);
  transform: rotate3d(-1, 1, 0, 100deg);
}

figure:hover figcaption {
  -webkit-transform: rotate3d(0, 0, 0, 0deg);
  transform: rotate3d(0, 0, 0, 0deg);
}
</style>

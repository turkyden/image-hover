<template>
  <figure>
    <img src="https://cdn.jsdelivr.net/gh/turkyden/image-hover/image.png" />
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

/** hinge **/
figure {
  -webkit-perspective: 50em;
  perspective: 50em;
}

figure figcaption {
  opacity: 0;
  z-index: 1; 
}

figure:hover img {
  opacity: 0;
}

figure:hover figcaption {
  opacity: 1;
  transition-delay: 0.21s;
}

/** hinge-right **/
figure img {
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
}

figure figcaption {
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
}

figure:hover > img {
  -webkit-transform: rotateY(-90deg);
  transform: rotateY(-90deg);
}

figure:hover figcaption {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
}
</style>

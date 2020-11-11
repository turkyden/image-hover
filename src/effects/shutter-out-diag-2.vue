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

/** shutter-out- **/
figure:before {
  background: #135796;
  position: absolute;
  content: '';
  transition-delay: 0.105s;
}

figure figcaption {
  opacity: 0;
  transition-delay: 0s;
}

figure:hover:before {
  transition-delay: 0s;
}

figure:hover figcaption {
  opacity: 1;
  transition-delay: 0.105s;
}

/** shutter-out-diag-2 **/
figure:before {
  top: 50%;
  bottom: 50%;
  left: -35%;
  right: -35%;
  transform: rotate(-45deg);
}

figure:hover:before {
  top: -35%;
  bottom: -35%;
}
</style>

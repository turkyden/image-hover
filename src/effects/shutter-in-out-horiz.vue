<template>
  <figure>
    <img src="https://s1.ax1x.com/2020/06/07/tgh11I.png" />
    <figcaption>
      Hi BaoShan ! 🐶
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

/** shutter-in- **/
figure:before, figure:after {
  background: #135796;
  position: absolute;
  content: '';
}

figure:after {
  top: 0;
  left: 0;
}

figure:before{
  right: 0;
  bottom: 0;
}

figure figcaption {
  opacity: 0;
  z-index: 1;
}

figure:hover figcaption{
  opacity: 1;
  transition-delay: 0.21s;
}

/** shutter-in-out-horiz **/
figure:after, figure:before {
  width: 0;
  height: 100%;
  opacity: 0.75;
}

figure:hover:after, figure:hover:before {
  width: 100%;
}
</style>

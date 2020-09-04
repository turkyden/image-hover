<template>
  <div id="app" class="bg-gray-800 w-screen h-screen overflow-x-hidden overflow-y-scroll">
    <div class="container m-auto py-20">
      <h1 class="text-white text-4xl font-bold">ImageHover Effects 🐶</h1>
      <h2 class="text-white text-xl">
        Inspired by <a class="text-green-500 hover:underline" href="https://github.com/ciar4n/imagehover.css" target="_blank">imagehover.css</a>
      </h2>
    </div>
    <div class="container m-auto">
      <div class="m-auto flex flex-wrap">
        <div 
          class="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 pb-4"
          v-for="effect in Object.values(effects)"
          :key="effect.name" 
        > 
          <div class="cursor-pointer" v-on:click="onClickEffect(effect.name)">
            <component :is="effect.name"/>
            <div class="flex justify-center items-center">
              <p class="text-white">{{ effect.name }}</p>
              <form class="code-box-code-action" action="https://codepen.io/pen/define" method="POST" target="_blank">
                <input type="hidden" name="data" value="">
                <span role="img" class="anticon code-box-codepen ant-tooltip-open">
                  <svg viewBox="0 0 15 15" fill="currentColor">
                    <path d="M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"></path>
                  </svg>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p class="text-gray-500 text-center py-20">
        @MIT & Designed by <a class="text-green-500 hover:underline" href="https://github.com/Turkyden" target="_blank">Turkyden</a>
      </p>
    </footer>
    <!-- modal -->
    <transition name="fade">
      <div 
        v-if="visible" 
        class="fixed w-full h-full top-0 bottom-0 flex flex-col items-center py-10 overflow-x-hidden overflow-y-scroll filter-node" 
        v-bind:style="{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(3px)' }" 
        v-on:click.self="onCloseModel"
      >
        <div class="p-4 bg-gray-800 text-white rounded shadow" style="width: 600px">
          <div class="flex justify-between pb-2">
            <h2 class="text-xl">HTML</h2>
            <span 
              class="cursor-pointer flex justify-center items-center"
              v-clipboard:copy="html"
              v-clipboard:success="onCopyHTML"
              v-clipboard:error="onError" 
              v-tooltip="{ content: 'Copyed !', trigger: 'click', autoHide: true }"
              >
              <svg t="1589361244371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7995" width="16" height="16"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z" p-id="7996" fill="#ffffff"></path><path d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" p-id="7997" fill="#ffffff"></path></svg>
              Copy
            </span>
          </div>
          <div class="bg-gray-800">
            <pre v-highlightjs><code class="html">{{html}}</code></pre>
          </div>
          <div class="flex justify-between py-2">
            <h2 class="text-xl">CSS</h2>
            <span 
              class="cursor-pointer flex justify-center items-center"
              v-clipboard:copy="css"
              v-clipboard:success="onCopyCSS"
              v-clipboard:error="onError" 
              v-tooltip="{ content: 'Copyed !', trigger: 'click', hideOnTargetClick: true }"
            >
              <svg t="1589361244371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7995" width="16" height="16"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z" p-id="7996" fill="#ffffff"></path><path d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" p-id="7997" fill="#ffffff"></path></svg>
              Copy
            </span>
          </div>
          <div class="overflow-y-scroll bg-gray-800">
            <pre v-highlightjs><code class="css">{{css}}</code></pre>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { components, effects } from "@/assets/effects.js";

export default {
  name: 'Effects',
  components: { ...components },
  data() {
    return { 
      effects: effects, 
      visible: false,
      current: 'fade'
    };
  },
  computed: {
    html: function () {
      return this.effects[this.current].html
    },
    css: function () {
      return this.effects[this.current].css
    }
  },
  methods: {
    onClickEffect: function(name) {
      this.visible = true;
      this.current = name;
    }, 
    onCloseModel: function() {
      this.visible = false;
    }, 
    onCopyHTML: function() {
      //alert('You just copied: ' + e.text)
    },
    onCopyCSS: function() {
      //alert('You just copied: ' + e.text)
    },
    onError: function () {
      // alert('Failed to copy texts' + e.text)
    }
  }
}
</script>

<style>
/* 美化滚动条样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: transparent;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: transparent;
  background-color: transparent;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: none;
  background-color: #ccc;
}
/** Madal Animated */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/** Tooltip Styles */
.tooltip {
  display: block !important;
  z-index: 10000;
}
.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: .25rem;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: .25rem;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
</style>
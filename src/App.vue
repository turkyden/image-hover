<template>
  <div id="app" class="bg-gray-800 w-screen h-screen overflow-x-hidden overflow-y-scroll">
    <div class="container m-auto py-10 text-center">
      <h1 class="text-white text-4xl font-bold">ImageHover Effects 🐶</h1>
      <div class="flex justify-center items-center py-8">
        <!-- Inspired by <a class="text-green-500 hover:underline" href="https://github.com/ciar4n/imagehover.css" target="_blank">imagehover.css</a> -->
        <p class="text-gray-300"><del class="text-green-500">No Javascript</del>, a lightweight CSS collection of image hover effects you've always wanted.</p>
        <a class="pl-2 cursor-pointer" href="https://github.com/Turkyden/image-hover" target="_balnk">
          <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Turkyden/image-hover?style=social">
        </a>
      </div>
      <ul class="flex justify-center">
        <li 
          :class="['hover:bg-green-600 text-white py-2 px-4 cursor-pointer mx-2 rounded-full', category.id === activeCategory ? 'bg-green-600' : 'bg-gray-200 bg-opacity-25']" 
          v-for="category in categorys" 
          :key="category.id"
          v-on:click="onClickCategory(category.id)"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
    <div class="container m-auto">
      <transition-group name="cell" tag="div"  class="m-auto flex flex-wrap">
        <div 
          class="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 pb-4 flex justify-center"
          v-for="effect in Object.values(effects)"
          :key="effect.name"
          v-on:mouseover="onMouseover(effect.name)"
        > 
          <div>
            <div class="cursor-pointer" v-on:click="onClickCode()">
              <component :is="effect.name"/>
            </div>
            <div class="flex justify-between items-center mb-4">
              <p :class="['text-sm', effect.name.includes(activeCategory) ? 'text-gray-300 border-0 border-b-2 border-green-500 ' : 'text-gray-600']">{{ effect.name }}</p>

              <div class="w-10 flex justify-between">
                <span role="img" class="text-gray-500 hover:text-white cursor-pointer" v-on:click="onClickCode()">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>

                <form class="code-box-code-action" action="https://codepen.io/pen/define" method="POST" target="_blank" v-on:click="onClickCodePen($event)">
                  <input type="hidden" name="data" v-bind:value="codepen">
                  <span role="img" class="text-gray-500 hover:text-white cursor-pointer">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                      <line x1="12" y1="22" x2="12" y2="15.5"></line>
                      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                      <line x1="12" y1="2" x2="12" y2="8.5"></line>
                    </svg>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <footer class="w-full py-20">
      <div class="flex justify-center">
        <div class="flex justify-around items-center w-64">
          <div class="flex flex-col justify-around items-center">
            <img class="w-12 h-12 shadow-lg rounded-full border-gray-500 border cursor-pointer" alt="Turkyden" :src="imageTurkyden" v-on:click="onClickAvatar('https://github.com/turkyden')" />
            <p class="text-gray-500 text-xs pt-2">Me</p>
          </div>
          <span class="px">💗</span>
          <div class="flex flex-col justify-around items-center">
            <img class="w-16 h-16 shadow-lg rounded-full border-gray-500 border cursor-pointer" alt="TanLiuLiu" :src="imageTanLiuLiu" v-on:click="onClickAvatar('https://github.com/tanwen92')" />
            <p class="text-gray-500 text-xs pt-2">My Girl</p>
          </div> 
          <span class="px">💗</span>
          <div class="flex flex-col justify-around items-center">
            <img class="w-12 h-12 shadow-lg rounded-full border-gray-500 border cursor-pointer" alt="Baoshan" :src="imageBaoShan" v-on:click="onClickAvatar('https://github.com/baoshan')" />
            <p class="text-gray-500 text-xs pt-2">My Dog</p>
          </div> 
        </div>
      </div>
      <p class="text-gray-500 text-center py-10">
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
        <div class="p-4 bg-gray-800 text-white rounded shadow" style="width: 800px">
          <div class="flex justify-between pb-2">
            <h2 class="text-xl">HTML</h2>
            <span 
              class="cursor-pointer text-gray-500 hover:text-gray-300" 
              title="copy"
              v-clipboard:copy="html"
              v-clipboard:success="onCopyHTML"
              v-clipboard:error="onError" 
              v-tooltip="{ content: 'Copyed !', trigger: 'manual', show: shadowCopyedHTML }"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
            </span> 
          </div>
          <div class="bg-gray-800">
            <pre v-highlightjs><code class="html">{{html}}</code></pre>
          </div>
          <div class="flex justify-between py-2">
            <h2 class="text-xl">CSS</h2>
            <span 
              class="cursor-pointer text-gray-500 hover:text-gray-300"
              title="copy"
              v-clipboard:copy="css"
              v-clipboard:success="onCopyCSS"
              v-clipboard:error="onError" 
              v-tooltip="{ content: 'Copyed !', trigger: 'manual', show: shadowCopyedCSS }"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
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
import _ from "lodash";
import { components, effects } from "@/assets/effects.js";
import imageBaoShan from "@/assets/baoshan.jpg";
import imageTanLiuLiu from "@/assets/tanliuliu.jpg";
import imageTurkyden from "@/assets/turkyden.jpg";

export default {
  name: 'Effects',
  components: { ...components },
  data() {
    return { 
      effects: Object.values(effects),
      visible: false,
      current: 'fade',
      shadowCopyedHTML: false,
      shadowCopyedCSS: false,
      imageBaoShan: imageBaoShan,
      imageTanLiuLiu: imageTanLiuLiu,
      imageTurkyden: imageTurkyden,
      activeCategory: 'all',
      categorys: [
        { id: 'all', name: 'All' }, 
        { id: 'fade', name: 'Fade' }, 
        { id: 'flip', name: 'Flip' }, 
        { id: 'hinge', name: 'Hinge' }, 
        { id: 'push', name: 'Push' }, 
        { id: 'reveal', name: 'Reveal' }, 
        { id: 'shutter', name: 'Shutter' }, 
        { id: 'slide', name: 'Slide' }, 
      ]
    };
  },
  computed: {
    html: function () {
      return effects[this.current].html
    },
    css: function () {
      return effects[this.current].css
    }, 
    codepen: function () {
      return JSON.stringify({
        editors: "110",
        layout: "top",
        description: "A colletion of Imagehover Effects with html and css.",
        title: 'ImageHover Effects / ' + effects[this.current].name, 
        html: effects[this.current].html, 
        css: effects[this.current].css
      })
    }
  },
  mounted: function() {
    this.effects = _.shuffle(this.effects);
  },
  methods: {
    onClickCategory: function(id) {
      this.activeCategory = id;
      this.effects = _.shuffle(this.effects).sort((a, b) => b.name.includes(id) ? 1 : -1)
    },
    onClickAvatar: function(url) {
      window.open(url);
    },
    onMouseover: function (name) {
      this.current = name;
    },
    onClickCode: function() {
      this.visible = true;
    }, 
    onClickCodePen: function(event) {
      event.currentTarget.submit();
    }, 
    onCloseModel: function() {
      this.visible = false;
    }, 
    onCopyHTML: function() {
      //alert('You just copied: ' + e.text)
      this.shadowCopyedHTML = true;
      setTimeout(() => this.shadowCopyedHTML = false, 1000)
    },
    onCopyCSS: function() {
      //alert('You just copied: ' + e.text)
      this.shadowCopyedCSS = true;
      setTimeout(() => this.shadowCopyedCSS = false, 1000);
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

.cell-move {
  transition: transform 1s;
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

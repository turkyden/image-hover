<template>
  <div id="app" class="w-screen h-screen bg-gray-800">
    <div class="container m-auto py-20">
      <h1 class="text-white text-4xl font-bold text-center">ImageHover Effects</h1>
    </div>
    <div class="container m-auto">
      <div class="m-auto flex">
        <div 
          class="w-1/4 text-center"
          v-for="effect in Object.values(effects)"
          :key="effect.name" 
        > 
          <div class="cursor-pointer" v-on:click="onClickEffect(effect.name)">
            <component :is="effect.name"/>
            <p class="text-white text-center">{{ effect.name }}</p>
          </div>
        </div>
        
      </div>
    </div>
    <div 
      v-if="visible" 
      class="fixed w-screen h-screen top-0 bottom-0 flex flex-col justify-center items-center" 
      v-bind:style="{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }" 
      v-on:click.self="onCloseModel"
    >
      <div class="p-4 bg-gray-800 text-white rounded shadow" style="width: 600px">
        <div class="flex justify-between pb-2">
          <h2 class="text-xl">HTML</h2>
          <span 
            class="cursor-pointer flex justify-center items-center"
            v-clipboard:copy="html"
            v-clipboard:success="onCopyHTML"
            v-clipboard:error="onError">
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
            v-clipboard:error="onError">
            <svg t="1589361244371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7995" width="16" height="16"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z" p-id="7996" fill="#ffffff"></path><path d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" p-id="7997" fill="#ffffff"></path></svg>
            Copy
          </span>
        </div>
        <div class="overflow-y-scroll bg-gray-800" style="height: 500px">
          <pre v-highlightjs><code class="css">{{css}}</code></pre>
        </div>
      </div>
      <!-- Vue Notifications -->
      <notifications group="code" position="top center" />
    </div>
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
      visible: true,
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
      this.$notify({
        group: 'code',
        type: 'alert',
        title: 'Coped HTML !'
      });
    },
    onCopyCSS: function() {
      //alert('You just copied: ' + e.text)
      this.$notify({
        group: 'code',
        type: 'success',
        title: 'Coped CSS !'
      });
    },
    onError: function () {
      // alert('Failed to copy texts' + e.text)
    }
  }
}
</script>
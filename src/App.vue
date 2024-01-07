<script>
import HeaderApp from "./components/_partials/HeaderApp.vue";
import FooterApp from "./components/_partials/FooterApp.vue";
import { gsap } from "gsap";

export default {
  components: {
    HeaderApp,
    FooterApp,
  },
  mounted() {
    document.body.addEventListener(
      "mousemove",
      this.updateCursorPosition.bind(this)
    );
    document.body.addEventListener(
      "mousedown",
      this.handleMouseDown.bind(this)
    );
    document.body.addEventListener("mouseup", this.handleMouseUp.bind(this));
  },
  methods: {
    updateCursorPosition(e) {
      const cursorOuter = this.$refs.cursorOuter;

      gsap.to(this.$refs.cursorOuter, {
        duration: 0.2,
        x: e.clientX - this.$refs.cursorOuter.offsetWidth / 2,
        y: e.clientY - this.$refs.cursorOuter.offsetHeight / 2,
      });

      gsap.set(this.$refs.cursorInner, {
        x: e.clientX,
        y: e.clientY,
      });
    },
    handleMouseDown() {
      gsap.to(this.$refs.cursorInner, 0.15, {
        scale: 2,
      });
    },
    handleMouseUp() {
      gsap.to(this.$refs.cursorInner, 0.15, {
        scale: 1,
      });
    },
  },
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderApp />
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <FooterApp />
    <div ref="cursorOuter" class="hidden sm:block cursor cursor--large"></div>
    <div ref="cursorInner" class="hidden sm:block cursor cursor--small"></div>
  </div>
</template>

<style lang="css">
.cursor {
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 100;
}

.cursor--large {
  --size: 40px;
  border: 1px solid #d72323;
}

.cursor--small {
  --size: 10px;
  background: #d72323;
  transform: translate(-50%, -50%);
}
</style>

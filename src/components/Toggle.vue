<template>
<div class="w-full">
    <button class="bg-gray-200 shadow-lg-100/50 p-2 rounded-md mb-1"
   @click.stop.prevent="show = !show">Toggle</button>
  <Transition :duration="{enter:500, leave:800}" name="nested">
    <div class="max-w-lg outer mx-auto" v-if="show">
      <div class="inner">Hello</div>
    </div>
  </Transition>
</div>
</template>

<script>
export default {
  name: "Toggle",
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped>
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
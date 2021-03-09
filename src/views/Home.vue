<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from "vue-class-component";
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private Super = setup(() => {
    const text = ref("A");
    return {
      text
    };
  });
  created() {
    console.log(this.Super.text);
  }
}
</script>

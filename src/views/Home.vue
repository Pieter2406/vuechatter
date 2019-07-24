<template>
    <div>
        <HelloWorld class="position-fixed bot" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.bot {
    right: 2rem;
    bottom: 2rem;
}
</style>


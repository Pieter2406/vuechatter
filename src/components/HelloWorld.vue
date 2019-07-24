<template>
    <div class="bot__frame d-flex flex-column">
        <div class="bot__header mb-auto d-flex">
            <div class="col-2 d-flex justify-content-center p-1">
                <img
                    class="h-100 w-auto"
                    src="../assets/GS1_Corporate_logo.png"
                />
            </div>
            <div class="col-8">GS1Bot</div>
            <div class="col-2 d-flex m-auto justify-content-center"></div>
        </div>
        <div class="bot__footer mt-auto"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>

<style lang="scss">
.bot__frame {
    border: $thickness solid $background-color-dark;
    background-color: $background-color;
    border-radius: $radius;
    height: $height;
    width: $width;
    box-shadow: $box-shadow;
}

.bot__header {
    height: $height * 0.1;
    background-color: $main-color;
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
    width: 100%;
    border-bottom: $divider-thickness solid $background-color-dark;
}

.bot__footer {
    height: $height * 0.1;
    width: 100%;
    border-top: $divider-thickness solid $background-color-dark;
}
</style>

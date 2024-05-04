<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        /** @description Y轴是否需要overflow */
        isYOverflow?: boolean;
    }>(),
    {
        isYOverflow() {
            return false;
        },
    }
);

/** @description Y轴overflow值 */
const overflowYValue = computed(() => (props.isYOverflow ? 'auto' : 'hidden'));
</script>

<template>
    <div class="h5-container">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.h5-container {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: v-bind('overflowYValue');
    background-image: url('../../assets/imgs/global-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>

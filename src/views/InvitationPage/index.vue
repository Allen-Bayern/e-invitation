<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const yourName = ref('');

function howToYuxian() {
    router.push({
        name: 'HowToCome',
    });
}

onMounted(() => {
    const { name } = route.query;

    if (typeof name === 'string') {
        yourName.value = decodeURIComponent(name);
    }
});
</script>

<template>
    <div class="inv-page">
        <h1 class="inv-page-little">— Wedding Invitation —</h1>
        <h2 class="inv-page-title">结婚请柬</h2>
        <div class="inv-page-main">
            <p :class="['inv-page-main-p', 'inv-page-main-couple']">赵正阳 & 陈姿颖</p>
            <p :class="['inv-page-main-p', 'inv-page-main-date']">2024.7.26</p>
            <p
                :class="['inv-page-main-p', 'inv-page-main-position']"
                @click="howToYuxian"
            >
                河北蔚县锦豪饭店
            </p>
            <p :class="['inv-page-main-p', 'inv-page-main-welcome']">诚邀{{ yourName }}阁下光临</p>
        </div>
        <p class="inv-page-last">You are cordially invited to visit us.</p>
    </div>
</template>

<style lang="scss" scoped>
.inv-page {
    height: 100vh;
    overflow: hidden;
    background-image: url('./imgs/bg-with-round.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    display: flex;
    flex-flow: column;
    align-items: center;

    color: #745100;

    &-little {
        font-size: 24rpx;
        font-weight: 400;
        margin-top: 88rpx;
    }

    &-title {
        font-size: 48rpx;
        font-weight: 500;
        margin-top: 24rpx;
    }

    &-main {
        margin-top: 25vh;
        font-size: 36rpx;
        display: flex;
        flex-flow: column;
        align-items: center;

        &-p {
            margin-bottom: 0.5em;
            line-height: 1em;
            font-size: 36rpx;
        }

        &-date {
            font-size: 48rpx;
            font-weight: 500;
        }

        &-position {
            margin-bottom: 1em;
            padding-bottom: 0.2em;
            border-bottom: 1px dotted #745100;
        }

        &-welcome {
            font-size: 40rpx;
        }
    }

    &-last {
        font-size: 24rpx;
        font-weight: 400;
        margin-top: 300rpx;
        color: #f77b44;
    }
}
</style>

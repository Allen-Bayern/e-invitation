<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

/** @description 被邀请人姓名 */
const yourName = ref('');

/** @description 发邀请事件 */
function goInvitation() {
    if (!yourName.value) {
        return;
    }

    router.push({
        name: 'InvitationPage',
        query: {
            name: yourName.value,
        },
    });
}
</script>

<template>
    <div class="home">
        <h1 class="home-title">诚邀您来参加我们的婚礼！</h1>
        <div class="home-input">
            <p class="home-input-label">请输入您的姓名:</p>
            <el-input
                class="home-input-self"
                v-model="yourName"
            />
        </div>
        <button
            class="go-invite"
            @click="goInvitation"
        >
            请查收您的电子请帖
        </button>
    </div>
</template>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-flow: column;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24rpx;

    &-input {
        display: flex;
        align-items: center;
        font-size: 32rpx;

        &-label {
            margin-right: 1em;
        }

        &-self {
            width: 360rpx;
        }
    }
}
</style>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
import { H5Container } from '@/components';

// 六里桥长途汽车站href链接
const hrefLink = ref('');
onMounted(() => {
    const todayFormat = dayjs().format('YYYY-MM-DD');
    hrefLink.value = `https://bus.ctrip.com/list?param=%7B%22fromCity%22%3A%22%E5%8C%97%E4%BA%AC%22%2C%22toCity%22%3A%22%E8%94%9A%E5%8E%BF%22%2C%22fromDate%22%3A%22${todayFormat}%22%7D`;
});
</script>

<template>
    <h5-container>
        <div class="how-to">
            <h1 :class="['how-to-part', 'how-to-title']">欢迎来参加我们的婚礼!</h1>
            <div :class="['how-to-part', 'how-to-yuxian']">
                <h2 :class="['how-to-part-title', 'how-to-yuxian-title']">
                    怎么来<ruby>蔚<rt>yù</rt></ruby
                    >县?
                </h2>
                <div class="how-to-part-cnt">
                    <p class="how-to-part-cnt-p">
                        <span class="how-to-part-cnt-p-span">可以从</span>
                        <a
                            :class="['how-to-part-cnt-p-span', 'how-to-yuxian-llq']"
                            :href="hrefLink"
                            target="_blank"
                            >六里桥长途汽车站</a
                        >
                        <span class="how-to-part-cnt-p-span">乘坐长途公共汽车前来。记得一定要购买</span>
                        <b :class="['how-to-part-cnt-p-span', 'how-to-yuxian-ticket']">北京到蔚县</b>
                        <span class="how-to-part-cnt-p-span"
                            >的车票。单程90～100元不等，淡季有可能90以下，旺季100元左右。每天从早7点30开始到下午4点30结束，每一个半小时有一班车。</span
                        >
                    </p>
                    <!-- 车票 -->
                    <div class="how-to-yuxian-ticket-img"></div>
                </div>
            </div>
        </div>
    </h5-container>
</template>

<style lang="scss" scoped>
.how-to {
    padding: 24rpx;
    color: #745100;
    height: 100%;
    overflow-y: auto;

    &-title {
        font-size: 48rpx;
        font-weight: 500;
    }

    &-part {
        margin-bottom: 24rpx;
        display: flex;
        flex-direction: column;

        &-title {
            font-size: 36rpx;
            font-weight: 500;
            margin-bottom: 24rpx;
        }

        &-cnt {
            &-p {
                line-height: 1.5em;
            }
        }
    }

    &-yuxian {
        &-ticket-img {
            width: 100%;
            height: 360rpx;
            background-image: url('./imgs/ticket.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }

        &-llq {
            color: #745100;
        }
    }
}
</style>

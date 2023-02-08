<template>
    <div class="wrap">
        <button type="button" ref="btnGotoBaidu">百度</button>
    </div>
</template>

<script>
export default {
    name: 'AutoFocusView',
    mounted() {
        this.$refs.btnGotoBaidu.focus();
    }
}
</script>

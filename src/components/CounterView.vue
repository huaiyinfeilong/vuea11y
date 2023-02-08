<template>
    <div class="wrap">
        <button type="button" @click="decrement">减少</button>
        <div aria-live="assertive" aria-atomic="true" style="width: 200px; height: 200px; margin: 50px; font-size: 32px; font-color: yellow; background-color: blue">{{count}}</div>
        <button type="button" @click="increment">增加</button>
    </div>
</template>

<script>
export default {
    name: 'CounterView',
    data() {
        return {
            count: 0
        }
    },
    methods: {
increment() {
    ++this.count;
},

decrement() {
    --this.count;
}
    }
}
</script>

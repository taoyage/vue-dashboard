<template>
    <ul class="list">
        <template v-for="item in items">
            <li class="item">
                <a href="" :class="`${item.icon}`">{{item.text}}</a>
                <ul class="list" v-if="item.children">
                    <template v-for="sub in item.children">
                        <li class="item">
                            <router-link to="sub" :title="sub.text">{{sub.text}}</router-link>
                        </li>
                    </template>
                </ul>
            </li>
        </template>
    </ul>
</template>
<script>
    export default {
        name: 'menu-list',
        props: {
            items: Array
        }
    };
</script>

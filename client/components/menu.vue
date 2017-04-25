<template>
    <ul class="list">
        <template v-for="item in items">
            <li class="item" :class="{active: activeClass && isActive(item)}">
                <router-link :to='item.name' :class="`${item.icon}`">{{item.text}}</router-link>
                <ul class="list" v-if="item.children">
                    <template v-for="sub in item.children">
                        <li class="item" :class="{ active: activeClass && isActive(sub) }">
                            <router-link :to="sub.name" :title="sub.text">{{sub.text}}</router-link>
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
            items: Array,
            activeClass: Boolean
        },
        methods: {
            isActive(route) {
                const objectEqual = (a, b) => (Object.keys(a).length !== Object.keys(b).length) || Object.keys(a).every(key => String(a[key]) === String(b[key]));
                const routeEqual = item => item.name === this.$route.name && (!item.params || objectEqual(item.params, this.$route.params));
                return routeEqual(route) || (route.children && route.children.length && route.children.some(item => routeEqual(item)));
            }
        }
    };
</script>

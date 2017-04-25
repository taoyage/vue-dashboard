<template>
    <header class="header">
        <h1 class="brand">
            <router-link to="/">{{ header.name }}</router-link>
        </h1>
        <nav class="toolbar">
            <ul class="list">
                <li class="item">
                    <a href="">aaa</a>
                </li>
                <li class="item">
                    <a href="">bbb</a>
                </li>
                <li class="divider"></li>
                <li class="item"><a href="#">登出</a></li>
            </ul>
            <ul class="list">
                <li class="item">
                    <a href="">taoyage</a>
                </li>
                <li class="divider"></li>
                <li class="item"><a href="#">登出</a></li>
            </ul>
        </nav>
    </header>
</template>
<script>
    import {
        mapGetters
    } from 'vuex';

    export default {
        name: 'header',
        computed: mapGetters({
            header: 'header'
        })
    };
</script>

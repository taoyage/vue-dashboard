<template>
    <aside class="sidebar">
        <nav class="menu">
            <sidebar-menu :items="sidebar.menus" active-class></sidebar-menu>
        </nav>
        <footer class="footer">
            <a class="toggle icon-before icon-circle-left" title="Toggle navigation menu"></a>
            <a class="copyright">fsdafaf</a>
        </footer>
    </aside>
</template>
<script>
    import {
        mapGetters
    } from 'vuex';

    import Menu from './menu';

    export default {
        name: 'sidebar',
        components: {
            'sidebar-menu': Menu
        },
        computed: mapGetters({
            sidebar: 'sidebar'
        })
    };
</script>

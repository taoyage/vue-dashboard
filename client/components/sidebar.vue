<template>
    <aside class="sidebar">
        <nav class="menu">
            <sidebar-menu :items="sidebar.menus" active-class></sidebar-menu>
        </nav>
        <footer class="footer">
            <a class="toggle el-icon-arrow-left" title="Toggle navigation menu" @click="toggleCollapse"></a>
            <router-link class="copyright" :to="{name: 'about'}" :title="`About${sidebar.copyright}`">&copy; {{sidebar.copyright}}</router-link>
        </footer>
    </aside>
</template>
<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    import Menu from './menu';

    export default {
        name: 'sidebar',
        components: {
            'sidebar-menu': Menu
        },
        computed: mapGetters({
            sidebar: 'sidebar'
        }),
        methods: {
            ...mapActions({
                toggleCollapse: 'toggleSidebarCollapse'
            })
        }
    };
</script>

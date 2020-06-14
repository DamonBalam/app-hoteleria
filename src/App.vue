<template>
    <v-app>
        <!-- menu lateral -->
        <SideComponent />
        <!-- barra de navegacion -->
        <v-app-bar app color="teal darken-1" dense dark :clipped-left="false">
            <v-toolbar-title>HOTEL'S SYSTEM</v-toolbar-title>

            <v-spacer></v-spacer>


        </v-app-bar>

        <!-- vista -->
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>
<script>
    import SideComponent from "./components/SideComponent";

    export default {
        components: {
            SideComponent
        },
        methods: {
            menu() {
                this.$store.commit("SET_DRAWER");
            }
        }
    };
</script>

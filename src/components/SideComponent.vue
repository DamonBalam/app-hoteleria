<template>
    <v-navigation-drawer
            v-model="drawer"
            color="purple lighten-1"
            :expand-on-hover="expandOnHover"
            :mini-variant="miniVariant"
            :right="true"
            app
            dark
            permanent
    >
        <v-list dense nav class="py-0">
            <v-list-item two-line :class="miniVariant && 'px-0'" @click="menu">
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/men/81.jpg"/>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Arturo Saldivar</v-list-item-title>
                    <v-list-item-subtitle>USU001</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn block>Cerrar Sesión</v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {title: "Dashboard", icon: "mdi-view-dashboard", path: "/"},
                    {title: "Huéspedes", icon: "mdi-account-supervisor", path: "/huesped-lista"},
                    {title: "Venta", icon: "mdi-cart", path: "/punto-venta"},
                    {title: "Caja", icon: "mdi-inbox-full", path: "/caja"},
                    {title: "Reportes", icon: "mdi-file-chart", path: "/reportes"},
                    {title: "Configuración", icon: "mdi-cogs", path: "/configuracion"}
                ],
                color: "primary",
                colors: ["primary", "blue", "success", "red", "teal"],
                right: false,
                miniVariant: false,
                expandOnHover: false,
                background: false
            };
        },
        methods: {
            menu() {
                this.$store.commit("SET_DRAWER");
            }
        },
        computed: {
            drawer() {
                return this.$store.state.drawer;
            }
        }
    };
</script>

<style lang="scss" scoped></style>

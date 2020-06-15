<template>
    <v-container>
        <v-row dense align="center" justify="center">
            <v-col cols="8">
                <v-card class="ma-5 " flat outlined>
                    <v-card-title class="pb-0 d-inline-block text-center">
                        <span class="headline text-center">NUEVO HUÉSPED</span>
                    </v-card-title>
                    <v-form ref="formulario">
                        <v-row justify="start">
                            <v-col cols="12">
                                <v-container fluid>
                                    <v-card outlined>
                                        <v-row>
                                            <v-col cols="12" class="px-5">
                                                <small
                                                        class="purple--text font-weight-bold"
                                                >Datos del Huésped</small
                                                >
                                                <v-divider
                                                        class="purple darken-2"
                                                ></v-divider>
                                            </v-col>
                                            <v-col cols="12" md="6" class="px-5">
                                                <v-text-field
                                                        color="purple darken-2"
                                                        label="Nombres*"
                                                        required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" class="px-5">
                                                <v-text-field
                                                        color="purple darken-2"
                                                        label="Apellido Paterno*"
                                                        required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" class="px-5">
                                                <v-text-field
                                                        color="purple darken-2"
                                                        label="Apellido Materno"
                                                        required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" class="px-5">
                                                <v-select
                                                        v-model="Formulario.genero"
                                                        :items="genero"
                                                        label="Género*"
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="6" class="px-5">
                                                <v-menu
                                                        ref="menu"
                                                        v-model="menu"
                                                        min-width="290"
                                                        :close-on-content-click="false"
                                                        :return-value.sync="
                                                Formulario.fecha
                                            "
                                                        transition="scale-transition"
                                                        offset-y
                                                >
                                                    <template v-slot:activator="{ on }">
                                                        <v-text-field
                                                                v-model="Formulario.fecha"
                                                                label="Fecha de Nacimiento"
                                                                prepend-icon="mdi-calendar"
                                                                readonly
                                                                v-on="on"
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                            v-model="Formulario.fecha"
                                                            no-title
                                                            scrollable
                                                            locale="es"
                                                    >
                                                        <div class="flex-grow-1"></div>
                                                        <v-btn
                                                                small
                                                                text
                                                                color="primary"
                                                                @click="menu = false"
                                                        >Cancelar</v-btn
                                                        >
                                                        <v-btn
                                                                small
                                                                text
                                                                color="primary"
                                                                @click="
                                                        $refs.menu.save(
                                                            Formulario.fecha
                                                        )
                                                    "
                                                        >Aceptar</v-btn
                                                        >
                                                    </v-date-picker>
                                                </v-menu>
                                            </v-col>
                                            <v-col cols="12" md="6" class="px-5">
                                                <v-text-field
                                                        v-model="Formulario.correo"
                                                        color="purple darken-2"
                                                        label="Correo Electrónico"
                                                        required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" class="px-5">
                                                <v-text-field
                                                        v-model="Formulario.telefono"
                                                        color="purple darken-2"
                                                        label="Teléfono"
                                                        required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" class="px-5">
                                                <v-select
                                                        v-model="Formulario.categoria"
                                                        :items="categorias"
                                                        label="Categoría"
                                                ></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-form>
                    <v-card-actions>
                        <v-btn
                                color="error"
                                rounded
                                to="/huesped-lista"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                            REGRESAR
                        </v-btn
                        >
                        <v-spacer></v-spacer>

                        <v-btn
                                color="blue darken-1"
                                :loading="loading"
                                dark
                                rounded
                                @click="registrar()"
                        >
                            <v-icon>mdi-content-save</v-icon>
                            REGISTRAR
                        </v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: 'NuevoHuesped',
        data() {
            return {
                genero: ["Hombre", "Mujer", "No especificado"],
                categorias: ["Economica","Turista","Premiun"],
                requeridoRegla: [v => !!v || "*campo requerido*"],
                loading: false,
                menu: false,
                Formulario: {
                    nombre: null
                },
                // notificacion
                color: null,
                mensaje: null,
                notificacion: false
            };
        },
        methods: {
            limpiarFormulario() {

            },
            registrar() {

            }
        }
    };
</script>

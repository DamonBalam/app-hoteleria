<template>
    <v-container fluid>
        <v-card outlined class="mt-10">
            <v-row dense no-gutters class="pa-5">
                <v-col cols="12" md="4" class="pt-4">
                    <span class="headline">LISTA DE VENTAS REALIZADAS</span>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                            v-model="buscar"
                            append-icon="mdi-briefcase-search"
                            label="BUSCAR VENTA"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="pt-4 text-right">
                    <v-btn
                            rounded
                            color="blue lighten-1"
                            dark
                    >REPORTES
                        <v-icon right small>mdi-content-paste</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider class="pa-1"></v-divider>
            <v-row dense class="pa-5" no-gutters>
                <v-col cols="12" class="pa-0">
                    <v-data-table
                            class="ma-2 pa-0"
                            :items-per-page="12"
                            hide-default-footer
                            no-data-text="No hay registros"
                            no-results-text="No se encontraron registros"
                            :page.sync="pagina"
                            @page-count="pageCount = $event"
                            :headers="headers"
                            :items="catalogo_huespedes"
                            :search="buscar"
                            multi-sort
                    >
                        <template v-slot:item.folio="{ item }">
                        <span class="font-weight-bold">
                            {{ item.folio }}
                        </span>
                        </template>


                        <!-- acciones -->
                        <template v-slot:item.action="{ item }">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                            fab
                                            dark
                                            small
                                            text
                                            :to="item"
                                    >
                                        <v-icon
                                                v-on="on"
                                                small
                                                color="blue"
                                        >mdi-pencil
                                        </v-icon
                                        >
                                    </v-btn>
                                </template>
                                <span>Editar</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                            fab
                                            dark
                                            small
                                            text
                                            :to="item"
                                    >
                                        <v-icon
                                                v-on="on"
                                                small
                                                color="warning"
                                        >mdi-eye
                                        </v-icon
                                        >
                                    </v-btn>
                                </template>
                                <span>Ver Hospedaje</span>
                            </v-tooltip>

                        </template>

                    </v-data-table>
                    <div class="text-center pt-2">
                        <v-pagination
                                v-model="pagina"
                                :length="pageCount"
                                :total-visible="10"
                        ></v-pagination>
                    </div>
                </v-col>
            </v-row>
        </v-card>

    </v-container>
</template>

<script>
    export default {
        name:'Caja',
        data() {
            return {
                buscar: "",
                pagina: 1,
                pageCount: 0,
                headers: [
                    {
                        text: "FOLIO",
                        align: "center",
                        sortable: false,
                        value: "folio",
                        width: "10%"
                    },
                    {
                        text: "REALIZADA POR",
                        align: "left",
                        sortable: false,
                        value: "nombre_completo",
                        width: "30%"
                    },
                    {
                        text: "TURNO",
                        align: "left",
                        sortable: false,
                        value: "turno",
                        width: "10%"
                    },
                    {
                        text: "FOLIO HUÉSPED",
                        align: "left",
                        sortable: false,
                        value: "fecha",
                        width: "10%"
                    },
                    {
                        text: "FECHA",
                        align: "center",
                        sortable: false,
                        value: "telefono",
                        width: "10%"
                    },
                    {
                        text: "TOTAL",
                        align: "center",
                        sortable: false,
                        value: "total",
                        width: "10%"
                    },


                    {
                        text: "OPCIONES",
                        align: "center",
                        value: "action",
                        sortable: false,
                        width: "10%"
                    }
                ],
                catalogo_huespedes: [
                    {
                        folio: 'VTA001',
                        nombre_completo: 'JOSÉ LOPEZ MATEL',
                        fecha: 'HUE001',
                        turno: 'MATUTINO',
                        telefono: '12/02/2020',
                        total: '$ 5,200'
                    }, {
                        folio: 'VTA002',
                        nombre_completo: 'LINO RANGEL HERNANDEZ',
                        fecha: 'HUE002',
                        turno: 'VESPERTINO',
                        telefono: '12/02/2020',
                        total: '$ 3,200'
                    }, {
                        folio: 'VTA003',
                        nombre_completo: 'MARTHA GONZALES PÚC',
                        fecha: 'HUE003',
                        turno: 'MATUTINO',
                        telefono: '12/02/2020',
                        total: '$ 1,200'
                    }
                ]
            };
        },
    };
</script>
<style lang="scss" scoped></style>

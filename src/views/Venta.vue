<template>
    <v-container fluid >
        <v-card class="mt-5" outlined>
            <v-row dense justify="center" align="center">
                <v-col cols="8" class="px-5">
                    <v-autocomplete class="mb-1" autofocus v-model="expediente"
                                    :items="expedientes"
                                    item-text="nombre_completo" hide-no-data label="Buscar Huésped"
                                    placeholder="Folio, Apellido paterno, Nombre(s)" prepend-icon="mdi-account-search"
                                    return-object></v-autocomplete>
                </v-col>
                <v-col cols="4" class="px-5">
                    <v-select v-model="tipoExpediente" :items="tiposExpediente" menu-props="auto"
                              color="light-blue darken-4" label="Artículo o Servicio" prepend-icon="mdi-clipboard-text"
                              single-line return-object></v-select>
                </v-col>
                <v-col cols="12" class="px-5">
                    <span class="font-weight-bold">ACCESO RAPIDO</span>
                </v-col>
                <v-row no-gutters justify="space-between" class="pa-5">
                    <v-col v-for="servicio in servicios" :key="servicio.id" cols="2">
                        <v-card :color="servicio.color" dark class="ma-1 manita"
                                @click.prevent="agregarCarrito(servicio)" height="100px">
                            <v-card-text>
                                <span class="d-block text-center title">{{ servicio.nombre }}</span>
                                <span class="d-block text-center headline">{{ servicio.precio  }}</span>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-col cols="12" class="px-5">
                    <v-simple-table fixed-header dense class="">
                        <thead>
                        <tr>
                            <th width="10%" class="text-center">
                                <v-icon>mdi-settings</v-icon>
                            </th>
                            <th width="12%">Código</th>
                            <th width="42%">Descripción</th>
                            <th width="12%" class="text-right">P. U.</th>
                            <th width="12%" class="text-center">Cantidad</th>
                            <th width="12%" class="text-right">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,i) in carrito" :key="item.codigo">
                            <td class="text-center" style="height: 30px">
                                <v-btn text icon small @click.prevent="eliminarCarrito(item,i)" color="red lighten-2">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </td>
                            <td class="font-weight-bold">{{item.codigo}}</td>
                            <td>{{item.descripcion}}</td>
                            <td class="text-right">{{ item.costo }}</td>
                            <td class="text-center">{{item.cantidad}}</td>
                            <td class="text-right">{{ (item.cantidad * item.costo) }}</td>
                        </tr>
                        <tr v-for="n in (7 - carrito.length)" :key="n">
                            <td style="height: 30px"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="5" class="text-right font-weight-bold">TOTAL</td>
                            <td class="text-right">{{total}}</td>
                        </tr>
                        </tfoot>
                    </v-simple-table>
                </v-col>
                <v-row class="pa-7" justify="space-between">

                    <v-btn color="orange darken-1" dark>COTIZAR
                        <v-icon right small>mdi-clipboard-check</v-icon>
                    </v-btn>
                    <v-btn color="teal darken-2" dark>REGISTRAR COMPRA
                        <v-icon right small>mdi-content-save-move</v-icon>
                    </v-btn>
                </v-row>
            </v-row>
        </v-card>


    </v-container>
</template>

<script>
    export default {
        name: 'app',

        data() {
            return {
                expediente: null,
                tipoExpediente: null,
                establecimiento: null,
                carrito: [],
                recibo: null,
                reciboText: '',
                tiposExpediente: [
                    {id: 1, text: 'HABITACIÓN SIMPLE'},
                    {id: 2, text: 'HABITACIÓN DOBLE'},
                    {id: 3, text: 'ROOM SERVICE'},
                    {id: 4, text: 'SPA'},
                    {id: 5, text: 'BAR'},
                    {id: 6, text: 'BUFFET'},
                ],
                expedientes: [
                    {
                        folio: 'HUE001',
                        nombre_completo: 'ANGEL ARTURO SALDIVAR BALAM',
                        fecha: '12/02/1952',
                        categoria: 'Económica',
                        telefono: '9831820506',
                        correo: 'damonbalam@gmail.com'
                    }, {
                        folio: 'HUE003',
                        nombre_completo: 'IKER CAAMAL MENDOZA',
                        fecha: '02/07/1982',
                        categoria: 'Premiun',
                        telefono: '9831234567',
                        correo: 'soyiker@gmail.com'
                    }, {
                        folio: 'HUE002',
                        nombre_completo: 'MARTHA M. BALAM PECH',
                        fecha: '15/03/1952',
                        categoria: 'Turista Especial',
                        telefono: '9831280546',
                        correo: 'martha12@gmail.com'
                    }
                ],
                servicios: [
                    {id: 1, nombre: 'HABITACIÓN SIMPLE', codigo: '019328', precio: 800, color: '#455A64'},
                    {id: 2, nombre: 'HABITACIÓN DOBLE', codigo: '019257', precio: 1200, color: '#455A64'},
                    {id: 3, nombre: 'ROOM SERVICE', codigo: '000443', precio: 250, color: '#78909C'},
                    {id: 4, nombre: 'BUFFET', codigo: '000032', precio: 200, color: '#78909C'},
                    {id: 5, nombre: 'SPA', codigo: '000033', precio: 300, color: '#90A4AE'},
                ],
                total: null
            }
        },


    }
</script>

<style lang="scss" scoped>
    table {
        background-color: white;
        text-align: left;
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    thead, tfoot {
        background-color: #546E7A !important;
        border-bottom: solid 3px #0F362D;
        color: white;
    }

    thead tr th {
        background-color: #546E7A !important;
        border-bottom: solid 3px #0F362D;
        color: white !important;
        text-transform: uppercase;
    }

    tbody tr:nth-child(even) {
        background-color: #ddd;

    }

    tbody tr:hover td {
        background-color: #B0BEC5;
        color: white;
        transition: all .3s ease;
    }

    .manita {
        cursor: pointer;
    }

    #chip-usage-example .v-chip {
        margin: 8px;
    }
</style>

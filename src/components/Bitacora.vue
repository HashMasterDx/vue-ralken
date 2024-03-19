<template>
    <div class="container">
        <DataTable class="table table-striped table-bordered display" :columns="columns" :data="logs"
            :options="{ scrollX:true, autoWidth: false, }" ref="table" width="100%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Host</th>
                    <th>Solicitud</th>
                    <th>País</th>
                    <th>Bandera</th>
                    <th>Fecha</th>
                </tr>
            </thead>
        </DataTable>
    </div>
</template>

<script lang="ts">
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";

import axios from 'axios';

DataTable.use(DataTablesLib);

export default {
    components: { DataTable },
    data() {
        return {
            logs: null,
            errors: null as string | null,
            columns: [
                { data: 'id' },
                { data: 'host' },
                { data: 'solicitud' },
                { data: 'country'},
                { data: 'country_flag', render: function (data: any) {
                    if (data === null) {
                        return '';
                    } else {
                        return `<img src="${data}" alt="Bandera" width="50">`;
                    }
                }
                },
                { data: 'fecha', render: function (data: any) {
                    return new Date(data).toLocaleString();
                }
                },
            ]
        }
    },
    mounted() {
        const table = this.$refs.table;
        const that = this;
        this.getLogs();
    },
    methods: {
        getLogs() {
            const urlEnv = import.meta.env.VITE_API_URL;
            axios.get(`${urlEnv}/bitacora/`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    this.logs = response.data;
                })
                .catch(error => {
                    this.errors = 'La api tuvo un error';
                });
        }
    }
}
</script>

<style>
@import "datatables.net-dt";
</style>
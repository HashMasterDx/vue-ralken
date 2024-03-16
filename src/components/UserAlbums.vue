<template>
  <div class="container">
    <DataTable class="table table-striped table-bordered display" :columns="columns" :data="albums"
        :options="{ scrollX:true, autoWidth: false, }" ref="table" width="100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Titulo</th>
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
    props: {
      userId: {
        type: String,
        required: true
      }
    },
    data() {
        return {
            albums: null,
            errors: null as string | null,
            columns: [
                { data: 'id' },
                { data: 'title' },
                {
                    data: null, render: function (data: any, type: any, row: { id: any; }, meta: any) {
                        return `<button data-toggle="tooltip" data-placement="bottom" data-id="${row.id}" title="Ver Fotos" class="btn btn-photos m-1" style="background-color:#ffdd33;">Ver Fotos</button>`;
                    }
                }
            ]
        }
    },
    mounted() {
        const table = this.$refs.table;
        const that = this;
        this.getAlbums();
        this.$nextTick(() => {
            (table as any).dt.on('click', 'button.btn-photos',(event: any) => {
                var albumId = event.currentTarget.dataset.id;
                that.viewPhotos(albumId);
            });
        });
    },
    methods: {
        getAlbums() {
            const urlEnv = import.meta.env.VITE_API_URL;
            axios.get(`${urlEnv}/albumes/${this.userId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    this.albums = response.data;
                })
                .catch(error => {
                    this.errors = `La api tuvo un error: $(error)`
                });
        },
        viewPhotos(albumId: number) {
            this.$router.push({ name: 'album_photos', params: { albumId: albumId } });
        }
    }
}
</script>

<style>
/* Estilos CSS para la tabla */
</style>
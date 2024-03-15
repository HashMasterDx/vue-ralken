
<template>
  <div class="container">
      <div class="row">
          <h1 class="text-center mb-3">Usuarios</h1>
      </div>
      <DataTable class="table table-striped table-bordered display" :columns="columns" :data="users"
          :options="{ autoWidth: false, }" ref="table" width="100%">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Username</th>
                  <th>Acciones</th>
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
        var that = this;
        return {
            users: null,
            errors: null as string | null,
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'username' },
                {
                    data: null, render: function (data: any, type: any, row: { id: any; }, meta: any) {
                        let btns = ''
                        btns += `<button data-toggle="tooltip" data-placement="bottom" data-id="${row.id}" title="Ver Posts" class="btn btn-posts m-1" style="background-color:#ffdd33;">Ver Posts</button>`;
                        btns += `<button data-toggle="tooltip" data-placement="bottom" data-id="${row.id}" title="Ver Albumes" class="btn btn-primary btn-albums m-1">Ver Albumes</button>`;
                        return btns;
                    }
                }
            ]
        }
    },
    mounted() {
        const table = this.$refs.table;
        const that = this;
        this.getUsers();
        this.$nextTick(() => {
            (table as any).dt.on('click', 'button.btn-posts', (event: any) => {
                var userId = event.currentTarget.dataset.id;
                that.viewPosts(userId);
            });
            (table as any).dt.on('click', 'button.btn-albums', (event: any) => {
                var userId = event.currentTarget.dataset.id;
                that.viewAlbums(userId);
            });
        });
    },
    methods: {
        getUsers() {
            axios.get(`http://localhost:8000/api/usuarios/`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    this.users = response.data;
                })
                .catch(error => {
                    this.errors = `La api tuvo un error: $(error)`
                });
        },
        viewPosts(userId: number) {
            this.$router.push({ name: 'user_posts', params: { userId } });
        },
        viewAlbums(userId: number) {
            this.$router.push({ name: 'user_albums', params: { userId } });
        }
    }
}
</script>

<style>
@import "datatables.net-dt";
</style>
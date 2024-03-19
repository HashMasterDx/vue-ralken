<script lang="ts">
import { RouterView } from 'vue-router'
import axios from 'axios';

export default {
  data() {
    return {
      logged: false
    }
  },
  methods: {
    isLoggedIn() {
      if (localStorage.getItem('token')) {
      const urlEnv = import.meta.env.VITE_API_URL;
      axios.post(`${urlEnv}/token/verify/`, {
        token: localStorage.getItem('token')
      })
        .then(response => {
          this.logged = true;
        })
        .catch(error => {
          localStorage.removeItem('token')
          this.logged = false;
        });
    } else {
      this.logged = false;
    }
    },
    logout() {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  },
  mounted() {
    this.isLoggedIn();
  }

}
</script>

<template>
  <main>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Ralken Consulting</a>
        <button v-if="logged" class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" v-if="logged">
            <li class="nav-item">
              <a class="nav-link" href="/users">Usuarios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/albums">Albumes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bitacora">Bitacora</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="logged">
              <button class="btn btn-primary" @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </nav>

    </div>
    <RouterView />
  </main>
</template>

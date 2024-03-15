<script lang="ts">
import { RouterView } from 'vue-router'
import axios from 'axios';

export default {
  data() {
    
  },
  methods: {
    isLoggedIn() {
      return localStorage.getItem('token');
    },
    logout() {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }
}
</script>

<template>
  <main>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Ralken Consulting</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" v-if="isLoggedIn()">
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
                <li class="nav-item" v-if="isLoggedIn()">
                    <button class="btn btn-primary" @click="logout">Logout</button>
                </li>
            </ul>
        </div>
    </nav>
    
    </div>
    <RouterView />
  </main>
</template>

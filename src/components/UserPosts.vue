<template>
  <div>
    <div class="row text-center">
      <div class="col-sm-6 mb-3" v-for="post in posts" :key="post.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }} </h5>
            <p class="card-text">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchUserPosts();
  },
  methods: {
    fetchUserPosts() {
      axios.get(`http://localhost:8000/api/posts/${this.userId}/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los posts del usuario:', error);
      });
    }
  }
};
</script>

<style>
/* Estilos CSS para la tabla */
</style>
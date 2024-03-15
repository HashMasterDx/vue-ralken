<template>
  <div>
    <div class="row text-center">
      <div class="col-sm-3 mb-3" v-for="photo in photos" :key="photo.id">
        <div class="card">
          <img :src="photo.url" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ photo.title }} </h5>
            <p class="card-text">{{ photo.body }}</p>
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
    albumId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      photos: []
    };
  },
  mounted() {
    this.fetchAlbumPhotos();
  },
  methods: {
    fetchAlbumPhotos() {
      axios.get(`http://localhost:8000/api/photos/${this.albumId}/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => {
          this.photos = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las fotos del album:', error);
        });
    }
  }
}
</script>
<style>
img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}
</style>
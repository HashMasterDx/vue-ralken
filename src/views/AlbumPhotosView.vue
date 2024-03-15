<script lang="ts">
// @ts-ignore
import AlbumPhotos from '../components/AlbumPhotos.vue'

export default {
    components: {
        AlbumPhotos,
    },
    props: {
        albumId: {
            type: String,
            required: true
        }
    }
};
</script>
<template>
    <main>
        <h1 class="text-center">Fotos del album {{ albumId }}</h1>
        <AlbumPhotos :albumId="albumId"/>
    </main>
</template>
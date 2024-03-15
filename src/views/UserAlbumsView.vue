<script lang="ts">
// @ts-ignore
import UserAlbums from '../components/UserAlbums.vue'

export default {
    components: {
        UserAlbums,
    },
    props: {
        userId: {
            type: String,
            required: true
        }
    }
};
</script>
<template>
    <main>
        <h1 class="text-center">Albumes del usuario {{ userId }}</h1>
        <UserAlbums :userId="userId"/>
    </main>
</template>
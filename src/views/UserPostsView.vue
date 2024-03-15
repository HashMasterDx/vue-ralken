<script lang="ts">
// @ts-ignore
import UserPosts from '../components/UserPosts.vue'

export default {
    components: {
        UserPosts,
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
        <h1 class="text-center">Posts del usuario {{ userId }}</h1>
        <UserPosts :userId="userId"/>
    </main>
</template>
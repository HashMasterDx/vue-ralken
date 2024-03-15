<template>
    <div class="container">
        <h2>Login</h2>
        <form @submit="login">
            <div class="form-group mb-3">
                <label for="username">Username:</label>
                <input type="input" class="form-control" id="username" v-model="username" required>
            </div>
            <div class="form-group mb-3">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login(event) {
            event.preventDefault();

            axios.post('http://localhost:8000/api/token/', {
                username: this.username,
                password: this.password
            })
            .then(response => {
                console.log(response.data.access);
                localStorage.setItem('token', response.data.access);
                window.location = '/';  
            })
            .catch(error => {
                this.$swal('Error', 'Invalid username or password', 'error');
                console.log(error.response.data);
            });
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}
</style>
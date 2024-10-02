<template>
    <div class="register-page">
      <h1>RegisterPage</h1>
      <form @submit.prevent="register">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Register</button>
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
      async register() {
        try {
          const response = await axios.post('http://localhost:8000/api/register', {
            username: this.username,
            password: this.password
          });
          
          // Eğer kayıt işlemi sırasında token dönüyorsa, token'ı localStorage'a kaydedin
          if (response.data.token) {
            localStorage.setItem('token', response.data.token);
          }
  
          // Kullanıcıyı giriş sayfasına yönlendir
          this.$router.push('/login');
        } catch (error) {
          console.error("Registration failed", error);
        }
      }
    }
  }
  </script>
  
  <style>
  .register-page {
    margin-top: 60px; /* SiteHeader yüksekliği kadar bir boşluk ekleyin */
    padding: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  form > div {
    margin-bottom: 15px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
    
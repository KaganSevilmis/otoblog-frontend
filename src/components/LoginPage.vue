<template>
    <div class="login-page">
      <h1>LoginPage</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="text" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:8000/api/login', {
            email: this.email,
            password: this.password
          });
          console.log("slm")
          localStorage.setItem('token', response.data.token); // Assumes response contains a token property
          this.$router.push('/');
        } catch (error) {
          console.error("Login failed", error);
        }
      }
    }
  }
  </script>
  
  <style>
  .login-page {
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
  
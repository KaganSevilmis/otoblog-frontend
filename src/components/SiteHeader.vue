<template>
  <header class="header">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/instagram-logo.png" alt="Instagram">
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/facebook-logo.png" alt="Facebook">
          </a>
        </li>
        <li>
          <a href="https://twitter.com/login?lang=tr" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/twitter-logo.png" alt="Twitter">
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
};
</script>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
}

.header li {
  margin: 0 10px;
}

.header a {
  color: white;
  text-decoration: none;
}

.header img {
  width: 23px;
  height: 23px;
}

.header a:hover img {
  opacity: 0.8;
}
</style>

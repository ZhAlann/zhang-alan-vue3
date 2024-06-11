<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
    <router-link to="/" class="navbar-brand ms-lg-5">
      <h1 class="m-0 text-uppercase text-dark"><i class="bi bi-droplet-half fs-1 text-primary me-3"></i>BOTW MONSTERs</h1>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto py-0 mx-4">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/monsters" class="nav-item nav-link">Monsters</router-link>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->

  <router-view />

  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-white-50 py-4">
    <div class="container">
      <div class="row g-5">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-md-0">&copy; <a class="text-white" href="#">Your Site Name</a>. All Rights Reserved.</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <p class="mb-0">Designed by <a class="text-white" href="https://htmlcodex.com">HTML Codex</a></p>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>


<style scoped>
/* Add your styles here */
</style>

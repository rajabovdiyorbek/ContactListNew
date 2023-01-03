<template>
  <nav class="navbar bg-secondary" data-bs-theme="dark">
    <!-- Navbar content -->
    <div class="container-lg">
      <a class="navbar-brand">My contacts :)</a>
      <form class="d-flex" role="search">
        <router-link to="/">
          <button class="btn btn-success" type="submit">
            Список контактов
          </button>
        </router-link>
        <router-link to="/create">
          <button class="btn btn-dark ms-3" type="submit">
            Создать контакт
          </button>
        </router-link>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

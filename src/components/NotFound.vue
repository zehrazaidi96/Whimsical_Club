<template>
  <div class="error-found">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-4">
          <h1>404</h1>
          <h4>Page not found</h4>
          <p>Sorry, the content that you are looking for doesn't exist.</p>
          <router-link to="/">
            <button type="button" class="btn btn-secondary">Go home</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped lang="scss">
</style>

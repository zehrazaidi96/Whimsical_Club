<template>
  <div class="home-page mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <TopJokersList />
        </div>
        <div class="col-md-6">
          <CreateJoke />
          <JokeCard />
        </div>
        <div class="col-md-3">
          <ProfileCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopJokersList from '@/components/TopJokersList.vue';
import CreateJoke from '@/components/CreateJoke.vue';
import JokeCard from '@/components/JokeCard.vue';
import ProfileCard from '@/components/ProfileCard.vue';

export default {
  name: 'HomePage',
  components: {
    TopJokersList,
    JokeCard,
    ProfileCard,
    CreateJoke,
  },
};
</script>

<style scoped lang="scss">
@media (min-width: 1200px) {
  .container {
    max-width: 1350px !important;
  }
}
</style>

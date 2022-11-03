<template>
  <div>
    <div class="profile-card">
      <div class="row">
        <div class="col-md-12">
          <img
            class="profile-avatar mb-2"
            src="@/assets/images/engineering-team.svg"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h5 class="profile-name text-center mb-0">Towkir Ahmed</h5>
          <h6 class="profile-team">Engineering Team</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img class="pts-image py-4" src="@/assets/images/profile-panda.svg" />
          <h5 class="pts">2050 Pts</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
};
</script>

<style scoped lang="scss">
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 2px solid #1c3c6b;
  box-shadow: 4px 4px 4px #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
  padding: 40px;

  .profile-avatar {
    border: 2px solid #1c3c6b;
    border-radius: 50%;
    background-color: white;
    height: 100px;
    width: 100px;
  }
  .profile-name {
    font-weight: bold;
  }
  .profile-team {
    color: rgba(183, 183, 183, 1);
  }
  .pts-image {
    width: 80px;
  }
  .pts {
    color: #1c3c6b;
    font-weight: bold;
  }
}
</style>

<template>
  <div>
    <div class="joker-card p-3 mb-4" v-for="post in postInfo" :key="post.id">
      <div class="row">
        <div class="col-1 col-md-1">
          <img class="user-avatar mr-3" :src="post.userAvatar" />
          <img class="review-stars" :src="post.reviewStar" />
        </div>
        <div class="col-md-7">
          <h6 class="user-name px-3 mb-0">{{ post.userName }}</h6>
          <p class="px-3">{{ post.day }} ago</p>
          <p class="mb-md-0 px-3" v-html="post.postMsg"></p>
        </div>
        <div class="col-md-4">
          <div class="post-likes p-2 px-3">
            <button class="btn p-0">
              <img class="thumbs-up" src="@/assets/images/thumbs-up.svg" />
            </button>
            <button class="btn p-0">
              <img
                class="thumbs-down"
                src="@/assets/images/outlined-thumbs-down.svg"
              />
            </button>
            <h6 class="pts mb-0 mt-1">{{ post.pts }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JokeCard',
  data() {
    return {
      /* eslint-disable global-require */
      postInfo: [
        {
          id: 0,
          userAvatar: require('@/assets/images/engineering-team.svg'),
          userName: 'Towkir Ahmed',
          reviewStar: require('@/assets/images/three-stars.svg'),
          day: '1 day',
          pts: '2050 Pts',
          postMsg: 'Where do spiders seek health advice?<br>.<br>.<br>.<br>.<br>WebMD. xD xD xD',
        },
        {
          id: 1,
          userAvatar: require('@/assets/images/spirites/tiger-1.svg'),
          userName: 'Hasibul Alam Ratul',
          reviewStar: '',
          day: '1 day',
          pts: '10 Pts',
          postMsg: 'Where do spiders seek health advice?<br>.<br>.<br>.<br>.<br>WebMD. xD xD xD',
        },
        {
          id: 2,
          userAvatar: require('@/assets/images/design-team.svg'),
          userName: 'Imran Molla',
          reviewStar: require('@/assets/images/one-star.svg'),
          day: '1 day',
          pts: '950 Pts',
          postMsg: 'Where do spiders seek health advice?<br>.<br>.<br>.<br>.<br>WebMD. xD xD xD',
        },
      ],
      /* eslint-enable global-require */
    };
  },
};
</script>

<style scoped lang="scss">
.joker-card {
  background: #ffffff;
  border: 1px solid #1c3c6b;
  box-shadow: 4px 4px 4px #f1f1f1;
  border-radius: 5px;

  .review-stars {
    margin-top: -24px;
    margin-left: 3px;
  }

  .user-avatar {
    position: relative;
    border: 2px solid #1c3c6b;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: white;
    height: 50px;
    width: 50px;
  }
  .user-name {
    font-weight: bold;
  }
  .post-likes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #0458a2;
    border-radius: 5px;

    button:focus {
      outline: none;
      box-shadow: none;
    }

    .pts {
      color: rgba(28, 60, 107, 1);
    }
  }
}
</style>

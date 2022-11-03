<template>
  <div class="jokers-list p-3 mb-3">
    <div class="row">
      <div class="col-md-12">
        <h5 class="list-text text-center">Top Joker List</h5>
        <hr class="separator" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div
          class="top-jokers p-2 mt-2"
          v-for="topJoker in topJokers"
          :key="topJoker.id"
        >
          <h6 class="name mb-0">{{ topJoker.name }}</h6>
          <h6 class="pts text-right mb-0">{{ topJoker.pts }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopJokersList',
  data() {
    return {
      topJokers: [
        {
          id: 0,
          name: 'Riya',
          pts: '2381Pts',
        },
        {
          id: 1,
          name: 'Rifat',
          pts: '2284Pts',
        },
        {
          id: 2,
          name: 'Tawhid',
          pts: '2200Pts',
        },
        {
          id: 3,
          name: 'Rayhan',
          pts: '2100Pts',
        },
        {
          id: 4,
          name: 'Towkir',
          pts: '2050Pts',
        },
        {
          id: 5,
          name: 'Maheen',
          pts: '1500Pts',
        },
        {
          id: 6,
          name: 'Imran',
          pts: '1000Pts',
        },
        {
          id: 7,
          name: 'Ratul',
          pts: '10Pts',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.jokers-list {
  background: #ffffff;
  border: 2px solid #1c3c6b;
  box-shadow: 4px 4px 4px #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
  .list-text {
    color: rgba(28, 60, 107, 1);
    font-weight: bold;
  }
  .separator {
    height: 2px;
    border-width: 0;
    color: #1c3c6b;
    background-color: #1c3c6b;
  }
  .top-jokers {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #1c3c6b;
    border-radius: 5px;
    .name {
      font-weight: bold;
    }
  }
}
</style>

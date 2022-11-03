<template>
  <div>
    <div class="create-joke p-3 mb-3">
      <div class="row mb-2">
        <div class="col-md-12">
          <div class="post-joke mb-2">
            <img
              class="user-avatar mr-2"
              src="@/assets/images/engineering-team.svg"
            />
            <b-form-textarea
              id="textarea-no-resize"
              rows="3"
              size="lg"
              no-resize
            ></b-form-textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-right">
          <button type="button" class="btn btn-custom px-5">Post Joke</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateJoke',
};
</script>

<style scoped lang="scss">
.create-joke {
  background: #ffffff;
  border: 2px solid #1c3c6b;
  box-shadow: 4px 4px 4px 0px rgba(236, 236, 236, 1);
  border-radius: 5px;

  .post-joke {
    display: flex;
    flex-direction: row;

    .user-avatar {
      border: 2px solid #1c3c6b;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: white;
      height: 50px;
      width: 50px;
    }
  }
  .btn-custom {
    background: #fccd03;
    border-radius: 5px;
    color: rgba(0, 0, 0, 1);
    font-weight: bold;
  }
  button:focus {
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }
}
</style>

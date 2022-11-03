<template>
  <div class="onbording-page">
    <div class="choose-team container">
      <div class="row">
        <div class="col-12 col-md-12">
          <h1 class="onboarding-text text-center mt-5 mb-5">
            Welcome to Whimsical Club
          </h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-6">
          <h5 class="onboarding-text">Choose your Ape Team</h5>
        </div>
      </div>
      <div class="row p-5">
        <div class="col-md-3 mr-sm-2">
          <input
            type="radio"
            name="team"
            value="eng-team"
            id="eng-team"
            v-model="engTeam"
          />
          <label for="eng-team"
            ><img
              class="team-img h-100 w-100 mb-2"
              src="@/assets/images/engineering-team.svg"
          /></label>
          <p class="team-text pl-4">Engineering Team</p>
        </div>
        <div class="col-md-3">
          <input
            type="radio"
            name="team"
            value="des-team"
            id="des-team"
            v-model="desTeam"
          />
          <label for="des-team"
            ><img
              class="team-img h-100 w-100 mb-2"
              src="@/assets/images/design-team.svg"
          /></label>
          <p class="team-text pl-5">Design Team</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form>
            <b-form-group class="mb-5">
              <label class="form-label">Enter your name</label>
              <b-form-input v-model="name"></b-form-input>
            </b-form-group>
          </form>
        </div>
      </div>
    </div>
    <div class="spirit-animal container">
      <div class="row mt-5 mb-5">
        <div class="col-md-6">
          <h5 class="animal-text">Choose your Spirit Animal</h5>
        </div>
      </div>
      <div class="row mb-4 px-md-5">
        <div class="col-md-10 img-checkbox">
          <div v-for="(image, index) in images" :key="index">
            <input
              type="checkbox"
              name="image"
              :value="index"
              :id="index"
              v-model="spirites"
            />
            <label :for="index"
              ><img class="w-100 h-100 p-2" :src="image"
            /></label>
          </div>
        </div>
      </div>
    </div>
    <div class="upload-meme container mt-5 mb-5">
      <div class="row mb-5">
        <div class="col-md-6">
          <h5 class="meme-text">Upload a Meme that defines you</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <input
            type="file"
            id="img"
            style="display: none"
            @change="previewImage"
            accept="image/*"
          />
          <label
            for="img"
            class="upload-meme-button text-center mb-4"
            v-if="!imageData"
          >
            <img
              class="meme-image"
              src="@/assets/images/upload-meme.svg"
              alt="upload-meme"
            />
            <p class="upload-meme-text mt-2 mb-1">Click to upload</p>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div v-if="imageData">
            <div class="image-preview mt-4 mb-3">
              <img class="preview" :src="memeFile" />
            </div>
            <input
              type="file"
              id="img"
              style="display: none"
              @change="previewImage"
              accept="image/*"
            />
            <label class="btn custom-label mb-4" for="img">Change</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-12 col-md-4">
          <button type="button" class="btn btn-custom mb-3">
            I have defined myself
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Onboarding',
  data() {
    return {
      name: '',
      memeFile: '',
      imageData: '',
      showPassword: false,
      engTeam: '',
      desTeam: '',
      spirites: [],
    };
  },
  computed: {
    images() {
      const path = require.context('@/assets/images/spirites', false, /\.svg$/);
      return path.keys().map(path);
    },
  },
  methods: {
    previewImage(event) {
      this.imageData = event;
      const input = event.target;
      this.memeFile = URL.createObjectURL(input.files[0]);
    },
  },
};
</script>
<style scoped lang="scss">
.choose-team {
  .onboarding-text {
    color: rgba(28, 60, 107, 1);
    font-weight: 700;
  }
  .team-text {
    color: rgba(28, 60, 107, 1);
    font-weight: 400;
  }
  .team-img {
    width: 100px;
    height: 100px;
  }
  .form-label {
    color: #1c3c6b;
    font-size: 20px;
    font-weight: bold;
  }
  .form-control {
    border: 1px solid #ffffff;
    border-bottom: 2px solid #1c3c6b;
    border-radius: 0;
  }
  input:focus {
    outline: none;
    box-shadow: none;
  }
  .input-group-text {
    background-color: #ffffff;
    border: none;
    border-bottom: 2px solid #1c3c6b;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"] + label {
    background: #fff;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 2px solid #b9def0;
    border-radius: 10px;
  }
  input[type="radio"]:checked + label {
    background: #dff5ff;
    display: inline-block;
    padding: 0 0 0 0px;
    transform: scale(0.95);
  }
}
.spirit-animal {
  .img-checkbox {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .animal-text {
    color: rgba(28, 60, 107, 1);
    font-weight: 700;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    background: #fff;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 2px solid #b9def0;
    border-radius: 10px;
    height: 100px;
    width: 100px;
  }
  input[type="checkbox"]:checked + label {
    background: #dff5ff;
    display: inline-block;
    padding: 0 0 0 0px;
    transform: scale(0.95);
  }
}
.upload-meme {
  .meme-text {
    color: rgba(28, 60, 107, 1);
    font-weight: 700;
  }
  .upload-meme-button {
    background: #dff5ff;
    border: 2px solid #b9def0;
    border-radius: 10px;
    height: 200px;
    width: 100%;
    padding: 40px 0px 25px 0px;
  }
  .upload-meme-text {
    color: rgba(28, 60, 107, 1);
  }
  .image-preview {
    display: inline-block;
    padding: 4px;
    border: 2px solid #b9def0;
    border-radius: 10px;
    .preview {
      height: 300px;
      width: 300px;
    }
  }
  .custom-label {
    color: #1c3c6b;
    border: 2px solid #1c3c6b;
    border-radius: 10px;
    font-size: 20px;
    width: 57%;
  }
  .btn-custom {
    background-color: #fccd03;
    border: 2px solid #fccd03;
    border-radius: 10px;
    color: rgba(28, 60, 107, 1);
    font-weight: bold;
    font-size: 20px;
    padding: 10px 50px 10px 50px;
  }
  button:focus {
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }
}
</style>

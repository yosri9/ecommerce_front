<template>
  <div id="app">


      <!-- Can be multiple files if you setup "collection" instead of "model" -->


      <input name="files" hidden accept="image/*" id="avatar-upload" type="file" ref="file" @change="onFileChange(image, $event)">

      <div v-if="!image">


        <v-avatar class="d-flex"
                  color="warning lighten-2"
                  size="80"
                  @click="selectFile()"
                  style="cursor: pointer">

          <img :src="imageUrl"/>

        </v-avatar>


      </div>

      <div v-else>

        <v-avatar class="d-flex"
                  color="warning lighten-2"
                  size="80"
                  @click="selectFile()"
                  style="cursor: pointer">

          <img :src="image"/>


        </v-avatar>


      </div>

  </div>

</template>

<script>

const {useImageStore} = require("@/stores/image-store");

export default {
  name: "ProfileImage",


  setup() {
    const imageStore = useImageStore()


    return {imageStore}

  },


  data() {
    return {

      image: false,


    }
  },

  props : {
    imageUrl: String

  },

  methods: {

    async fileUpload() {
      const imageFile = document.querySelector("#avatar-upload");
      // @ts-ignore
      console.log(imageFile)
      const response = await this.imageStore.updateImage(imageFile)

      console.log(response)



    },


    selectFile() {


      document.getElementById("avatar-upload").click()

      console.log("done")


      // Do something with chosen file
    },


    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(item, files[0]);
      this.fileUpload();
    },
    createImage(item, file) {
      new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    ,
    removeImage: function () {
      // eslint-disable-next-line no-unused-vars
      this.image = false;
    },


  }

}
</script>

<style scoped>

</style>
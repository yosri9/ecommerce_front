<template>
  <div>
    <CarouselHomePage/>

    <CenteredDivider/>

    <v-container fluid class="py-16 px-16 mb-10  align-content-center" style="background-color: black; color: white">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet.
    </v-container>


    <v-row class="mt-15">
      <ScrollableCard/>
    </v-row>


    <p class="pt-16 px-16  align-content-center">

      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo

    </p>


    <CenteredDivider/>


    <ThreeProductShow/>





  </div>
</template>

<script>
import CarouselHomePage from "@/components/CarouselHomePage";
import CenteredDivider from "@/components/CenteredDivider";
import ScrollableCard from "@/components/ScrollableCard";
import ThreeProductShow from "@/components/ThreeProductShow";


export default {

  components: {
    ThreeProductShow,


    ScrollableCard,
    CenteredDivider,
    CarouselHomePage,

  },
}
</script>



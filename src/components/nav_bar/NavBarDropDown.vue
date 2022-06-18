<template>
  <div class="text-center">
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <div

            v-bind="attrs"
            v-on="on"
        >
          {{ type }}
        </div>
      </template>
      <div class="d-inline-flex">
        <v-list>

          <v-list-item

          >

            <v-list-item-title class="px-10 align-self-start " v-for="(item, index) in items"
                               :key="index">


              <div class="font-weight-bold "
              >


                {{ item.title }}


                <v-list-item-subtitle class="py-3" v-for="(subItem, index) in item.subItems"
                                      :key="index">

                  <v-hover
                      v-slot="{ hover }"
                      open-delay="200"
                  >
                    <div :style=" hover ? 'text-decoration: underline;   text-decoration-color: gray;' : ''  ">
                      <router-link to="/filter" style="text-decoration: none">

                      {{subItem}}
                      </router-link>

                    </div>

                  </v-hover>

                </v-list-item-subtitle>


              </div>


            </v-list-item-title>

          </v-list-item>
        </v-list>

      </div>

    </v-menu>
  </div>

</template>

<script>
export default {
  name: "NavBarDropDown",
  props: {
    type: String
  },
  data() {
    return {
      items: [
        {
          title: 'Sport',
          subItems: [
             'Running', 'Hiking','Gym', 'Tennis', 'Biking'
          ]
        },
        {title: 'Shoes',
          subItems: [
            'Road Running',
            'Trail / Fell',
            'Track & Field',
            'Hiking',
            'Gym',
            'Court',
            'Sandals'
          ]
        },


        {title: 'Clothing',
        subItems: [
          'Jackets',
          'T-Shirts',
          'Vests',
          'Tights',
          'Bottoms',
          'Shorts',
          'Compression',
          'Hi-Visibility'
        ]
        },
        {title: 'Accessories',
        subItems: [
          'Backpacks',
          'GPS & Watches',
          'Hydration',
          'Injury Accessories',
          'Hats',
          'Gloves',
          'Socks'
        ]

        },
        {title: 'Brands',
          subItems: [
            'Scarpa',
            '1000 Mile',
            'Skins',
            'Skechers',
            'Keen',
            'Rab',
            'Montane',
            'Brooks',
            'Altra'
          ]

        },
      ],
    };


  },


}
</script>

<style scoped>

</style>
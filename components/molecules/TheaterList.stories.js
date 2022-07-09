import TheaterList from './TheaterList.vue';

export default {
    title: 'TheaterList',
    component: TheaterList,
    argTypes: {
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { TheaterList },
    template: `
    <v-container>
      <v-row justify="left" align="center">
        <v-col cols="6">
          <theater-list v-bind="$props" />
        </v-col>
      </v-row>
    </v-container>
    `
})
import SquareCard from './SquareCard.vue';

export default {
    title: 'SquareCard',
    component: SquareCard,
    argTypes: {
        to: {
            defaultValue: "/",
            description: "カードを押した時の遷移先",
            control: {
                type: String,
            }
        },
        image_path: {
            defaultValue: "/movie_tokusatsu_kaiju.png",
            description: "カードの画像URL",
        },
        title: {
            defaultValue: "上映中の作品",
            description: "カードのタイトル",
        },
        light_mode: {
            defaultValue: false,
            description: "ライトモードフラグ",
        },
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { SquareCard },
    template: `
    <v-container>
      <v-row justify="left" align="center">
        <v-col cols="4">
          <square-card v-bind="$props" />
        </v-col>
      </v-row>
    </v-container>
    `
})
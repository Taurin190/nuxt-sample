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
        description: {
            defaultValue: "お客様からお問い合わせの多いご質問とご回答を掲載しております。お問い合わせの前にぜひ一度ご確認ください。",
            description: "カードの説明",
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
    <v-container class="grey">
      <v-row justify="left" align="center">
        <v-col cols="6">
          <square-card v-bind="$props" />
        </v-col>
      </v-row>
    </v-container>
    `
})
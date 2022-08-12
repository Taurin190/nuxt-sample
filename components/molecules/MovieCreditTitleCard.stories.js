import MovieCreditTitleCard from './MovieCreditTitleCard.vue';

export default {
    title: 'MovieCreditTitleCard',
    component: MovieCreditTitleCard,
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
    components: { MovieCreditTitleCard },
    template: '<v-col cols="3"><movie-credit-title-card v-bind="$props" /><v-col>'
})
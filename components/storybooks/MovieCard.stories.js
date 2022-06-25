import MovieCard from '~/components/molecules/MovieCard.vue';

export default {
    title: 'MovieCard',
    component: MovieCard,
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
    components: { MovieCard },
    template: '<movie-card v-bind="$props" />'
})
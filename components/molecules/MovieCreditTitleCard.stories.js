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
        director: {
            defaultValue: "山田花太郎",
            description: "映画監督の名前",
        },
        performers: {
            defaultValue: "一宮和也、三島ひかり、西川実日子、大手伸也、奈緒子、秋本大我、山川健司・濱田隆一、野川口徹、利軽剛、星井ひな、武山鉄矢",
            description: "映画出演者の名前",
        },
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MovieCreditTitleCard },
    template: '<movie-credit-title-card v-bind="$props" />'
})
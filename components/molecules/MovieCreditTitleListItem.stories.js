import MovieCreditTitleListItem from './MovieCreditTitleListItem.vue';

export default {
    title: 'MovieCreditTitleListItem',
    component: MovieCreditTitleListItem,
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
        theaters: {
            defaultValue: [
                { name: "富谷", active: true },
                { name: "佐野", active: false },
                { name: "菖蒲", active: true },
                { name: "木場", active: true },
                { name: "二子玉川", active: false },
                { name: "グランベリーパーク", active: true },
                { name: "川崎", active: true },
                { name: "湘南", active: false },
                { name: "ムービル", active: true },
                { name: "名古屋", active: true },
                { name: "四日市", active: false },
                { name: "明和", active: true },
                { name: "大阪エキスポシティ", active: true },
                { name: "箕面", active: false },
                { name: "HAT神戸", active: true },
                { name: "広島", active: true },
                { name: "佐賀", active: true },
            ],
            description: "映画を上映している劇場リスト",
        },
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MovieCreditTitleListItem },
    template: '<movie-credit-title-list-item v-bind="$props" />'
})
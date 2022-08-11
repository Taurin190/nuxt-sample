import ShowingTheater from './ShowingTheater.vue';

export default {
    title: 'ShowingTheater',
    component: ShowingTheater,
    argTypes: {
        theaters: {
            defaultValue: [
                { name: "富谷", active: true },
                { name: "佐野", active: true },
                { name: "菖蒲", active: true },
                { name: "木場", active: true },
                { name: "二子玉川", active: true },
                { name: "グランベリーパーク", active: true },
                { name: "川崎", active: true },
                { name: "湘南", active: true },
                { name: "ムービル", active: true },
                { name: "名古屋", active: true },
                { name: "四日市", active: true },
                { name: "明和", active: true },
                { name: "大阪エキスポシティ", active: true },
                { name: "箕面", active: true },
                { name: "HAT神戸", active: true },
                { name: "広島", active: true },
                { name: "佐賀", active: true },
            ],
            description: "ポイントカードリンクの画像パス",
        },
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ShowingTheater },
    template: `<showing-theater v-bind="$props" />`
})
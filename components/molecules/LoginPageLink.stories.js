import LoginPageLink from './LoginPageLink.vue';
export default {
    title: 'LoginPageLink',
    component: LoginPageLink,
    argTypes: {
        theaters: {
            defaultValue: [
                { header: "東北" },
                { name: "富谷", group: "東北" },
                { header: "関東" },
                { name: "佐野", group: "関東" },
                { name: "高崎", group: "関東" },
                { name: "菖蒲", group: "関東" },
                { name: "木場", group: "関東" },
                { name: "二子玉川", group: "関東" },
                { name: "グランベリーパーク", group: "関東" },
                { name: "港北", group: "関東" },
                { name: "川崎", group: "関東" },
                { name: "湘南", group: "関東" },
                { name: "ムービル", group: "関東" },
                { header: "東海" },
                { name: "名古屋", group: "東海" },
                { name: "四日市", group: "東海" },
                { name: "明和", group: "東海" },
                { header: "近畿" },
                { name: "大阪エキスポシティ", group: "近畿" },
                { name: "箕面", group: "近畿" },
                { name: "HAT神戸", group: "近畿" },
                { header: "中国" },
                { name: "広島", group: "中国" },
                { header: "九州" },
                { name: "佐賀", group: "九州" },
            ],
            description: "劇場一覧",
        },
        to: {
            defaultValue: "/",
            description: "イメージバナーのリンク",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { LoginPageLink },
    template: '<login-page-link v-bind="$props" />'
})
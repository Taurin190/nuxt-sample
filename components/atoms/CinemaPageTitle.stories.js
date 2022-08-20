import CinemaPageTitle from './CinemaPageTitle.vue';
export default {
    title: 'CinemaPageTitle',
    component: CinemaPageTitle,
    argTypes: {
        title: {
            defaultValue: "Sampleシネマズ 上映中の作品",
            description: "ページのタイトル",
        },
        sub_title: {
            defaultValue: "NOW SHOWING",
            description: "ページのサブタイトル",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CinemaPageTitle },
    template: '<v-col cols="12"><cinema-page-title v-bind="$props">サンプルリンクテキスト</cinema-page-title></v-col>'
})
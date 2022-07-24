import CinemaLink from './CinemaLink.vue';
export default {
    title: 'CinemaLink',
    component: CinemaLink,
    argTypes: {
        to: {
            defaultValue: "/",
            description: "リンクのパス",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CinemaLink },
    template: '<v-col cols="4"><cinema-link v-bind="$props">サンプルリンクテキスト</cinema-link></v-col>'
})
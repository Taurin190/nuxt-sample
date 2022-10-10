import CinemaLinkButton from './CinemaLinkButton.vue';
export default {
    title: 'CinemaLinkButton',
    component: CinemaLinkButton,
    argTypes: {
        to: {
            defaultValue: "/",
            description: "リンクのパス",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CinemaLinkButton },
    template: '<v-col cols="4"><cinema-link-button v-bind="$props">サンプルリンクテキスト</cinema-link-button></v-col>'
})
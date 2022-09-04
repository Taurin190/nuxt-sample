import CardTitle from './CardTitle.vue';
export default {
    title: 'CardTitle',
    component: CardTitle,
    argTypes: {
        title: {
            type: String,
            default: "よくあるご質問",
        },
        to: {
            type: String,
            default: "/"
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CardTitle },
    template: '<v-col cols="4"><card-title v-bind="$props" /></v-col>'
})
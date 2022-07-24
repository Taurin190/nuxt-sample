import CopyWrite from './CopyWrite.vue';
export default {
    title: 'CopyWrite',
    component: CopyWrite,
    argTypes: {
        text: {
            type: String,
            default: "© 2022 Taurin190.com.",
        },
        style: {
            type: String,
            default: "white--text text-center"
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CopyWrite },
    template: '<v-col cols="12" class="grey darken-4"><copy-write v-bind="$props" /></v-col>'
})
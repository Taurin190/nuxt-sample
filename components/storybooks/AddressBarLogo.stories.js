import AddressBarLogo from '~/components/molecules/AddressBarLogo.vue';
export default {
    title: 'Logo',
    component: AddressBarLogo,
    argTypes: {
        img_path: {
            defaultValue: "/address-bar-logo.png",
            description: "アドレスバーロゴの画像パス",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AddressBarLogo },
    template: '<address-bar-logo v-bind="$props" />'
})

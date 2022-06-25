import AddressBarLogo from '~/components/molecules/AddressBarLogo.vue';
export default {
    title: 'AddressBar',
    component: AddressBarLogo,
    argTypes: {
        image_path: {
            defaultValue: "/address-bar-logo.png",
            description: "ロゴの画像パス",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AddressBarLogo },
    template: '<address-bar-logo v-bind="$props" />'
})
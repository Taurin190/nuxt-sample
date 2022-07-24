import IMaxLink from './IMaxLink.vue';
export default {
    title: 'IMaxLink',
    component: IMaxLink,
    argTypes: {
        links: [
            { text: "HOME", to: "/", index: 1 },
            { text: "IMAX", to: "/imax", index: 2 },
            { text: "4DX/ScreenX/4DX Screen", to: "/4dx", index: 3 },
        ]
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { IMaxLink },
    template: '<i-max-link v-bind="$props" />'
})
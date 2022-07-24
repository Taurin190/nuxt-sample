import ListPageLink from './ListPageLink.vue';
export default {
    title: 'ListPageLink',
    component: ListPageLink,
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
    components: { ListPageLink },
    template: '<list-page-link v-bind="$props" />'
})
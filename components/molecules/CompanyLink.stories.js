import CompanyLink from './CompanyLink.vue';
export default {
    title: 'CompanyLink',
    component: CompanyLink,
    argTypes: {
        links: [
            { text: "企業情報", to: "/", index: 1 },
            { text: "プライバシーポリシー", to: "/", index: 2 },
            { text: "特定商取引法表記", to: "/", index: 3 },
        ],
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CompanyLink },
    template: '<company-link v-bind="$props" />'
})
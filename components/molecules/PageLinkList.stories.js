import PageLinkList from './PageLinkList.vue';
export default {
    title: 'PageLinkList',
    component: PageLinkList,
    argTypes: {
        page_links: [
            {
                name: "上映中の作品",
                to: "/nowshowing",
            },
            {
                name: "公開予定作品",
                to: "/comingsoon",
            },
            {
                name: "イベント・キャンペーン",
                to: "/events",
            },
            {
                name: "サービス案内",
                to: "/service",
            },
            {
                name: "チケット購入・照会",
                to: "/tickets",
            },
        ],
        corporate_links: [
            {
                name: "お問い合わせ",
                to: "/nowshowing",
            },
            {
                name: "よくあるご質問",
                to: "/comingsoon",
            },
        ],
        inquiry_links: [
            {
                name: "採用情報",
                to: "/nowshowing",
            },
            {
                name: "109シネマズ経営理念",
                to: "/comingsoon",
            },
        ]
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { PageLinkList },
    template: '<page-link-list v-bind="$props" />'
})
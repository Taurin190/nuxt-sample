import CampaignLink from './CampaignLink.vue';
export default {
    title: 'CampaignLink',
    component: CampaignLink,
    argTypes: {
        image_path: {
            defaultValue: "/movie_tokusatsu_kaiju.png",
            description: "キャンペーンリンクの画像パス",
        },
        to: {
            defaultValue: "/",
            description: "キャンペーンリンクのリンク",
        },
        description: {
            defaultValue: "キャンペーンリンクの説明",
            description: "キャンペーンリンクの説明",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CampaignLink },
    template: '<campaign-link v-bind="$props" />'
})
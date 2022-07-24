import CampaignLink from './CampaignLink.vue';
export default {
    title: 'CampaignLink',
    component: CampaignLink,
    argTypes: {
        image_path: {
            defaultValue: "https://i.picsum.photos/id/32/220/60.jpg?hmac=MZokQVoCme3QjS5nKe_lrHunz_poLezH_QBJpgrS_V8",
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
    template: '<v-col cols="8"><campaign-link v-bind="$props" /></v-col>'
})
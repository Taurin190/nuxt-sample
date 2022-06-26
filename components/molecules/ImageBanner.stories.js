import ImageBanner from './ImageBanner.vue';
export default {
    title: 'ImageBanner',
    component: ImageBanner,
    argTypes: {
        image_path: {
            defaultValue: "/building_cinema_shitsunai.png",
            description: "イメージバナーの画像パス",
        },
        to: {
            defaultValue: "/",
            description: "イメージバナーのリンク",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ImageBanner },
    template: '<image-banner v-bind="$props" />'
})
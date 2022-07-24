import HoverImage from './HoverImage.vue';
export default {
    title: 'HoverImage',
    component: HoverImage,
    argTypes: {
        src: {
            defaultValue: "/movie_tokusatsu_kaiju.png",
            description: "画像のパス",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HoverImage },
    template: '<v-col cols="4"><hover-image v-bind="$props" /></v-col>'
})
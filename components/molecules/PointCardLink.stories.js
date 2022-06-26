import PointCardLink from './PointCardLink.vue';

export default {
    title: 'PointCardLink',
    component: PointCardLink,
    argTypes: {
        image_path: {
            defaultValue: "/creditcard_nonumber_black.png",
            description: "ポイントカードリンクの画像パス",
        },
        to: {
            defaultValue: "/pointcard",
            description: "ポイントカードリンクのリンク",
        },
        description: {
            defaultValue: "ポイントカードリンクの説明",
            description: "ポイントカードリンクの説明",
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { PointCardLink },
    template: `<point-card-link v-bind="$props" />`
})
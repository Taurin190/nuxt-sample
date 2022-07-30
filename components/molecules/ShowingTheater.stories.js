import ShowingTheater from './ShowingTheater.vue';

export default {
    title: 'ShowingTheater',
    component: ShowingTheater,
    argTypes: {
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ShowingTheater },
    template: `<showing-theater v-bind="$props" />`
})
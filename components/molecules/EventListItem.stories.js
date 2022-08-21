import EventListItem from './EventListItem.vue';
export default {
    title: 'EventListItem',
    component: EventListItem,
    argTypes: {
        image_path: {
            defaultValue: "/movie_tokusatsu_kaiju.png",
            description: "イベントの画像パス",
        },
        to: {
            defaultValue: "/",
            description: "イメージのリンク",
        },
        event_description: {
            defaultValue: "8月27日(土)・28日(日)に全国映画館で開催する「Good Morning! Project 2022 Summer CITY CIRCUIT」ライブビューイングの詳細が決定！",
            description: "イメージの説明文",
        },
        event_date: {
            defaultValue: "[2022/08/19]"
        }
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { EventListItem },
    template: `
    <v-row>
      <v-col cols="8">
        <event-list-item v-bind="$props" />
      </v-col>
    </v-row>
    `
})
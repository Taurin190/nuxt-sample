import ExplanationCard from './ExplanationCard.vue';
export default {
    title: 'ExplanationCard',
    component: ExplanationCard,
    argTypes: {
        icon: {
            defaultValue: "mdi-run-fast",
            description: "説明カードのアイコン",
        },
        title: {
            defaultValue: "窓口よりも早くお求めいただけます",
            description: "説明カードのタイトル",
        },
        description: {
            defaultValue: "ご鑑賞希望日の3日前0時から上映直前20分前までインターネットで受け付け。",
            description: "説明カードの補足説明",
        },
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ExplanationCard },
    template: `
    <v-row>
      <v-col cols="8">
        <explanation-card v-bind="$props" />
      </v-col>
    </v-row>
    `
})
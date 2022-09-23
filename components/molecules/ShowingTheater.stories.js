import ShowingTheater from './ShowingTheater.vue';

export default {
    title: 'ShowingTheater',
    component: ShowingTheater,
    argTypes: {
        theaters: {
            defaultValue: [
                { name: "富谷", active: true },
                { name: "佐野", active: false },
                { name: "菖蒲", active: true },
                { name: "木場", active: true },
                { name: "二子玉川", active: false },
                { name: "グランベリーパーク", active: true },
                { name: "川崎", active: true },
                { name: "湘南", active: false },
                { name: "ムービル", active: true },
                { name: "名古屋", active: true },
                { name: "四日市", active: false },
                { name: "明和", active: true },
                { name: "大阪エキスポシティ", active: true },
                { name: "箕面", active: false },
                { name: "HAT神戸", active: true },
                { name: "広島", active: true },
                { name: "佐賀", active: true },
            ],
            description: "映画を上映している劇場リスト",
        },
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ShowingTheater },
    template: `
    <v-container>
      <v-row justify="left">
        <v-col cols="4">
          <showing-theater v-bind="$props" />
        </v-col>
      </v-row>
    </v-container>
    `
})
import PanelTitle from './PanelTitle.vue';

export default {
    title: 'PanelTitle',
    component: PanelTitle,
    argTypes: {
        to: {
            defaultValue: "/",
            description: "パネルを押した時の遷移先",
            control: {
                type: String,
            }
        },
        icon: {
            defaultValue: "mdi-video-vintage",
            description: "パネルのicon",
          },
        image_path: {
            defaultValue: "/movie_tokusatsu_kaiju.png",
            description: "パネルの画像URL",
        },
        title: {
            defaultValue: "上映中の作品",
            description: "パネルのタイトル",
        },
        etitle: {
            defaultValue: "NOW SHOWING",
            description: "パネルのタイトル - 英表示",
        },
        light_mode: {
            defaultValue: false,
            description: "ライトモードフラグ",
        },
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { PanelTitle },
    template: `
    <v-container>
      <v-row justify="left">
        <v-col cols="12">
          <panel-title v-bind="$props" />
        </v-col>
      </v-row>
    </v-container>
    `
})
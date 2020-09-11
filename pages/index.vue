<template>
  <v-app>
    <v-container>
      <v-card color="#5CBBF6">
        <v-toolbar>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>
            <img
              alt="ibm-logo"
              :src="require('assets/ibm_logo.svg').default"
              width="100%"
              style="float: left;"
            />
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <div v-if="startFlag">
            <v-card color="#1867C0"
              ><v-card-title class="white--text pl-6">
                <h1>IBM適職診断</h1>
              </v-card-title>
              <v-card-text class="white--text pl-6">
                <h3>自分を見つけよう！</h3>
              </v-card-text>
            </v-card>
            <br />
            <v-card
              ><v-card-title>
                本サービスでは多様なコースを展開している弊社でどの職種に適性があるかを知ることができます。
                <br />
                ご回答いただいたデータは個人の回答を特定されることは一切ありません。
                <br />
                従って、選考への影響も一切ございません。
              </v-card-title>
              <v-card-actions>
                <v-btn color="white" @click="start()">はじめる </v-btn>
              </v-card-actions>
            </v-card>
            <br />
          </div>
          <!-- <br /> -->
          <div v-if="submitFlag">
            <v-card>
              <v-card-text>
                <div>
                  <h1>職種診断</h1>
                  <v-radio-group
                    v-for="(item, i) in question"
                    :key="i"
                    v-model="item.answer"
                    column
                  >
                    <h3>Ｑ{{ i + 1 }}. {{ item.question }}</h3>
                    <v-radio label="はい" value="yes"></v-radio>
                    <v-radio label="どちらでもない" value="neither"></v-radio>
                    <v-radio label="いいえ" value="no"></v-radio>
                  </v-radio-group>
                </div>
                <!-- </v-card> -->
              </v-card-text>
              <v-card-actions>
                <v-btn color="white" @click="submit()">
                  診断
                </v-btn>
              </v-card-actions>
            </v-card>
            <br />
          </div>
          <div v-if="finishFlag">
            <v-card>
              <!-- <img
                alt="it-specialist"
                :src="require('assets/it_specialist.svg').default"
              /> -->
              <v-card-title>
                <div>
                  あなたに向いている職種 <b>１位 </b>は
                  <h2 style="padding: 10px;">【{{ first.jobName }}】</h2>
                  です！！
                  <br />
                  詳細は<a target="_blank" :href="first.url">こちら</a>
                </div>
                <!--{{ result }}-->
                <!-- あなたに向いている職種1位は・・ITスペシャリストです！！！・仕事内容軽く説明書く詳しくはこちら -->
              </v-card-title>
              <v-card-text> ほかにもこんな職種に向いています </v-card-text>
              <v-card-title>
                <!-- <p> -->
                <b>２位</b>【{{ second.jobName }}】 詳細は
                <a target="_blank" :href="second.url">こちら</a>
                <!-- </p> -->
              </v-card-title>
              <v-card-title>
                <!-- <br />
                <br /> -->
                <!-- <p> -->
                <b>３位</b>【{{ third.jobName }}】 詳細は
                <a target="_blank" :href="third.url">こちら</a>
                <!-- </p> -->
              </v-card-title>
              <v-card-actions>
                <v-btn color="white" @click="finish()">次へ</v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <br />
          <div v-if="lastFlag">
            <v-card>
              <!-- <img
                alt="thankyou"
                :src="require('assets/thankyou.svg').default"
                width="100%"
                style="float: left;"
              /> -->
              <v-card-title>
                <div>
                  ご利用頂き、ありがとうございました。<br />
                  以下からエントリーお待ちしております!<br />
                </div>
                <!-- <div>
                  <v-icon>mdi-star</v-icon>
                  <v-icon>mdi-star</v-icon>
                  <v-icon>mdi-star-half</v-icon>
                  <v-icon>mdi-star-outline</v-icon>
                  <v-icon>mdi-star-outline</v-icon>
                </div> -->
              </v-card-title>

              <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

              <!-- <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text> -->

              <v-card-actions>
                <a
                  target="_blank"
                  href="https://www.ibm.com/jp-ja/employment/campus.html"
                  ><v-btn color="orange" class="ma-4">
                    エントリー
                  </v-btn></a
                >
                <v-btn color="indigo lighten-4" class="ma-4" @click="tostart()">
                  再度職種診断する
                </v-btn>
                <!-- <v-btn> -->
                <!-- </v-btn> -->
              </v-card-actions>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- <div>
    <h1>Hello! Alphabeter</h1>
    <button>aaa</button>
    <br />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
      width="10%"
    />
  </div> -->
    </v-container>
  </v-app>
</template>

<script lang="ts">
// import { mapMutations } from 'vuex';
export default {
  components: {},
  data() {
    return {
      //       '営業',
      // 'コンサルタント',
      // 'デザイナー',
      // 'データサイエンティスト',
      // 'ITスペシャリスト',
      // 'プロジェクトマネージャー',
      // 'エンジニア',
      // 'コーポレートスタッフ',
      // '研究員',

      question: [
        {
          answer: 'neither',
          question: '絵画や音楽に触れることは好きですか？',
          evaluate_base: [10, 10, 40, 0, 20, 10, 0, 10, 0],
        },
        {
          answer: 'neither',
          question: '数字に強いタイプですか？',
          evaluate_base: [0, 20, 0, 30, 10, 20, 10, 0, 10],
        },
        {
          answer: 'neither',
          question: 'プログラミング経験はありますか？',
          evaluate_base: [0, 0, 10, 25, 20, 0, 30, 0, 15],
        },
        {
          answer: 'neither',
          question: 'チームワークを保って仕事したい？',
          evaluate_base: [20, 20, 0, 0, 10, 20, 10, 20, 0],
        },
        {
          answer: 'neither',
          question: '課題の本質をすぐに捉えられるタイプですか？',
          evaluate_base: [10, 30, 0, 20, 10, 5, 10, 0, 15],
        },
        {
          answer: 'neither',
          question: 'ユーザーの感動に繋がるサポートがしてみたい？',
          evaluate_base: [10, 20, 30, 0, 10, 0, 20, 0, 10],
        },
        {
          answer: 'neither',
          question: '人のためを思って提案することが好き？',
          evaluate_base: [10, 20, 0, 0, 10, 20, 0, 40, 0],
        },
        {
          answer: 'neither',
          question: '人と人をつなげる仕事が好き？',
          evaluate_base: [10, 20, 0, 0, 0, 30, 0, 40, 0],
        },
        {
          answer: 'neither',
          question: 'コミュニケーションの中で本音を引き出せるタイプ？',
          evaluate_base: [20, 20, 20, 0, 20, 0, 0, 20, 0],
        },
        {
          answer: 'neither',
          question: '自分で論理的に仮説を立てて実行することが好き？',
          evaluate_base: [10, 30, 0, 15, 15, 0, 10, 0, 20],
        },
        {
          answer: 'neither',
          question: '物事に柔軟に対応できるタイプですか？',
          evaluate_base: [10, 10, 30, 10, 20, 10, 0, 5, 5],
        },
        {
          answer: 'neither',
          question: '取捨選択は得意なほうですか？',
          evaluate_base: [20, 10, 0, 0, 5, 20, 10, 30, 5, 100],
        },
        {
          answer: 'neither',
          question: '一度気になったことは、理解できるまで調べるタイプですか？',
          evaluate_base: [0, 0, 10, 20, 20, 0, 20, 0, 30, 100],
        },
        {
          answer: 'neither',
          question: '専門性を活かして働きたいと考えていますか？',
          evaluate_base: [0, 5, 10, 0, 20, 5, 30, 0, 30, 100],
        },
        {
          answer: 'neither',
          question: 'どんな困難があっても決してあきらめないタイプですか？',
          evaluate_base: [10, 10, 10, 0, 10, 0, 30, 0, 30, 100],
        },
        {
          answer: 'neither',
          question: '計画をして行動するほうですか？',
          evaluate_base: [10, 5, 0, 0, 20, 30, 20, 5, 10, 100],
        },
        {
          answer: 'neither',
          question: '好奇心は強いほうですか？',
          evaluate_base: [0, 10, 30, 10, 20, 0, 10, 0, 20, 100],
        },
        {
          answer: 'neither',
          question: '人に説明することは得意な方ですか？',
          evaluate_base: [0, 20, 0, 40, 30, 0, 0, 10, 0, 100],
        },
      ],

      // question: [
      //   {
      //     question: '歩き回るのは好きですか?',
      //     evaluate_base: [20, 20, 0, 0, 10, 20, 0, 30, 0],
      //     answer: 'neither',
      //   },
      //   {
      //     question: '絵を書くのは好きですか?',
      //     evaluate_base: [20, 10, 40, 0, 10, 10, 0, 10, 0],
      //     answer: 'neither',
      //   },
      //   {
      //     question: '数学は好きですか?',
      //     evaluate_base: [0, 2, 2, 30, 10, 2, 12, 2, 40],
      //     answer: 'neither',
      //   },
      //   {
      //     question: 'プログラミング経験はありますか?',
      //     evaluate_base: [0, 0, 10, 30, 20, 0, 30, 0, 10],
      //     answer: 'neither',
      //   },
      //   {
      //     question: '外部の会社と関わりたいですか?',
      //     evaluate_base: [20, 20, 0, 0, 10, 20, 10, 20, 0],
      //     answer: 'neither',
      //   },
      // ],

      // 結果が格納される
      result: '',
      // 診断の1位
      first: { jobName: '', url: '' },
      // 診断の2位
      second: { jobName: '', url: '' },
      // 診断の3位
      third: { jobName: '', url: '' },
      // 各ボタンのフラグ
      startFlag: true,
      submitFlag: false,
      finishFlag: false,
      lastFlag: false,
    };
  },
  // computed: {
  //   question() {
  //     return this.$store.state.question;
  //   },
  // },
  methods: {
    start() {
      this.$data.startFlag = false;
      this.$data.submitFlag = true;
    },
    finish() {
      this.$data.finishFlag = false;
      this.$data.lastFlag = true;
    },
    submit() {
      // console.log(this.$data);
      const norm = (xList) => {
        const xMax = Math.max(...xList);
        const xMin = Math.min(...xList);
        const r = [];
        for (const x of xList) {
          let normed = (x - xMin) / (xMax - xMin);
          if (isNaN(normed)) {
            normed = 0;
          }
          r.push(normed);
        }
        return r;
      };

      const jobs = [
        '営業',
        'コンサルタント',
        'デザイナー',
        'データサイエンティスト',
        'ITスペシャリスト',
        'プロジェクトマネージャー',
        'エンジニア',
        'コーポレートスタッフ',
        '研究員',
      ];

      const jobsURL = [
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#sales',
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#consulting',
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#designer',
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#ds',
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#itspecialist',
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#projmgmt',
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#engineer',
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#corpstaff',
        'https://www.ibm.com/jp-ja/employment/campus/interviews.html#research',
      ];

      const jobsLength = Object.keys(jobs).length;

      const questions = this.$data.question;

      const allEvaluated = Array(jobsLength).fill(0);
      for (const v of questions) {
        // yes なら evaluate_base は そのまま
        // neither なら evaluate_base は all 0
        // no なら evaluate_base は 全て * -1
        let normEvaluateBase = Array(jobsLength).fill(0);
        if (v.answer === 'yes') {
          normEvaluateBase = norm(v.evaluate_base);
        } else if (v.answer === 'no') {
          normEvaluateBase = norm(v.evaluate_base);
          for (let i = 0; i < normEvaluateBase.length; i++) {
            normEvaluateBase[i] *= -1;
          }
          console.log(normEvaluateBase);
        } else {
          normEvaluateBase = Array(jobsLength).fill(0);
        }
        for (let i = 0; i < jobsLength; i++) {
          allEvaluated[i] += normEvaluateBase[i];
        }
      }

      console.log(jobs);

      let result = '';
      for (let i = 0; i < jobsLength; i++) {
        console.log(allEvaluated);
        const maxIndex = allEvaluated.indexOf(Math.max(...allEvaluated));
        console.log(maxIndex);
        if (i === 0) {
          this.$data.first = {
            jobName: String(jobs[maxIndex]),
            url: jobsURL[maxIndex],
          };
        } else if (i === 1) {
          this.$data.second = {
            jobName: String(jobs[maxIndex]),
            url: jobsURL[maxIndex],
          };
        } else if (i === 2) {
          this.$data.third = {
            jobName: String(jobs[maxIndex]),
            url: jobsURL[maxIndex],
          };
        }
        result += String(i + 1) + '. ' + String(jobs[maxIndex]) + '\n';
        // console.log(jobs);
        allEvaluated[maxIndex] = -100;
      }
      // console.log(allEvaluated);
      this.$data.result = result;
      console.log(result);
      this.$data.submitFlag = false;
      this.$data.finishFlag = true;
    },
    tostart() {
      this.$data.lastFlag = false;
      this.$data.startFlag = true;
    },
  },
};
// import { Component, Vue } from 'vue-property-decorator';
// import { Action } from 'vuex-class';

// const namespace: string = 'question';

// @Component({
//   components: {},
// })
// export default class Home extends Vue {
//   @Action('questionChange', { namespace }) questionChange: any;
//   constructor() {
//     super();
//     this.questionChange(2);
//   }

//   /**
//    * name
//    */
//   // aaa() {
//   //   console.log(999);
//   // }
//   methods: {
//     aaa() {
//       console.log(123)
//     }
//   }
// }
</script>

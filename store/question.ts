// const TAB_CHANGE = 'tab_change';
const QUESTION_CHANGE = 'question_change'

// export interface tabStateType {
//   tabNum: number;
// }

// const tabState: tabStateType = {
//   tabNum: -1
// };

const questionState = [
  {
    question: '座学が好きですか?',
    evaluate_base: [2, 0, 0, 0, 0, 0, 0, 0, 1000],
    answer: 0
  },
  {
    question: '文章を読むのが好きですか?',
    evaluate_base: [0, 0, 1, 0, 0, 3, 0, 0, 0],
    answer: 0
  },
  {
    question: '誰かと話すことは好きですか?',
    evaluate_base: [1, 0, 0, 0, 0, 0, 5, 0, 0],
    answer: 0
  },
];


export const state = () => questionState;

export const mutations = {
  [QUESTION_CHANGE](state, answerNum: number) {
    state.answerNum = answerNum;
    console.log('aaaaa')
  }
};

export const actions = {
  questionChange(action, answerNum: number) {
    console.log(123)
    console.log(answerNum)
    action.commit(QUESTION_CHANGE, answerNum);
  }
};

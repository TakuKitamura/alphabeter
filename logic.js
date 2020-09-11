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

const jobsLength = Object.keys(jobs).length;

const questions = [
  {
    question: '座学が好きですか?',
    evaluate_base: [2, 0, 0, 0, 0, 0, 0, 0, 1000],
  },
  {
    question: '文章を読むのが好きですか?',
    evaluate_base: [0, 0, 1, 0, 0, 3, 0, 0, 0],
  },
  {
    question: '誰かと話すことは好きですか?',
    evaluate_base: [1, 0, 0, 0, 0, 0, 5, 0, 0],
  },
];

const allEvaluated = Array(jobsLength).fill(0);
for (const v of questions) {
  // yes なら evaluate_base は そのまま
  // neither なら evaluate_base は all 0
  // no なら evaluate_base は 全て * -1
  const normEvaluateBase = norm(v.evaluate_base);
  for (let i = 0; i < jobsLength; i++) {
    allEvaluated[i] += normEvaluateBase[i];
  }
}

for (let i = 0; i < jobsLength; i++) {
  const maxIndex = allEvaluated.indexOf(Math.max(...allEvaluated));
  console.log(i + 1, jobs[maxIndex]);
  allEvaluated[maxIndex] = null;
}

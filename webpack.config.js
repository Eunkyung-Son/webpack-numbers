const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    // 사용자가 script 태그를 통해 사용할 수 있도록 엔트리 포인트를 webpackNumbers로 export.
    // library: "webpackNumbers",

    // CommonJS, AMD, Node,.js 환경에서도 사용할 수 있도록 설정
    globalObject: "this",
    library: {
      name: "webpackNumbers",
      type: "umd",
    },
  },
  // 이는 라이브러리가 사용자 환경에서 lodash/reduce라는 종속성을 사용할 수 있다고 예상한다는 것을 의미
  externals: {
    "lodash/reduce": {
      commonjs: "lodash/reduce",
      commonjs2: "lodash/reduce",
      amd: "lodash/reduce",
      root: "lodashReduce", // 전역 변수를 설정하여 사용
    },
  },
};

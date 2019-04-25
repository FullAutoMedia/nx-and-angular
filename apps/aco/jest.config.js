module.exports = {
  name: "aco",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/aco/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};

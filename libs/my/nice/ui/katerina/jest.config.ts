module.exports = {
  displayName: 'my-nice-ui-katerina',
  preset: '../../../../../jest.preset.ts',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../../coverage/libs/my/nice/ui/katerina',
};

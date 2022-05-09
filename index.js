module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      preset: 'conventionalcommits',
    },
    '@semantic-release/release-notes-generator',
    {
      preset: 'conventionalcommits',
    },
    '@semantic-release/github',
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message: `chore(release): \${nextRelease.gitTag} [skip ci]\n\n\${nextRelease.notes}`,
      },
    ],
  ],
};
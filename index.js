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
        {
            successComment: 'This ${issue.pull_request ? \'PR is included\' : \'issue has been resolved\'} in version ${nextRelease.version} :tada:',
            labels: false,
            releasedLabels: false
        },
        [
            "@semantic-release/changelog",
            {
                changelogFile: 'CHANGELOG.md',
                changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file.'
            }
        ],
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md'],
                message: 'chore(release): version ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'

            },
        ],
    ]
};
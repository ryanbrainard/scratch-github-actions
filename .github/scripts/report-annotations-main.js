// wrapper to run action locally with static context

const {Octokit} = require("@octokit/rest");
const script = require("./report-annotations");

const github = new Octokit({auth: process.env.GITHUB_TOKEN});

const context = {
  payload: {
    after: '2ffce3cb3b413095e924bbd94ad20135f1aad93d',
    base_ref: null,
    before: 'fc16deed5f53f56b2456319338763fcb2f2dcc88',
    commits: [[Object]],
    compare: 'https://github.com/ryanbrainard/scratch-github-actions/compare/fc16deed5f53...2ffce3cb3b41',
    created: false,
    deleted: false,
    forced: false,
    head_commit: {
      author: [Object],
      committer: [Object],
      distinct: true,
      id: '2ffce3cb3b413095e924bbd94ad20135f1aad93d',
      message: 'log context',
      timestamp: '2021-03-23T12:12:39+09:00',
      tree_id: 'fe3677c38ae0bace72456fa16161c39c4cfd2def',
      url: 'https://github.com/ryanbrainard/scratch-github-actions/commit/2ffce3cb3b413095e924bbd94ad20135f1aad93d'
    },
    pusher: {
      email: '966764+ryanbrainard@users.noreply.github.com',
      name: 'ryanbrainard'
    },
    ref: 'refs/heads/master',
    repository: {
      archive_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/{archive_format}{/ref}',
      archived: false,
      assignees_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/assignees{/user}',
      blobs_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/git/blobs{/sha}',
      branches_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/branches{/branch}',
      clone_url: 'https://github.com/ryanbrainard/scratch-github-actions.git',
      collaborators_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/collaborators{/collaborator}',
      comments_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/comments{/number}',
      commits_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/commits{/sha}',
      compare_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/compare/{base}...{head}',
      contents_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/contents/{+path}',
      contributors_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/contributors',
      created_at: 1616462539,
      default_branch: 'master',
      deployments_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/deployments',
      description: null,
      disabled: false,
      downloads_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/downloads',
      events_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/events',
      fork: false,
      forks: 0,
      forks_count: 0,
      forks_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/forks',
      full_name: 'ryanbrainard/scratch-github-actions',
      git_commits_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/git/commits{/sha}',
      git_refs_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/git/refs{/sha}',
      git_tags_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/git/tags{/sha}',
      git_url: 'git://github.com/ryanbrainard/scratch-github-actions.git',
      has_downloads: true,
      has_issues: true,
      has_pages: false,
      has_projects: true,
      has_wiki: true,
      homepage: null,
      hooks_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/hooks',
      html_url: 'https://github.com/ryanbrainard/scratch-github-actions',
      id: 350540978,
      issue_comment_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/issues/comments{/number}',
      issue_events_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/issues/events{/number}',
      issues_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/issues{/number}',
      keys_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/keys{/key_id}',
      labels_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/labels{/name}',
      language: 'JavaScript',
      languages_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/languages',
      license: null,
      master_branch: 'master',
      merges_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/merges',
      milestones_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/milestones{/number}',
      mirror_url: null,
      name: 'scratch-github-actions',
      node_id: 'MDEwOlJlcG9zaXRvcnkzNTA1NDA5Nzg=',
      notifications_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/notifications{?since,all,participating}',
      open_issues: 0,
      open_issues_count: 0,
      owner: {
        login: 'ryanbrainard',
      },
      private: true,
      pulls_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/pulls{/number}',
      pushed_at: 1616469165,
      releases_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/releases{/id}',
      size: 7,
      ssh_url: 'git@github.com:ryanbrainard/scratch-github-actions.git',
      stargazers: 0,
      stargazers_count: 0,
      stargazers_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/stargazers',
      statuses_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/statuses/{sha}',
      subscribers_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/subscribers',
      subscription_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/subscription',
      svn_url: 'https://github.com/ryanbrainard/scratch-github-actions',
      tags_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/tags',
      teams_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/teams',
      trees_url: 'https://api.github.com/repos/ryanbrainard/scratch-github-actions/git/trees{/sha}',
      updated_at: '2021-03-23T03:10:23Z',
      url: 'https://github.com/ryanbrainard/scratch-github-actions',
      watchers: 0,
      watchers_count: 0
    },
    sender: {
      avatar_url: 'https://avatars.githubusercontent.com/u/966764?v=4',
      events_url: 'https://api.github.com/users/ryanbrainard/events{/privacy}',
      followers_url: 'https://api.github.com/users/ryanbrainard/followers',
      following_url: 'https://api.github.com/users/ryanbrainard/following{/other_user}',
      gists_url: 'https://api.github.com/users/ryanbrainard/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/ryanbrainard',
      id: 966764,
      login: 'ryanbrainard',
      node_id: 'MDQ6VXNlcjk2Njc2NA==',
      organizations_url: 'https://api.github.com/users/ryanbrainard/orgs',
      received_events_url: 'https://api.github.com/users/ryanbrainard/received_events',
      repos_url: 'https://api.github.com/users/ryanbrainard/repos',
      site_admin: false,
      starred_url: 'https://api.github.com/users/ryanbrainard/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ryanbrainard/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/ryanbrainard'
    }
  },
  eventName: 'push',
  sha: '2ffce3cb3b413095e924bbd94ad20135f1aad93d',
  ref: 'refs/heads/master',
  workflow: 'ci',
  action: 'actionsgithub-script',
  actor: 'ryanbrainard',
  job: 'report-annotations',
  runNumber: 9,
  runId: 678250182
}

context.repo = function() {
  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
    return {owner, repo}
  }

  if (this.payload.repository) {
    return {
      owner: this.payload.repository.owner.login,
      repo: this.payload.repository.name
    }
  }

  throw new Error(
    "context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'"
  )
}

script({github, context})

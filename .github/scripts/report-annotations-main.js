// wrapper to run action locally

const {Octokit} = require("@octokit/rest");
const script = require("./report-annotations");

const github = new Octokit({auth: process.env.GITHUB_TOKEN});
const context = {}

script({github, context})

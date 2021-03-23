module.exports = ({github, context}) => {
  if (!context.payload.pull_request) {
    console.log("Only enabled for pull request events.")
    return
  }

  const owner = context.repo.owner
  const repo = context.repo.repo
  const run_id = context.runId
  const pull_request = context.payload.pull_request

  collectAnnotationWarnings().then(data => {
    console.log(data)
    commentOnPullRequest(formatAnnotations(data))
  })

  function collectAnnotationWarnings() {
    return github.actions.getWorkflowRun({
      owner,
      repo,
      run_id,
    }).then(({data: run}) => {
      return github.checks.listForSuite({
        owner,
        repo,
        check_suite_id: run.check_suite_id,
      }).then(({data: {check_runs}}) => {
        return Promise.all(
          check_runs
            .filter(check_run => check_run.output.annotations_count > 0)
            .filter(check_run => check_run.conclusion === 'success')
            .map(check_run => {
              return github.checks.listAnnotations({
                owner,
                repo,
                check_run_id: check_run.id
              }).then(({data: annotations}) => {
                return annotations.map(annotation => {
                  return {
                    run,
                    check_run,
                    annotation,
                  }
                })
              })
            })
        )
      }).then(ret => ret.flat())
    })
  }

  function formatAnnotations(data) {
    if (data.length === 0) {
      return
    }

    const run = data[0].run

    let out = "<h2>GitHub Actions Warnings</h2>"
    out += `<em>
              Below is a list of annotations from successful jobs in the latest <a href="${run.html_url}">GitHub Action run</a>. 
              They may incidate warnings or flapping tests that should be addressed.
            </em>`
    out += `<ul>`
    data.forEach(a => {
      out += `<li><strong>${a.check_run.output.title}:</strong> ${a.annotation.message}</li>`
    })
    out += `</ul>`
    return out
  }

  function commentOnPullRequest(body) {
    if (!body) {
      return
    }

    github.issues.createComment({
      owner,
      repo,
      issue_number: pull_request.number,
      body
    })
  }
}

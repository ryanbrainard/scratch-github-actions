module.exports = ({github, context}) => {
  const owner = context.repo().owner
  const repo = context.repo().repo
  const run_id = context.runId

  console.log('run_id', run_id)

  github.actions.getWorkflowRun({
    owner,
    repo,
    run_id,
  }).then(({data: run}) => {
    github.checks.listForSuite({
      owner,
      repo,
      check_suite_id: run.check_suite_id,
    }).then(({data: {check_runs}}) => {
      check_runs.forEach(check_run => {
        github.checks.listAnnotations({
          owner,
          repo,
          check_run_id: check_run.id
        }).then(({data: annotations}) => {
          annotations.forEach(annotation => {
            console.log(check_run.output.title, annotation.message)
          })
        })
      })
    })
  })
}

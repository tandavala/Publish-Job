'use strict'

const Job = use('App/Models/Job')

class JobController {
    async home({ view }) {
        /*
        // Creat job
        const job = new Job;
        job.title = 'My job title';
        job.link = 'http://google.com';
        job.description = 'My description';

        await job.save();
          */
        // fetch jobs
        const jobs = await Job.all();

        return view.render('index', { jobs: jobs.toJSON()});
    }
}

module.exports = JobController

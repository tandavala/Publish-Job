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
  async userIndex({ view, auth }){
    const jobs = await auth.user.jobs().fetch();
    return view.render('jobs', { jobs: jobs.toJSON() })
  }
  async create({ request, response, session, auth }){
    const job = request.all();

    const posted = await auth.user.jobs().create({
        title: job.title,
        link: job.link,
        description: job.description
    })
    session.flash({ message: 'O emprego foi publicado com sucesso' })
    return response.redirect('back')
    }
    async delete({ response, session, id }){
        const post = Job.find(id);
        post.destroy()
        session.flash({ message: 'Emprego eliminado' })
        return response.redirect('back')
    }
    async show({ view, response, session, id }){
        const post = Job.find(id);
        return view.render('job', { job: jobs.toJSON() })
    }
}

module.exports = JobController

'use strict'

class CreateJob {
  get rules () {
    return {
      'title' : 'required|unique:users',
      'link' : 'required',
      'description' : 'required'
    }
  }
  get messages() {
    return {
      'require' : 'Woah now, {{ field }} is required.',
    }
  }
  async fails(error){
    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateJob

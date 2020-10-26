'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async setredis() {
    const { ctx,app } = this;
    console.log(1)
    await app.redis.get('default').incr('count')
    ctx.body = 'ok';
  }

  async getredis() {
    const { ctx,app } = this;
    ctx.body =  await app.redis.get('default').get('count');
  }
}

module.exports = HomeController;

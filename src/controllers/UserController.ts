const knex = require('../database');
import { Request, Response, NextFunction } from 'express';

export = {
  async index(req:Request, res:Response, next:NextFunction){
    try {
      const users = await knex('users')
      .where('deleted_at', null);

      return res.json(users)
    } catch (error) {
      next(error)
    }
    
  },
  async create(req:Request, res:Response, next:NextFunction){
    try {
      const { username } = req.body;

      await knex('users').insert({
        username,
      })  

      res.status(201).send()
    } catch (error) {
      next(error);
    }
  },
  async update(req:Request, res:Response, next:NextFunction){
    try {
      const { username } = req.body;
      const { id } = req.params;

      await knex('users')
      .update({ username })
      .where({ id })
    

      return res.send()
    } catch (error) {
      next(error);
    }
  },
  async delete(req:Request, res:Response, next:NextFunction){
    try {
      const { id } = req.params;

      await knex('users')
      .where({ id })
      .update('deleted_at', new Date())

      return res.send();
    } catch (error) {
      
    }
  }
}
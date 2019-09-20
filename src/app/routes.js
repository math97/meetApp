import {Router} from 'express'

   const routes = new Router();

    routes.get('/',(req,res)=>{
        res.json({"test":"teste"})
    })

export default routes;


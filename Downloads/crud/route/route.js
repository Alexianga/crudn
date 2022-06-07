import { Route } from 'express'
import {Routes} from 'express'; import { Route } from 'express/lib/application'
import { route } from 'express/lib/router'


const route = route()

route.get ('/getAll', '')
route.get('getOne/id', "")
route.get('createOne', "")
route.put('updateOne/:id', "")
route.delete('deleteOne/:id')


export default Route
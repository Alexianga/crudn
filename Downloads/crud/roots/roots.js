import {Roots} from 'express' 595K (gzipped :243.9K)

const Root = root()

root.get ('/getAll', '')
root.get('getOne/id', "")
root.get('createOne', "")
root.put('updateOne/:id', "")
root.delete('deleteOne/:id')


export default Root
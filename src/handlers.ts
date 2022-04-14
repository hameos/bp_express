import { Request, Response } from 'express'
import dbclient from './db/__mocks__'

dbclient.init()

export const getItems = function (req: Request, res: Response) {
  console.log('get /Items')

  dbclient
    .list()
    .then((data: any) => {
      res.send({ data })
    })
    .catch((err: any) => {
      res.status(400).send({ message: err.message })
    })
}

export const createItem = function (req: Request, res: Response) {
  console.log('post /items', req.body)

  const data = req.body
  dbclient
    .insert({ title: data.title, content: data.content })
    .then((val: any) => {
      console.log('Insert valuee', val)
      const resdata = {
        id: val.id,
        title: val.title,
        content: val.content,
      }
      res.send({ data: resdata })
    })
    .catch((err: any) => {
      res.status(400).send({ message: err.message })
    })
}

export const getItemById = function (req: Request, res: Response) {
  console.log('get /items/:itemId', req.body)

  const id = req.params.itemId
  dbclient
    .list({ id })
    .then((data: any) => {
      res.send({ data })
    })
    .catch((err: any) => {
      res.status(400).send({ message: err.message })
    })
}

export const updateItem = function (req: Request, res: Response) {
  console.log('put /items/:itemId', req.body)

  const id = req.params.itemId
  const { title, content } = req.body
  const data = { id, title: '', content: '' }
  if (title) {
    data.title = title
  } else {
    return res.status(400).send({ message: 'field title required' })
  }

  if (content) {
    data.content = content
  } else {
    return res.status(400).send({ message: 'field content required' })
  }

  dbclient
    .update(data)
    .then((data: any) => {
      res.send({ data })
    })
    .catch((err: any) => {
      res.status(400).send({ message: err.message })
    })
}

export const patchItem = function (req: Request, res: Response) {
  console.log('patch /items/:itemId', req.body)

  const id = req.params.itemId
  const { title, content } = req.body
  const data: any = { id }
  if (title) data.title = title
  if (content) data.content = content

  dbclient
    .updatePartial(data)
    .then((data: any) => {
      res.send({ data })
    })
    .catch((err: any) => {
      res.status(400).send({ message: err.message })
    })
}

export const deleteItem = function (req: Request, res: Response) {
  console.log('delete /items/:itemId', req.body)

  const id = req.params.itemId

  dbclient
    .delete({ id })
    .then((data: any) => {
      res.send({ data })
    })
    .catch((err: any) => {
      res.status(400).send({ message: err.message })
    })
}

import { Request, Response, RequestHandler as Middleware } from 'express'

type Handler = (req: Request, res: Response) => any

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type Route = {
  method: Method
  path: string
  middleware: Middleware[]
  handler: Handler
}

export interface InputItem {
  id?: string
  title?: string
  content?: string
}

export interface Item {
  title: string
  content: string
}

export type ItemDb = Item & {
  id: string
}

export type ItemDbOpt = {
  id: string
  title?: string
  content?: string
} & (
  | {
      title: string
    }
  | {
      content: string
    }
)

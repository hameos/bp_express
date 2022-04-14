import { createItem, deleteItem, getItemById, getItems, patchItem, updateItem } from './handlers'
import { Route } from './declarations'

export const routes: Route[] = [
  {
    method: 'get',
    path: '/items',
    middleware: [],
    handler: getItems,
  },
  {
    method: 'post',
    path: '/items',
    middleware: [],
    handler: createItem,
  },
  {
    method: 'get',
    path: '/items/:itemId',
    middleware: [],
    handler: getItemById,
  },
  {
    method: 'put',
    path: '/items/:itemId',
    middleware: [],
    handler: updateItem,
  },
  {
    method: 'patch',
    path: '/items/:itemId',
    middleware: [],
    handler: patchItem,
  },
  {
    method: 'delete',
    path: '/items/:itemId',
    middleware: [],
    handler: deleteItem,
  },
]

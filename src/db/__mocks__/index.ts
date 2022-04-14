import { Item, ItemDb, ItemDbOpt } from '../../declarations'

const init = () => {
  console.log('Connected to db')
}

const list = async (data?: { id: string }): Promise<Item[]> => {
  return Promise.resolve([])
}

const insert = async (data: Item): Promise<ItemDb> => {
  return Promise.resolve({ title: '', content: '', id: '' })
}

const update = async (data: ItemDb): Promise<ItemDb> => {
  return Promise.resolve({ title: '', content: '', id: '' })
}

const patch = async (data: ItemDbOpt): Promise<ItemDbOpt> => {
  return Promise.resolve({ title: '', content: '', id: '' })
}

const remove = async (data: { id: string }): Promise<any> => {
  return Promise.resolve({ title: '', content: '', id: '' })
}

export default {
  init,
  list,
  insert,
  update,
  updatePartial: patch,
  delete: remove,
}

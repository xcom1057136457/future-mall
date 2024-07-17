import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.glob('../../mock/*.mock.ts', { eager: true })

const apiList: any[] = []

Object.values(modules).forEach((module: any) => {
  apiList.push(...module.default)
})

export function setupProdMockServer() {
  createProdMockServer([...apiList])
}

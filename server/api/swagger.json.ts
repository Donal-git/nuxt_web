import YAML from 'yamljs'
import { join } from 'path'
import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  const filePath = join(process.cwd(), 'public/swagger.yaml')
  return YAML.load(filePath)
})
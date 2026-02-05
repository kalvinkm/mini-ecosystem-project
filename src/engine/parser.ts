/* eslint-disable @typescript-eslint/no-explicit-any */
import rawPages from '../../config/pages.json'
import { blocks, type BlockType } from './blocks'
import type { PageConfig } from './types'

interface RawBlock {
  type: string
  props: any
}

interface RawPage {
  blocks: RawBlock[]
}

interface RawPages {
  [key: string]: RawPage
}

export function parsePages(): PageConfig {
  const pages = rawPages as RawPages
  const page = pages.home

  return {
    blocks: page.blocks.map((block) => {
      if (!isValidBlock(block.type)) {
        throw new Error(`Bloco inválido: ${block.type}`)
      }

      return {
        type: block.type,
        props: block.props,
      }
    }),
  }
}

function isValidBlock(type: string): type is BlockType {
  return type in blocks
}

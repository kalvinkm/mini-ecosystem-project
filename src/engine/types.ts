import type { BlockType } from './blocks'

export interface BlockConfig {
  type: BlockType
  props: Record<string, unknown>
}

export interface PageConfig {
  blocks: BlockConfig[]
}
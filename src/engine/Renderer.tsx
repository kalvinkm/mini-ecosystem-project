/* eslint-disable @typescript-eslint/no-explicit-any */
import { blocks } from "./blocks";
import type { PageConfig } from './types'

export function Renderer({ page }: { page: PageConfig }) {
  return (
    <>
      {page.blocks.map((block, index) => {
        const Component = blocks[block.type]

        if (!Component) {
          console.warn(`Bloco não encontrado: ${block.type}`)
          return null
        }

        return <Component key={index} {...(block.props as Record<string, any>)} />
      })}
    </>
  )
}
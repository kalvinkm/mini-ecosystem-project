/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from 'react'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'

export const blocks: Record<string, ComponentType<any>> = {
  header: Header,
  banner: Banner,
  footer: Footer,
} as const

export type BlockType = keyof typeof blocks

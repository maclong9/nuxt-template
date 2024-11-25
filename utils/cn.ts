import { twMerge } from 'tailwind-merge'
import { normalizeClass } from 'vue'

type ClassDictionary = Record<string, boolean | undefined | null>

type ClassArray = ClassValue[]
type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined

declare module 'vue' {
  function normalizeClass(...inputs: ClassValue[]): string
}

/**
 * Combine classes with conditional login
 *
 * Example usage:
 *
 * ```
 * <h1 :class="cn(
 *    'text-5xl font-bold',
 *    isHighlighted && 'text-neutral-700 rounded-md bg-yellow-300 px-2 py-1'
 *  )">
 *    Hello, world!
 *  </h1>
 * ```
 */
const cn = (...inputs: Parameters<typeof normalizeClass>) => twMerge(normalizeClass(inputs))

export default cn

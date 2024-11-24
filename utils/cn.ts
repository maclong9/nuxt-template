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
 * Combines class names with conditional logic.
 *
 * @param inputs - A variable number of arguments that will be passed to
 *   `normalizeClass`. These can be strings, arrays of strings, objects with
 *   boolean values, etc.
 * @returns A single string of class names, with duplicates removed and
 *    class names merged.
 */
const cn = (...inputs: Parameters<typeof normalizeClass>) => twMerge(normalizeClass(inputs))

export default cn

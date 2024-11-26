import { twMerge } from 'tailwind-merge'
import { normalizeClass } from 'vue'

/**
 * Combine classes with conditional logic
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
export default (...inputs: Parameters<typeof normalizeClass>) =>
  twMerge(normalizeClass(inputs))

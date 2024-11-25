import { createConsola } from 'consola'

/**
 * This instance provides logging utilities for various log levels such as info,
 * error, warn, success, etc., using the `consola` library.
 *
 * The function is globally available and does not need to be imported
 *
 * Example usage:
 *
 * ```
 * consola.info('This is an info message');
 * consola.error('This is an error message');
 * consola.success('This is a success message');
 * consola.warn('This is a warning message');
 * ```
 */
export default createConsola()

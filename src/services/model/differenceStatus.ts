/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * WarehouseManagement.Api
 * OpenAPI spec version: 1.0
 */

export type DifferenceStatus = (typeof DifferenceStatus)[keyof typeof DifferenceStatus]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DifferenceStatus = {
  Waiting: 'Waiting',
  Processing: 'Processing',
  Finished: 'Finished',
  NoDifferences: 'NoDifferences'
} as const
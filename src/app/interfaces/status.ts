export interface Status {
  value: string
  name: string
  deleted?: boolean
  undelete?: boolean
  pendingActivation?: boolean
}
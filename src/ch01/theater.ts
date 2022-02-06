export interface Invoice {
  customer: string
  performances: {
    playId: string
    audience: number
  }[]
}

export interface Play {
  [key: string]: {
    name: string
    type: string
  }
}

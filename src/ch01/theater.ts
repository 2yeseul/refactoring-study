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

export const PLAYS: Record<string, Play[keyof Play]> = {
  hamlet: {
    name: 'Hamlet',
    type: 'tragedy',
  },
  'as-like': {
    name: 'As You Like It',
    type: 'comedy',
  },
  othello: {
    name: 'Othello',
    type: 'tragedy',
  },
}

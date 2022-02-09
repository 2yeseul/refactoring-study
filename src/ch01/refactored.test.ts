import { statement } from './refactored'
import INVOICES from './invoice.json'

test('[ch01] statement test', () => {
  const expected =
    '청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n'

  const actual = statement(INVOICES[0])

  expect(expected).toEqual(actual)
})

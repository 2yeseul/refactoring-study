import { Invoice, Play, PLAYS } from './theater'

export function statement(invoice: Invoice, plays: Play) {
  let totalAmount = 0
  let volumeCredits = 0

  let result = `청구 내역 (고객명: ${invoice.customer})\n`
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

  for (const performance of invoice.performances) {
    const play = playFor(performance)

    // 한 번의 공연에 대한 요금 계산
    // 코드 조각을 별도 함수로 추출하여 분석한 코드에 대한 정보를 반영

    const thisAmount = amountFor(performance, play)

    volumeCredits += Math.max(performance.audience - 30, 0)
    if (play.type === 'comedy') {
      volumeCredits += Math.floor(performance.audience / 5)
    }

    result += ` ${play.name}: ${format.format(thisAmount / 100)} (${
      performance.audience
    }석)\n`
    totalAmount += thisAmount
  }
  result += `총액: ${format.format(totalAmount / 100)}\n`
  result += `적립 포인트: ${volumeCredits}\n`

  return result
}

// 1. 값이 바뀌지 않는 변수는 매개변수로 전달
// 2. play는 개별 공연에서 얻기 때문에 매개변수로 전달할 필요가 없다. 이러한 경우 임시 변수를 질의 함수로 변경한다.

function playFor(performance: { playId: string; audience: number }) {
  return PLAYS[performance.playId]
}
function amountFor(
  performance: { playId: string; audience: number },
  play: Play[keyof Play],
) {
  let result = 0

  switch (play.type) {
    case 'tragedy':
      result = 40000
      if (performance.audience > 30) {
        result += 1000 * (performance.audience - 30)
      }
      break
    case 'comedy':
      result = 30000
      if (performance.audience > 20) {
        result += 10000 + 500 * (performance.audience - 20)
      }
      result += 300 * performance.audience
      break
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`)
  }

  // 함수 내에서 바뀌는 변수 반환
  return result
}

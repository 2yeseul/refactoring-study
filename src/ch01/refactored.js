"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statement = void 0;
const theater_1 = require("./theater");
function statement(invoice) {
    let totalAmount = 0;
    let result = `청구 내역 (고객명: ${invoice.customer})\n`;
    for (const performance of invoice.performance) {
        result += ` ${playFor(performance).name}: ${usd(amountFor(performance))} (${performance.audience}석)\n`;
        totalAmount += amountFor(performance);
    }
    // volumeCredits 값 갱신과 관련한 문장들을 한 데 모아두면 임시 변수를 질의 함수로 바꾸기가 수월해진다.
    result += `총액: ${usd(totalAmount)}\n`;
    result += `적립 포인트: ${totalVolumeCredits(invoice.performance)}점\n`;
    return result;
}
exports.statement = statement;
function totalVolumeCredits(performances) {
    let volumeCredits = 0;
    for (const performance of performances) {
        volumeCredits += volumeCreditsFor(performance);
    }
    return volumeCredits;
}
function usd(totalAmount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(totalAmount / 100);
}
function volumeCreditsFor(performance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(performance.audience - 30, 0);
    if (playFor(performance).type === 'comedy') {
        volumeCredits += Math.floor(performance.audience / 5);
    }
    return volumeCredits;
}
// 1. 값이 바뀌지 않는 변수는 매개변수로 전달
// 2. play는 개별 공연에서 얻기 때문에 매개변수로 전달할 필요가 없다. 이러한 경우 임시 변수를 질의 함수로 변경한다.
function playFor(performance) {
    return theater_1.PLAYS[performance.playId];
}
function amountFor(performance) {
    let result = 0;
    const play = playFor(performance);
    switch (play.type) {
        case 'tragedy':
            result = 40000;
            if (performance.audience > 30) {
                result += 1000 * (performance.audience - 30);
            }
            break;
        case 'comedy':
            result = 30000;
            if (performance.audience > 20) {
                result += 10000 + 500 * (performance.audience - 20);
            }
            result += 300 * performance.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르: ${play.type}`);
    }
    // 함수 내에서 바뀌는 변수 반환
    return result;
}

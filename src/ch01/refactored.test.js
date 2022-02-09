"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const refactored_1 = require("./refactored");
const invoice_json_1 = __importDefault(require("./invoice.json"));
test('[ch01] statement test', () => {
    const expected = '청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n';
    const actual = (0, refactored_1.statement)(invoice_json_1.default[0]);
    expect(expected).toEqual(actual);
});

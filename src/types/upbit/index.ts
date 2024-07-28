export const TradeMap = {
  btc: "KRW-BTC",
  xrp: "KRW-XRP",
  sol: "KRW-SOL",
  eth: "KRW-ETH",
  doge: "KRW-DOGE",
} as const;

export type TTradeMapKey = keyof typeof TradeMap;
export type TTradeName = (typeof TradeMap)[TTradeMapKey];
export interface IUpbitPrice {
  market: TTradeName;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  unit: number;
}
// 사용자 정의 타입 가드
export const isTTradeMapKey = (key: string): key is TTradeMapKey => {
  return key in TradeMap;
};

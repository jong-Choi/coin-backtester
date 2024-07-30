import CandleChart from "@/components/candle-chart/CandleChart";
import {
  isTTradeMapKey,
  IUpbitPrice,
  TradeMap,
  TTradeMapKey,
} from "@/types/upbit";
import dayjs from "dayjs";
import React from "react";

/**
 * 업비트를 이용해 코인의 가격을 가져옵니다.
 *
 * @param time - dayjs 날짜 객체
 * @param count - 표시할 캔들의 수 (최대 200개)
 * @param unit - 단위 n분 봉 (기본값 30분 봉)
 * @param trade - 종목
 * @returns 'YYYY-MM-DD' 형식의 문자열
 */
async function getPrices(
  trade: TTradeMapKey = "btc",
  time?: dayjs.Dayjs,
  count: number = 100,
  unit: number = 30
): Promise<IUpbitPrice[]> {
  let uri = `https://api.upbit.com/v1/candles/minutes/${unit}?market=${TradeMap[trade]}&count=${count}`;

  if (time) {
    const ISOTime = time.toISOString();
    uri = uri + `&to=${ISOTime}`;
  }

  const res = await fetch(uri, { next: { revalidate: 60 } });
  const data = await res.json();
  console.log(uri);
  return data;
}

export default async function PriceList({
  params,
}: {
  params: { trade: string };
}) {
  const { trade } = params;
  if (!isTTradeMapKey(trade)) {
    return <div>유효하지 않은 종목명 : {trade}</div>;
  }

  const data = await getPrices(trade);

  return (
    <div>
      {JSON.stringify(data)}
      <CandleChart data={data} />
    </div>
  );
}

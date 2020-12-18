import React from "react";
import { useSelector } from "react-redux";
import Emoji from "./Emoji";

export default function MoneyTable() {
  const state = useSelector(state => state);

  const money = state.moneyReducer.money;
  return (
    <div className='info__money'>
      <div className='left'>
        <h1 className='left_tittle'>Купівля</h1>
        <div className='left__dollar'>
          <Emoji symbol='💲' />
          {money.buyDollar}
        </div>
        <div className='left__euro'>
          {" "}
          <Emoji symbol='💵' />
          {money.buyEu}
        </div>
      </div>
      <div className='right'>
        <h1 className='left_tittle'>Продаж</h1>
        <div className='left__dollar'>
          <Emoji symbol='💲' />
          {money.sellDollar}
        </div>
        <div className='left__euro'>
          <Emoji symbol='💵' />
          {money.sellEu}
        </div>
      </div>
    </div>
  );
}

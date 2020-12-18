import React from "react";
import { useSelector } from "react-redux";
import Emoji from "./Emoji";

export default function MoneyTable() {
  const state = useSelector(state => state);
  const covInfo = state.covidReducer.covidInfo;

  return (
    <div className='info__covid'>
      <h1 className='cov_title'>
        <Emoji symbol='😷' /> Covid-info
      </h1>
      <div className='part'>
        <div className='part_one'>
          <div className='words'>
            <div>Всего заболевших : {covInfo.totalSick}</div>
            <div>Всего умерших : {covInfo.totalDeath}</div>
          </div>
        </div>
        <div className='part_one'>
          <div className='words'>
            <div>
              Всего заболевших за последние 24 часа : {covInfo.totalSickLastDay}
            </div>
            <div>
              Всего умерших за последние 24 часа : {covInfo.totalDeadtLastDay}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

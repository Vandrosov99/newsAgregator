import React from "react";
import CovidTable from "./CovidTable";
import MoneyTable from "./MoneyTable";
import logo from "../img/logo.jpg";
export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <div className='info'>
        <CovidTable />

        <MoneyTable />
      </div>
    </div>
  );
}

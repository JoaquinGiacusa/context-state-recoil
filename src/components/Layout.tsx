import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <SearchForm></SearchForm>
      </header>
      <Outlet></Outlet>
      <footer>Footer</footer>
    </div>
  );
}

export { Layout };

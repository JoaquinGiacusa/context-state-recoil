import React from "react";
import { Link } from "react-router-dom";

type SearchResultItemProps = {
  picture: string;
  title: string;
  price;
  key;
  id?;
};

export function SearchResultItem(props: SearchResultItemProps) {
  return (
    <div className="search-result-item">
      <img src={props.picture} width={"120px"} height={"120px"} />
      <div className="search-result-item__data">
        <h2 className="search-result-item__title">{props.title}</h2>
        <h4>Precio: ${props.price}</h4>
        <Link to={"/item/" + props.id}>Ver mas</Link>
      </div>
    </div>
  );
}

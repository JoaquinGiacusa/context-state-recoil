import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { idState, resultsState, queryState } from "./atoms";

export function useId() {
  return useRecoilValue(idState);
}

// mi custom hook
export function useSearchResults() {
  const params = useParams();
  const query = params.query;

  const setQueryValue = useSetRecoilState(queryState);

  useEffect(() => {
    setQueryValue(query);
  }, [query]);

  const results = useRecoilValue(resultsState);

  return results;
}

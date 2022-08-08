import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { LoadWrapper } from "./styled";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

export function Loader({size}) {
  return (
    <LoadWrapper>
      <ClipLoader loading={true} cssOverride={override} size={size} />
    </LoadWrapper>
    );
}
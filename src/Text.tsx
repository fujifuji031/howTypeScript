import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};
//react v18からはFCでok(暗黙的にchildrenを含まないから)
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>てきすと</p>;
};

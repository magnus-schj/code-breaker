import React, { FC } from "react";
import { useAppSelector } from "../App/hooks";

interface Props {}

const Attempts: FC<Props> = () => {
  const code = useAppSelector((state) => state.code);
  return <div></div>;
};

export default Attempts;

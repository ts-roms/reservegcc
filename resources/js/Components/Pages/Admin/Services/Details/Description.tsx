import { FunctionComponent, ReactNode } from "react";

interface Description {
  title: string,
  service: string | ReactNode
}

const Description: FunctionComponent<Description> = ({
  title,
  service
}) => {
  return (
    <>
      <div className="">
        <h2>{title}</h2>
        <div className="">{service}</div>
      </div>
    </>
  );
}

export default Description;
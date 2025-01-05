import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  style?: string;
  id?: string;
};

const ComponentWrapper: React.FC<Props> = ({
  children,
  style,
  id = "",
}: Props) => {
  return (
    <section className={`w-full ${style}`} id={id}>
      <div className="w-full h-full max-w-[1440px] m-auto md:px-8 px-2">
        {children}
      </div>
    </section>
  );
};

export default ComponentWrapper;

import React from "react";

type Props = {
  children?: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => (
  <div style={{
    maxWidth: '100%',
  }}>
    {children}
  </div>
);

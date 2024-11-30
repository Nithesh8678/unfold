import { NextUIProvider } from "@nextui-org/react";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div></div>
      {children}
    </NextUIProvider>
  );
}

export default Provider;

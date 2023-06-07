import { createContext } from "react";

interface RenderContextProps {
  renderComponent: (component: any) => React.ReactNode;
}

export const RenderContext = createContext<RenderContextProps | null>(null);

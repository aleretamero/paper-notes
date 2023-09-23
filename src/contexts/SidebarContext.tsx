import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { useMedia } from '../hooks/useMedia';

interface ISidebarContext {
  statusSideBar: boolean;
  setStatusSideBar: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext({} as ISidebarContext);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const mobile = useMedia();
  const [statusSideBar, setStatusSideBar] = useState(!!mobile);

  useEffect(() => {
    if (mobile) setStatusSideBar(false);
    else setStatusSideBar(true);
  }, [mobile]);

  return (
    <SidebarContext.Provider value={{ statusSideBar, setStatusSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
};

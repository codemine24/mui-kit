"use client";
import React from "react";

interface IOnThisPageContext {
  sections: {
    id: string;
    title: string;
  }[];
  setSections: (sections: { id: string; title: string }[]) => void;
  isOnThisPage: boolean;
  setOnThisPage: (isOnThisPage: boolean) => void;
}

// context
const onThisPageContext = React.createContext<IOnThisPageContext | undefined>(
  undefined
);

// provider
export const OnThisPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [onThisPage, setOnThisPage] = React.useState<boolean>(false);
  const [sections, setSections] = React.useState<
    { id: string; title: string }[]
  >([]);

  const memoizedValue = React.useMemo(
    () => ({
      sections,
      setSections,
      isOnThisPage: onThisPage,
      setOnThisPage,
    }),
    [onThisPage, sections]
  );
  return (
    <onThisPageContext.Provider value={memoizedValue}>
      {children}
    </onThisPageContext.Provider>
  );
};

// hook
export const useOnThisPage = () => {
  const context = React.useContext(onThisPageContext);
  if (!context) {
    throw new Error("useOnThisPage must be used within an OnThisPageProvider");
  }
  return context;
};

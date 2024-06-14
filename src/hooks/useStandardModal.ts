// hooks/useStandardModal.ts
import { useContext } from "react";
import { StandardModalContext } from "../Contexts/Modals/StandardModalProvider";

const useStandardModal = () => {
  const context = useContext(StandardModalContext);
  if (context === undefined) {
    throw new Error(
      "useStandardModal must be used within a StandardModalProvider"
    );
  }
  return context;
};

export default useStandardModal;

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return <div className="alert alert-danger alert-dismissible d-flex align-items-center gap-2"><span className="material-symbols-outlined">
  task_alt
  </span>{children}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
  </div>;
};

export default Alert;

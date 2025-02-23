interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: any;
}

const Dialog = ({ isOpen, onClose, title, children }: DialogProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/75  flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-(--primary-bg) p-5 rounded-lg max-w-[500px] w-full shadow-lg  max-h-[600px] overflow-auto border border-(--secondary-color)"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            className="bg-transparent border-none text-xl cursor-pointer"
            onClick={onClose}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;

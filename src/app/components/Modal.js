import Image from "next/image";


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#f2f4f7] rounded-3xl overflow-hidden shadow-md max-w-[598px] w-full">
        <div className="flex justify-end pr-16 pt-16">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <Image src="/close-circle.svg" alt="Close" width={40} height={40} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

import { IoCloseOutline } from "react-icons/io5";

const PopUpBase = ({ title = "", children = null, onClick }) => {
  /**
   * @param title: optional title as a string
   * @param children: all subsequent tags
   * @param onClose: Button where you can close the pop up
   */

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50" onClick={onClick}>
      <div className="bg-white p-6 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
        {/* Base */}
        <div className="flex items-scretch justify-between mb-10">
          {title && <h2 className="text-xl font-bold">{title}</h2>}
          <button onClick={onClick}>
            <IoCloseOutline
              size={24}
              className="text-gray-500 hover:text-red-600 hover:scale-110 hover:rotate-90 transition duration-300 cursor-pointer"
            />
          </button>
        </div>
        {/* Children */}
        <div className="inline-flex flex-col justify-center items-center mb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopUpBase;

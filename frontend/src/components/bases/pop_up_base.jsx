import { IoCloseOutline } from "react-icons/io5";

const PopUpBase = ({ title = "", children = null, onClick }) => {
  /**
   * @param title: optional title as a string
   * @param children: all the content
   * @param onClick: Button where you can close the pop up
   */

  return (
    <div
      className="fixed inset-0 flex justify-center items-center"
      onClick={onClick}
    >
      <div
        className="max-w-2xl max-h-[90vh] overflow-auto bg-white border border-gray-200 p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="text-xl font-bold">{title}</h2>}
          <button onClick={onClick} name="">
            <IoCloseOutline
              size={24}
              className="text-gray-500 hover:text-red-600 hover:scale-110 hover:rotate-90 transition duration-300 cursor-pointer"
            />
          </button>
        </div>
        {/* Inhalt mit Scroll */}
        <div className="overflow-auto max-h-[70vh] p-2">{children}</div>
      </div>
    </div>
  );
};

export default PopUpBase;

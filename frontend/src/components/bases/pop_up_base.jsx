import { IoCloseOutline } from "react-icons/io5";



const PopUpBase = ({ title = "", children = null, onClick }) => {
  return (
    <div
      className="w-full fixed inset-0 flex justify-center items-center "
      onClick={onClick}
    >
      <div
        className=" max-w-3xl bg-white border border-gray-300 p-6 rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="text-xl font-bold">{title}</h2>}
          <button onClick={onClick}>
            <IoCloseOutline
              size={24}
              className="text-gray-500 hover:text-red-600 hover:scale-110 hover:rotate-90 transition duration-300 cursor-pointer"
            />
          </button>
        </div>

        {/* Popup-Inhalt */}
        <div className="overflow-auto max-h-[70vh] p-2">{children}</div>
      </div>
    </div>
  );
};

export default PopUpBase;


import { SetStateAction, useState } from "react";
import { Note } from "../App";
import { MdOutlineCancel } from "react-icons/md";

type PopupProps = {
  setShowPopup: (value: boolean) => void;
  notes: Note[];
  setNotes: (value: Note[]) => void;
};

export default function Popup({ setShowPopup, notes, setNotes }: PopupProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("green");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!content) return;
    const newNote = {
      title: title,
      content: content,
      date: new Date(),
      id: Math.random() * 100000,
      color,
    };
    localStorage.setItem("notes", JSON.stringify([newNote, ...notes]));
    setNotes([newNote, ...notes]);
    setShowPopup(false);
  }

  const handleColorChange = (e: { target: { id: SetStateAction<string> } }) => {
    setColor(e.target.id);
  };

  return (
    <div className="popup-container">
      <div className="popup flex justify-between p-6">
        <h2 className="text-2xl font-bold">New Note</h2>
        <button
          onClick={() => setShowPopup(false)}
          className="close-btn text-2xl"
        >
          <MdOutlineCancel />
        </button>
      </div>
        <form onSubmit={handleSubmit} className="flex flex-col p-6">
            <input
            type="text"
            placeholder="Title"
            className="bg-transparent border-b border-gray-200 outline-none p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            placeholder="Content"
            className="bg-transparent border-b border-gray-200 outline-none p-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
                <button
                id="green"
                onClick={handleColorChange}
                className="color-btn bg-green-500"
                ></button>
                <button
                id="red"
                onClick={handleColorChange}
                className="color-btn bg-red-500"
                ></button>
                <button
                id="blue"
                onClick={handleColorChange}
                className="color-btn bg-blue-500"
                ></button>
                <button
                id="yellow"
                onClick={handleColorChange}
                className="color-btn bg-yellow-500"
                ></button>
            </div>
            <div className="flex gap-3 w-full">
            <div className="rounded-full overflow-hidden w-[50px] h-[50px] mt-6">
            <input type="color" value={color} onChange={e => setColor(e.target.value)} className="border-none p-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 cursor-pointer"/>
            </div>
            <button
                type="submit"
                className="bg-transparent hover:bg-black hover:text-white w-1/2 self-center p-2 mt-6 border-solid border-2 rounded-full transition duration-500"
            >
                Add
            </button>
            </div>
            
            </div>
        </form>
    </div>
  );
}

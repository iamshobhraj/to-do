import { useState } from "react";
import { Note } from "../App";
import { MdOutlineCancel } from "react-icons/md";

type EditNoteProps = {
  setShowEdit: ({ show, id }: { show: boolean; id: number | null }) => void;
  showEdit: { show: boolean; id: number | null };
  notes: Note[];
  handleEdit: (id: number | null, content: string) => void;
};

export default function EditNote({
  setShowEdit,
  showEdit,
  notes,
  handleEdit,
}: EditNoteProps) {
  const note = notes.find((note) => note.id === showEdit.id);
  const [content, setContent] = useState(note?.content || "");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    handleEdit(showEdit.id, content);
    setShowEdit({
      show: false,
      id: null,
    });
  }

  return (
    <div className="popup-container">
      <div className="popup flex justify-between p-6">
        <h2 className="text-2xl font-bold">Edit Note</h2>
        <button
          onClick={() => setShowEdit({ show: false, id: null })}
          className="close-btn text-2xl"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-3">
        <textarea
          placeholder="Content"
          className="bg-transparent border-b border-gray-200 outline-none p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit" className="bg-transparent hover:bg-black hover:text-white w-1/2 self-center p-2 rounded-full transition duration-500">Save</button>
      </form>
    </div>
  );
}

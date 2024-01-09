import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Popup from "./components/Popup";
import EditNote from "./components/EditNote";

export interface Note {
  id: number;
  color: string;
  title: string;
  content: string;
  date: Date;
}

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showEdit, setShowEdit] = useState<{
    show: boolean;
    id: number | null;
  }>({
    show: false,
    id: null,
  });
  const [notes, setNotes] = useState<Note[]>([]); // Add type annotation for notes
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);

  function handleDelete(id: number) {
    const newNotes = notes.filter((note: { id: number }) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  }

  function handleEdit(id: number | null, content: string) {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, content: content } : { ...note }
    );
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  }

  useEffect(() => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      setNotes(JSON.parse(notes));
    }
  }, []);

  useEffect(() => {
    function getSearchResults() {
      if (searchInput === "") return notes;
      return notes.filter((note: { content: string }) =>
        note.content.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredNotes(getSearchResults());
  }, [notes, searchInput]);

  return (
    <>
      <div className="flex relative w-full h-full z-0 items-center justify-center">
        <div
          className={`absolute rounded-lg shadow-md h-2/3 md:w-1/4  container z-50 text-black bg-white ${
            showPopup || showEdit.show ? "visible" : "invisible"
          }`}
        >
          {showPopup && (
            <Popup
              notes={notes}
              setNotes={setNotes}
              setShowPopup={setShowPopup}
            />
          )}
          {showEdit.show && (
            <EditNote
              handleEdit={handleEdit}
              showEdit={showEdit}
              notes={notes}
              setShowEdit={setShowEdit}
            />
          )}
        </div>
        <div className="flex flex-row w-full h-full gap-2 divide-x-2 z-0">
          <NavBar setShowPopup={setShowPopup} showPopup={showPopup} />
          <div className="w-5/6 p-6">
            <SearchBar
              setSearchInput={setSearchInput}
              searchInput={searchInput}
            />
            <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
              {filteredNotes.length === 0 ? (
                <div>There isn't any note.</div>
              ) : (
                filteredNotes.map((note, index) => (
                  <Card
                    title={note.title}
                    id={note.id}
                    color={note.color}
                    setShowEdit={setShowEdit}
                    handleDelete={handleDelete}
                    key={index}
                    content={note.content}
                    date={note.date}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

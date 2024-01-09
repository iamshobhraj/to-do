import { AiFillEdit, AiFillDelete } from "react-icons/ai";

type CardProps = {
  title: string;
  content: string;
  date: Date;
  id: number;
  color: string;
  handleDelete: (id: number) => void;
  setShowEdit: ({ show, id }: { show: boolean; id: number }) => void;
};

export default function Card({
  title,
  content,
  date,
  id,
  color,
  handleDelete,
  setShowEdit,
}: CardProps) {
  return (
    <div
      className={`flex flex-col gap-6 max-w-md px-8 py-4 bg-white rounded-lg drop-shadow-md dark:bg-gray-800`}
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {new Date(date).toLocaleDateString()}
        </span>
        <div className="card-foot-btns flex gap-3">
          <button
            onClick={() =>
              setShowEdit({
                show: true,
                id: id,
              })
            }
            className="edit-btn text-xl hover:bg-gray-400 hover:mix-blend-multiply rounded-full p-2"
          >
            <AiFillEdit />
          </button>
          <button onClick={() => handleDelete(id)} className="edit-btn text-xl  hover:bg-gray-400 hover:mix-blend-multiply rounded-full p-2">
            <AiFillDelete />
          </button>
        </div>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex={0}
          role="link"
        >
          {title}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
}

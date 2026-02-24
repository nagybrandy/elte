import { BsMusicNoteBeamed as TrackIcon } from "react-icons/bs";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { FaTrash as TrashIcon } from "react-icons/fa";
import { FaEdit as EditIcon } from "react-icons/fa";

export function Track({ track, handleEdit, handleDelete }) {
  return (
    <div className="items-start my-auto border-0 join-item bg-base-300">
    <div className="flex p-3 w-[100%] hover:bg-base-100 rounded-lg items-center">
      <div className="w-4/12 font-bold text-left">
        <TrackIcon className="inline mr-2" />{track.artist}
      </div>
      <div className="w-9/12 text-left">
        {track.title}
      </div>
      <div className="flex justify-end w-2/12 text-right actions">
      <div className="w-12 h-12 px-1 mr-2 rounded-lg btn bg-neutral hover:bg-base-100" onClick={() => handleEdit(track.id)}>
          <EditIcon />
        </div>
        <div className="w-12 h-12 px-1 mr-2 bg-red-400 rounded-lg btn hover:bg-red-600" onClick={()=>handleDelete(track.id)}>
          <TrashIcon />
        </div>
      </div>
    </div>
  </div>
  );
}

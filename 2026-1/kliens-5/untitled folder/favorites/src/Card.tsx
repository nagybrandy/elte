import type { Song } from "./entities/song.entity"

const Card = ({ title, description, rating } : Song) => {
  const displayedRating = typeof rating == "number" ?  Array.from({length: rating}).map(() => "⭐").join("") : rating 
  return (
    <div className="p-6 border border-1 rounded-sm flex flex-col items-start justify-between">
        <h2 className="!mb-0">{ title }</h2>
        {description && <p className="text-left">{ description }</p>}
        <div className="w-full flex justify-end">
            {rating && <p className="w-fit 
                      text-right italic text-green-700 
                      border border-green rounded-full 
                      px-2.5 py-1">
                {displayedRating}
            </p>}
        </div>
    </div>
  )
}

export default Card
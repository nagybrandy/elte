import type { Track } from "../../../entities"

const TrackDetails = ({track} : {track : Track}) => {

  if(!track) return;
  
  return (
    <div className="px-3">
    <div className="h-full shadow-xl card md:card-side align-center bg-base-300">
        <figure><img src={track?.thumbnailURL} alt="Album Cover" className="object-cover w-64 h-64" /></figure>
        <div className="p-3 my-auto card-body">
            <div className="p-5 md:flex md:flex-wrap">
                <div className="w-full mx-auto md:w-8/12">
                    <h2 className="text-2xl font-bold card-title">{track.title}</h2>
                    <h2 className="text-xl font-thin card-title">{track.artist}</h2>
                    <div className="mt-2 mb-5 rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" defaultChecked />
                    </div>
                    <div className="p-2 card-actions">
                        <button className="w-full btn btn-primary md:w-1/6">Spotify</button>
                        <button className="w-full btn btn-primary md:w-1/6">Youtube</button>
                        <button className="w-full btn btn-secondary md:w-1/6">Lyrics</button>
                        <button className="w-full btn btn-secondary md:w-1/6">Chords</button>
                    </div>
                </div>
                <div className="w-full h-32 my-auto mt-5 card-actions md:w-4/12 md:justify-end">
                    <img src="/cover-without-text.png" alt="" className="h-full mt-2 contrast-50 drop-shadow brightness-25 opacity-60" />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default TrackDetails
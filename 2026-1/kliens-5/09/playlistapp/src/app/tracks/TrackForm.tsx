import { useState } from "react";
import { Button, Modal } from "react-daisyui";
import type { Track } from "../../entities";

interface FieldProps {
  size: string;
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange?: any;
}
const Field = ({ size, label, placeholder, name, value, onChange } : FieldProps) => {
  return (
    <div className={`md:${size} w-full p-2`}>
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input type="text" placeholder={placeholder} name={name} className="input input-bordered w-full max-w-xs" value={value} onChange={(e) => onChange(e)}/>
    </label>
  </div>
  );
};

 const defaultState = {
  id: -1,
  artist: "asdasd",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ tracks, setTracks , Dialog, handleShow } : {tracks: Track[], setTracks: any, Dialog?: any, handleShow? : any}) {
  const [form, setForm] = useState(defaultState)

  console.log(handleShow, Dialog)

  const onChange = (e : any) =>{

    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })
  }

  const onSave = ( )=> {
    const newId = tracks[tracks.length-1].id + 1
    setForm({
      ...form, 
      id: newId,
    })
    setTracks([...tracks, form])
  }

  console.log(form)
  return (
    <div className="font-sans">
      <div>
        <div className="font-bold text-lg">Add new track</div>
        <div className="py-4">Press ESC key or click outside to close</div>
        
        <div className="flex flex-wrap">
          <Field size="w-1/2" label="Artist" placeholder="Bon Jovi" name="artist" value={form.artist} onChange={onChange}/>
          <Field size="w-1/2" label="Title" placeholder="It's my life" name="title" value={form.title} onChange={onChange}/>
          <Field size="w-4/12" label="Length" placeholder="03:14" name="length" value={form.length} onChange={onChange}/>
          <Field size="w-8/12" label="ThumbnailURL" placeholder="It's my life" name="thumbnailURL" value={form.thumbnailURL} onChange={onChange}/>
          <Field size="w-6/12" label="ChordsURL" placeholder="It's my life" name="chordsURL" value={form.chordsURL} onChange={onChange}/>
          <Field size="w-6/12" label="LyricsURL" placeholder="It's my life" name="lyricsURL" value={form.lyricsURL} onChange={onChange}/>
          <Field size="w-5/12" label="SpotifyURL" placeholder="It's my life" name="spotifyURL" value={form.spotifyURL} onChange={onChange}/>

          <div className="w-5/12 p-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <div className="rating mt-2 mb-5">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent"  value="1" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent"  value="2" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-base-300"  value="3"/>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-base-300"  value="4"/>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-base-300"  value="5"/>
              </div>
            </label>
          </div>
          <div className="w-2/12 text-center align-bottom">
            <Modal.Actions>
              <form method="dialog" className="">
                <Button className="btn btn-primary mt-5 p-2 mr-2 flex flex-center w-20  font-bold" onClick={onSave}>
                  Save
                </Button>
              </form>
            </Modal.Actions>
          </div>
        </div>
      </div>
    </div>
  );
}

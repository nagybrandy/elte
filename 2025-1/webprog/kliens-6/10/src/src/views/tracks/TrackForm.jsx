import { useEffect, useState } from "react";
import { Button, Modal } from "react-daisyui";
import { useAddNewTrackMutation } from "../../store/playlistsApi";


const Field = ({ size, label, placeholder, name, value, setFormData, formData }) => {
  
  const handleInput = (e) => {
    console.log(e.target.name, e.target.value)
    console.log(formData)
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <div className={`md:${size} w-full p-2`}>
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input value={value} onInput={handleInput} type="text"  placeholder={placeholder} name={name} className="w-full max-w-xs input input-bordered" />
    </label>
  </div>
  );
};

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ Dialog, setOpen, open, handleSave, edit }) {
  const [formData, setFormData] = useState(edit || defaultState)
  
  useEffect(()=> {
    setFormData(edit || defaultState)
  }, [edit])
  
  return (
    <div className="font-sans">
      <Dialog open={open}>
        <Modal.Header className="text-lg font-bold">{edit ? `Edit track: ${edit.title}` : "Add new track"}</Modal.Header>
        <Modal.Body className="py-4">Press ESC key or click outside to close</Modal.Body>
        <span className="absolute border-0 cursor-pointer top-4 right-4" onClick={()=> setOpen(false)}>X</span>
        <div className="flex flex-wrap">
          <Field size="w-1/2" label="Artist" placeholder="Bon Jovi" name="artist" value={formData.artist} setFormData={setFormData} formData={formData} />
          <Field size="w-1/2" label="Title" placeholder="It's my life" name="title" value={formData.title} setFormData={setFormData}  formData={formData}/>
          <Field size="w-4/12" label="Length" placeholder="03:14" name="length" value={formData.length} setFormData={setFormData} formData={formData}/>
          <Field size="w-8/12" label="ThumbnailURL" placeholder="It's my life" name="thumbnailURL" value={formData.thumbnailURL}  setFormData={setFormData} formData={formData}/>
          <Field size="w-6/12" label="ChordsURL" placeholder="It's my life" name="chordsURL" value={formData.chordsURL}  setFormData={setFormData} formData={formData}/>
          <Field size="w-6/12" label="LyricsURL" placeholder="It's my life" name="lyricsURL" value={formData.lyricsURL} setFormData={setFormData}  formData={formData}/>
          <Field size="w-5/12" label="SpotifyURL" placeholder="It's my life" name="spotifyURL" value={formData.spotifyURL} setFormData={setFormData}  formData={formData}/>

          <div className="w-5/12 p-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <div className="mt-2 mb-5 rating">
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
                <Button className="flex w-20 p-2 mt-5 mr-2 font-bold btn btn-primary flex-center" onClick={() => handleSave(formData, edit)}>
                  Save
                </Button>
              </form>
            </Modal.Actions>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

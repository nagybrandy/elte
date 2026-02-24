
/* eslint-disable react/prop-types */
export function Track({ track, handleDelete, handleChange}) {

  return (
    <tr>
      <td>
        <i className="user icon"></i> {track.artist}
      </td>
      <td>
        <i className="music icon"></i> {track.title}
      </td>
      <td className="right aligned collapsing">
        <button className="ui icon button" onClick={() => handleChange(track)}>
          <i className="edit icon"></i>
        </button>
        <button className="ui icon button red" onClick={() => handleDelete(track)}>
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
}

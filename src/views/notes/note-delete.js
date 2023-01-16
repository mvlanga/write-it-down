import React from "react";
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {deleteNoteById} from "../../services/api-service";
import {createQueryParams} from "../../components/alert";

export default function NoteDelete() {
  const note = useLoaderData();
  const navigate = useNavigate();

  const delById = (id) => {
    deleteNoteById(id).then((res) => {
      console.log(res)

      navigate({
        pathname: '/notes',
        search: createQueryParams('success', `Notiz erfolgreich gelöscht.`)
      });
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
      <>
        <h1>Möchtest du die Notiz "{note.title}" wirklich löschen?</h1>
        <p>
          <button className="btn btn-primary" onClick={() => delById(note.id)}>Ja, Notiz löschen</button>
          <Link to={{pathname: "/notes", search: createQueryParams('warning', `Notiz wurde nicht gelöscht.`)}} className="btn btn-secondary">Nein, zurück zur Übersicht</Link>
        </p>
      </>
  )
}
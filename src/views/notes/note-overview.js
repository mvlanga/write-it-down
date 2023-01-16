import React from "react";
import {Link, useLoaderData} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as dayjs from 'dayjs'
import {Alert} from "../../components/alert";

export default function NoteOverview() {
  const loadedNotesApi = useLoaderData(),
      loadedNotes = [];

  loadedNotesApi.forEach((note) => {
    note.created_at = dayjs(note.created_at);
    note.updated_at = dayjs(note.updated_at);
    loadedNotes.push(note)
  });

  const loadedNotesSorted = loadedNotes.sort((a, b) => {
    return b.updated_at - a.updated_at;
  });

  return (
      <>
        <h1>Alle Notizen</h1>
        <Alert/>
        {
          (loadedNotesSorted && loadedNotesSorted.length > 0) ? (
              <div className="note-overview">
                {
                  loadedNotesSorted.map((currentNote, i) => (
                      <div key={currentNote.id}>
                        <div className="note-overview__item">
                          <Link to={`/notes/${currentNote.id}`} className="note-overview__item__link">
                            <h5>{currentNote.title}</h5>
                            <p>{currentNote.content}</p>
                            <small>
                              Erstellt: {currentNote.created_at.format('HH:mm:ss')},
                              Aktualisiert: {currentNote.created_at.format('HH:mm:ss')}
                            </small>
                          </Link>
                          <div className="note-overview__item__actions">
                            <Link to={`/notes/${currentNote.id}/edit`}>
                              <FontAwesomeIcon icon="fa-regular fa-edit"/>
                            </Link>
                            <Link to={`/notes/${currentNote.id}/delete`}>
                              <FontAwesomeIcon icon="fa-regular fa-trash-can"/>
                            </Link>

                          </div>
                        </div>
                        {(i + 1) === loadedNotesSorted.length ? '' : <hr/>}
                      </div>
                  ))
                }
              </div>
          ) : (<p>Keine Notizen gefunden, erstelle jetzt eine <Link to="/notes/new">neue Notiz</Link></p>)
        }
      </>
  )
}
import React from "react";
import {Link, useLoaderData} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NoteView() {
  const note = useLoaderData();
  
  return (
      <>
        <div className="note-view__header">
          <div className="note-view__header__title"><h1>{note.title}</h1></div>
          <div className="note-view__header__actions">
            <Link to={`/notes/${note.id}/edit`}>
              <FontAwesomeIcon icon="fa-regular fa-edit"/>
            </Link>
            <Link to={`/notes/${note.id}/delete`}>
              <FontAwesomeIcon icon="fa-regular fa-trash-can"/>
            </Link>
          </div>
        </div>
        <hr className="note-view__header__hr"/>

        <p className="note-view__content">{note.content}</p>
      </>
  )
}
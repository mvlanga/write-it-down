import React from "react";
import {insertNote} from "../../services/api-service";
import NoteForm from "../../components/note-form";
import {useNavigate} from "react-router-dom";
import {createQueryParams} from "../../components/alert";

export default function NoteNew() {
  const navigate = useNavigate();

  const handleSubmit = (form) => {
    insertNote({
      title: form.title,
      content: form.content
    }).then((res) => {
      console.log(res);

      navigate({
        pathname: '/notes',
        search: createQueryParams('success', `Notiz ${form.title} erfolgreich erstellt.`)
      });
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
      <>
        <h1>Neue Notiz</h1>
        <NoteForm submitMethod={(note) => handleSubmit(note)}/>
      </>
  )
}
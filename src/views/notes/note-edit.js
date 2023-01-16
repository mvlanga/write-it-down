import React from "react";
import {updateNote} from "../../services/api-service";
import NoteForm from "../../components/note-form";
import {useLoaderData, useNavigate} from "react-router-dom";
import {createQueryParams} from "../../components/alert";

export default function NoteEdit() {
  const note = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = (form) => {
    updateNote({
      id: note.id,
      title: form.title,
      content: form.content
    }).then((res) => {
      console.log('res:', res);
      
      navigate({
        pathname: '/notes',
        search: createQueryParams('success', `Notiz ${form.title} erfolgreich geändert.`)
      });
    }).catch((err) => {
      console.log('err: ', err)
    });
  }

  return (
      <>
        <h1>Notiz "{note.title}" bearbeiten</h1>
        <NoteForm
            title={note.title}
            content={note.content}
            submitMethod={(note) => handleSubmit(note)}/>
      </>
  )
}
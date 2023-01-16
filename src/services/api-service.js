const restEndpointUrl = "http://localhost:3001/api/notes"

export const getAllNotes = async () => {
  const res = await fetch(restEndpointUrl, {
    method: 'GET',
  });
  return res.json();
}

export const getNoteById = async (id) => {
  const res = await fetch(`${restEndpointUrl}/${id}`, {
    method: 'GET',
  });
  return res.json();
}

export const insertNote = async (note) => {
  const res = await fetch(`${restEndpointUrl}/insert/${note.title},${encodeURIComponent(note.content)}`, {
    method: 'POST',
  });
  return await res.json();
}

export const updateNote = async (note) => {
  const res = await fetch(`${restEndpointUrl}/update/${note.id},${note.title},${encodeURIComponent(note.content)}`, {
    method: 'PUT',
  });
  return res.json();
}

export const deleteNoteById = async (id) => {
  const res = await fetch(`${restEndpointUrl}/delete/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
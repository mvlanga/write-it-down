import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import NoteOverview from "./views/notes/note-overview";
import NoteNew from "./views/notes/note-new";
import {getAllNotes, getNoteById} from "./services/api-service";
import NoteView from "./views/notes/note-view";
import NoteEdit from "./views/notes/note-edit";
import NoteDelete from "./views/notes/note-delete";


import './styles/app.scss';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faEdit, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import NotFound from "./views/not-found";
import Error from "./views/error";

library.add(faEdit, faTrashCan);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/notes"/>
  },
  {
    path: "/notes",
    element: <RootLayout/>,
    children: [
      {
        path: "",
        element: <NoteOverview/>,
        loader: async () => {
          return await getAllNotes();
        },
        errorElement: <Error message="Notizen konnte nicht geladen werden"/>
      },
      {
        path: "new",
        element: <NoteNew/>,
      },
      {
        path: ":id",
        element: <NoteView/>,
        loader: async (e) => {
          return await getNoteById(e.params.id);
        },
        errorElement: <Error message="Notiz konnte nicht geladen werden"/>
      },
      {
        path: ":id/edit",
        element: <NoteEdit/>,
        loader: async (e) => {
          return await getNoteById(e.params.id);
        },
        errorElement: <Error message="Notiz konnte nicht geladen werden"/>
      },
      {
        path: ":id/delete",
        element: <NoteDelete/>,
        loader: async (e) => {
          return await getNoteById(e.params.id);
        },
        errorElement: <Error message="Notiz konnte nicht geladen werden"/>
      },
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);

export default function App() {
  return (
      <RouterProvider router={router}/>
  );
}
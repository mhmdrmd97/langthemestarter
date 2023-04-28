/* eslint-disable no-unused-vars */
import {

  RouterProvider,
} from "react-router-dom";
import Router from "./Router";
import { useAtomValue } from "jotai";
import { langRenderAtom } from "./atoms";

//Component
function App() {
  const langRenderer = useAtomValue(langRenderAtom)
  return (
    <div>
   
      <Router />
   

    </div> //jsx
  )
}

export default App


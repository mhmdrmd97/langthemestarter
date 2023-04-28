/* eslint-disable no-unused-vars */
import { useAtomValue } from "jotai"
import { Language } from "../../Language"
import { langRenderAtom } from "../../atoms"

function AboutPage() {
    
  return (
    <div>AboutPage {Language.selectedLanguage.dict["hi"]}
    </div>
  )
}

export default AboutPage
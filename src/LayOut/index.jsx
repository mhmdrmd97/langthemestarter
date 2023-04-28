/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import { Themes } from "../Theme"
import { layoutSubs } from "./Subs"
import { Language } from "../Language"
import { langRenderAtom } from "../atoms"
import { useAtom } from "jotai"
function Layout({children}) {

    const [_,render] = useState(false)
    const [l,langRender] = useAtom(langRenderAtom)

  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"start",alignItems:"start", }}>
       <div style={{display:"flex",backgroundColor:Themes.selectedTheme.theme.navBackgroundColor, width:"100vw",height:Themes.selectedTheme.theme.navHeight }} > <layoutSubs.NavBar /> </div>
        <div style={{display:"flex", }}>

    <div style={{display:"flex",backgroundColor:Themes.selectedTheme.theme.sideBackgroundColor,flexDirection:"column",alignItems:"center",justifyContent:"start" ,width:"20vw", height:Themes.selectedTheme.theme.sideBarHeight}}> <layoutSubs.SideBar /> </div> {
     <div style={{width:"80vw", height:Themes.selectedTheme.theme.contentHeight, display:"flex",justifyContent:"center", alignItems:"center"}}> {children}</div>
     }
    <div style={{display:"flex"}}>
        <button onClick={()=>{
            Themes.toggleTheme()
            render((r)=>!r) // اطهار
        }}>toggle theme</button>
        <button onClick={()=>{
            Language.toggleLanguage()
            langRender((lang)=>!lang) // اطهار
        }}>toggle Lang {Language.selectedLanguage.label}</button>

        </div>
       
        </div>
</div>
  )
}

export default Layout
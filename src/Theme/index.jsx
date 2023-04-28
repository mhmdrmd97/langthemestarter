/* eslint-disable no-unused-vars */



export class Theme1 {
static navHeight = "10vh";
static sideBarHeight = `calc( 100vh - ${this.navHeight} )`;
static contentHeight = `calc( 100vh - ${this.navHeight} )`;
static navBackgroundColor = "brown"
static sideBackgroundColor = "green"
}

export class Theme2 {
    static navHeight = "10vh";
    static sideBarHeight = `calc( 100vh - ${this.navHeight} )`;
    static contentHeight = `calc( 100vh - ${this.navHeight} )`;
    static navBackgroundColor = "green"
    static sideBackgroundColor = "brown"
}


export class Themes{
    static themes = [{id:1,theme:Theme1},{id:2,theme:Theme2},]
    static selectedTheme = this.themes[0]

   static toggleTheme(){
    this.selectedTheme =  this.selectedTheme.id===1? this.themes[1] : this.themes[0] 
   }
}
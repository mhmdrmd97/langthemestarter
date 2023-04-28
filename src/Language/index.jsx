

    
    export const DictionaryEn={
        hi : "hi"
    
    }
    
    export const DictionaryAr={
        hi : "اهلا"
    
    }

export class Language{
    static languages = [{code:"en",label:"عربي",dict:{...DictionaryEn}}, {code:"ar",label:"English",dict:{...DictionaryAr}},]
    static selectedLanguage = this.languages[0]


    static toggleLanguage(){
        this.selectedLanguage = this.selectedLanguage.code==this.languages[0].code? {...this.languages[1]} : {...this.languages[0]} 
    
    }


}

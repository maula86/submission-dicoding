import './component/wadah-component.js'
import './component/src-component.js'
import cariData from "./sumber-data.js";

const main = () => {
    const srcinput = document.querySelector('cari-bar')
    const srcbtn = document.querySelector('wadah-bar')

    const tombolClick = async() => {
        try{
            const result = await cariData.cariMakan(srcinput.value)
            tampilHasil(result)
        }
        catch(pesan){
            HasilError(pesan)
        }
    }

    const tampilHasil = result => {
        srcbtn.foods = result
    }

    const HasilError = pesan => {
        srcbtn.renderError(pesan)
    }

    srcinput.click = tombolClick
}

export default main;
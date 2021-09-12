class cariData {
    static cariMakan(ketik) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ketik}`)
        .then(dapat => {
            return dapat.json()
        })
        .then(dapatJson => {
            if (dapatJson.meals) {
                return Promise.resolve(dapatJson.meals)
            }
            else{
                return Promise.reject(`${ketik} Makanan Kosong`)
            }
        })
    }
}

export default cariData
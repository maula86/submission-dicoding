import './mini-component.js'

class LoopFood extends HTMLElement {

    set foods(foods){
        this._foods = foods
        this.render()
    }

    render(){
        this.innerHTML =
        `
            <div id="wadah" class="d-flex flex-wrap justify-content-center" style="width: 100%; background: #feeaab;">
            </div>  
        `
        // const arr = [1,9,2,4];
        // var arr1 = arr.map((data) => {
        // return data * 2;
        // });
        // console.log(arr1);
        let wadah = this.querySelector("#wadah")
        let loop = this._foods.map((food) => {
            const NewElement = document.createElement("mini-item")
            NewElement.food = food
            NewElement.classList.add("d-flex")
            wadah.appendChild(NewElement)
            this.appendChild(wadah)
        })
        console.log(loop)

        


    }

    renderError(pesan) {
        this.innerHTML =
       ` <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${pesan}</h2>`;
    }
}

customElements.define("wadah-bar", LoopFood)

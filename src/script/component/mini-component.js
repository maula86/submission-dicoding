import $ from "jquery"
class foodData extends HTMLElement {
    
    set food(food){
        this._food = food
        this.render()
    }
    

    render(){
        this.innerHTML =
        `      
        <style>
        .bg-glass {
          background: rgb(237 237 237 / 37%);
          box-shadow: inset -3px -15px 13px -4px rgb(215 215 215 / 75%);
          backdrop-filter: blur( 20.5px );
          -webkit-backdrop-filter: blur( 14.5px );
          border-radius: 10px;
          border: 1px solid rgb(255 255 255);
      }
        
        </style>
        <div class="bg-glass m-2">
        <div style="max-width: 540px;">
        <div class="row g-0 p-2">
          <div class="col-md">
              <img src="${this._food.strMealThumb}" class="img-fluid rounded-start" width="45%" alt="...">
            </div>
            <div class="col-md">
            <div class="card-body">
                <h5 class="card-title">${this._food.strMeal}</h5>
                  
                <button id="tombol${this._food.idMeal}"  class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Button with data-target
                </button>

                <p>${this._food.strInstructions}</p>
                <div class="collapse" id="collapseExample${this._food.idMeal}">
                <div class="card card-body">
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        `
        const tombol = this.querySelector("#tombol"+this._food.idMeal);
        const _event = this.querySelector("#collapseExample"+this._food.idMeal);
        $(this).ready(function() {
          $(tombol).click(() => {
            $(_event).collapse('toggle')
          })
      });
        
    }
}

customElements.define("mini-item", foodData)
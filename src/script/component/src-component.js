class SrcBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set click(e){
        this._click = e
        this.render()
    }

    get value(){
        return this.querySelector("#srcinput").value
    }

    render(){
        // .lokasi {
        //         position: absolute;
        //         top: 30%;
        //         width: 100%;
        //         text-align: center;
        //         font-size: 18px;
        //     }
        this.innerHTML=
        `
        <style>
            .form-control:focus {
                border-color: none;
                box-shadow: none;
            } 
            input-goup:focus{
              box-shadow: none;
            }
            .btn:focus {
              border-color: none;
              box-shadow: none;
            } 
            

        </style>

        <div class="row justify-content-center mx-3 lokasi">
            <div class="d-flex bg-white col-md-5 rounded-pill shadow">
            <div class="input-group row">
                <div class="col-8">
                <input id="srcinput" type="text" class="form-control border border-white" placeholder="Cari Menu" aria-label="Cari Menu" aria-describedby="button-addon2">
                </div>
                <div class="col-2">
                </div>
                <div class="col-1">
                <button id="btnsrc" class="btn btn-outline-white" type="submit"><i class="bi bi-search "></i></button>
                </div>
            </div>
            </div>
        </div>   
        `
        this.querySelector("#btnsrc").addEventListener("click", this._click)
    }
}

customElements.define("cari-bar", SrcBar);
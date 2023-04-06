const product = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}]

let cardTemplate = 
`
<div class="card shadow">
<img class="card-img-top img-fluid mx-auto p-3" style="max-width: 128px;" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Title">
<div class="card-body">
    <h5 class="card-title text-black-50">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
    </h5>
    <div class="row">
        <div class="accordion accordion-flush col px-1" id="accordionFlushExample">
          <div class="accordion-item px-1 m-0">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                Description
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                This is the first item's accordion body.
              </div>
            </div>
          </div>
          
        </div>
    </div>
    
</div>
<div class="card-footer border-info  d-flex justify-content-between fw-light align-items-center">
    <p> <i class="bi bi-star-fill"></i> 4.5</p>
    <p class="fw-bold"> <span class="badge bg-secondary">Price</span> $28</p>
</div>
<div class="row pb-2 px-2 align-items-center justify-content-center flex-column flex-sm-column flex-md-row h-100">
    <div class="col">
        <p class="fw-lighter my-2">Sold: 10</p>
    </div>
    
    <div class="col">
        <button type="button" class="btn btn-outline-primary">Add to Cart</button>
    </div>                                    
</div>
</div>`


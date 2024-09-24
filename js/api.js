

let products=[];

const productSection=document.getElementById("products");

const productCard=`<div class="product-card">
            <div class="product-title">
                <a href="">Xiaomi Pad 6</a>
            </div>
            <div class="product-discount-tag">
                 32% off
            </div>
            <div class="product-details">
                <div class="price">
                    <span>From</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path></svg>26,999</span>
                    <del><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path></svg>39,999</del>
                </div>
                <img src="https://i03.appmifile.com/61_item_in/24/08/2023/89bec9fe6f28937438b4646f395bf4cb.jpg?thumb=1&w=200&f=webp&q=85" alt="product image">
            </div>
        </div>`

let productList=``;


axios.get('https://dummyjson.com/products').then((res)=>{
    // Object.assign(products,res.data.products)
    res.data.products.map((item)=>{
        console.log(item);
        productList+=`<div class="product-card">
            <div class="product-title">
                <a href="">${item.title}</a>
            </div>
            <div class="product-discount-tag">
                 ${item.category}
            </div>
            <div class="product-details">
                <div class="price">
                    <span>From</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path></svg>26,999</span>
                    <del><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path></svg>39,999</del>
                </div>
                <img src=${item.images[0]}>
            </div>
        </div>`

    })
}).then(()=>{
    
    productSection.innerHTML=productList;
})






// const productPrepare=()=>{
//     products.map((item)=>{
//         console.log(item)
//     })
// }
// productPrepare()

// const productSection=document.getElementById("products");
// productSection.innerHTML=productList
const TIME_LABEL = "time-label"

const ApiCodes = Object.freeze({
    ADD_TO_CART: 'add-to-cart',
    CART_CHECKOUT: 'cart-checkout',
    PROCEED_TO_PAYMENT: 'proceed-to-payment',
    ORDER_CONFIRMATION: 'order-confirmation'
});

/** --------------------------- Entry Point ----------------------------------- */
function test(){
   loop1();
   loop2();

}
async function loop1(){
    new Promise((resolve)=> {
        for(let i = 0; i < 10; i++){
            setTimeout(() =>{
                console.log("1ST LOOP: ",i);
            }, 1000)
        }
    })

}
function loop2(){
    new Promise((resolve)=> {
        for(let j = 0; j < 10; j++){
            setTimeout(()=>{
                console.log("2ND LOOP: ",j)
            }, 1000)
        }
    })
    
}
async function api_chaining_via_async_await() {
    console.time(TIME_LABEL);
    console.log("Chain Execution Start via Async Await");
    let aTc = async () => await addToCart();
    let cC = async () => await cartCheckout();
    let pTp = async () => await proceedToPayment();
    let oC = async () => await orderStatus();

    console.log("Chain Execution End", await aTc(), await cC(), await pTp(), await oC());
    console.timeEnd(TIME_LABEL);

}
async function api_chaining_via_async_await2() {
    console.time(TIME_LABEL);
    console.log("Chain Execution Start via Async Await");
    let aTc = addToCart();
    let cC = cartCheckout();
    let pTp = proceedToPayment();
    let oC = orderStatus();

    let res1 = await aTc.catch(function (err){
        console.log("Inside Catch", err)
    })

    let res2 = await cC.catch(function (err){
        console.log("Inside Catch", err)
    })

    let res3 = await pTp.catch(function (err){
        console.log("Inside Catch", err)
    }) 
    
    let res4 = await oC.catch(function (err){
        console.log("Inside Catch", err)
    })
    
    console.log("Chain Execution End", res1, res2, res3, res4);

    console.timeEnd(TIME_LABEL);
}
async function api_chaining_via_promise_all() {
    console.time(TIME_LABEL);
    console.log("Chain Execution Start via Promise All");

    try {
    let [res1, res2, res3, res4] = await Promise.all([
        addToCart(),
        cartCheckout(),
        proceedToPayment(),
        orderStatus()
    ])
    console.log("Chain Execution End>>>", res1, res2, res3, res4);
} catch(erorr) {
    console.log(erorr);
}

console.timeEnd(TIME_LABEL);
}

   
async function api_chaining_via_async_await3(){
    console.time(TIME_LABEL);
    console.log("Chain Execution Start via Async Await");
    let aTc =  await addToCart(); 
    let cC =  await cartCheckout();
    let pTp = await proceedToPayment();
    let oC =  await orderStatus();

    console.log("Chain Execution End", aTc, cC, pTp, oC);
    console.timeEnd(TIME_LABEL);
}
function api_chaining_via_promise() {
    console.log("Chain Execution Start via Promise");

    addToCart()
        .then(op => {
            console.log(op)
            return cartCheckout()
        })
        .then(op => {
            console.log(op)
            return proceedToPayment();
        })
        .then(op => {
            console.log(op)
            return orderStatus();
        })
        .then(op => console.log(op));


    console.log("Chain Execution End");
}



function entryPoint() {
    console.time("Label1")
    console.log("Start")
    let api1 = addToCart();
    let api2 = cartCheckout();
    // await sleep(2000)
    // console.log(api1)
    console.log("End");
    console.timeEnd("Label1")

}
/** --------------------------- API CALLS ----------------------------------- */
function addToCart() {
    return fetch(true, ApiCodes.ADD_TO_CART);
}
function cartCheckout() {
    return fetch(true, ApiCodes.CART_CHECKOUT);
}
function proceedToPayment() {
    return fetch(false, ApiCodes.PROCEED_TO_PAYMENT);
}
function orderStatus() {
    return fetch(true, ApiCodes.ORDER_CONFIRMATION);
}

function sleep(ms) {
    console.log("Sleep Started")
    return new Promise(resolve => setTimeout(() => {
        console.log("Sleep Ended");
        resolve("Awake!")
    }, ms)
    );
}



/** --------------------------- Core Fetch ----------------------------------- */
function fetch(shouldSuccess, apiCodes, timeOut = 2000) {
    console.log("API:", apiCodes, "Started")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API:", apiCodes, "Completed")
            if (shouldSuccess) {
                resolve(responseFor(apiCodes));
            } else {
                reject("Error: " + errorFor(apiCodes))
            }
        }, timeOut);
    });

}
// entryPoint();


function responseFor(apiCodes) {
    switch (apiCodes) {
        case ApiCodes.ADD_TO_CART: return "Added To Cart Successfully";
        case ApiCodes.CART_CHECKOUT: return "Cart Items Loaded Successfully";
        case ApiCodes.PROCEED_TO_PAYMENT: return "Payment Initiated & Done";
        case ApiCodes.ORDER_CONFIRMATION: return "Order Confirmed";
    }
}

function errorFor(apiCodes) {
    switch (apiCodes) {
        case ApiCodes.ADD_TO_CART: return "Failed while Adding to Cart";
        case ApiCodes.CART_CHECKOUT: return "Not able to fetch Cart Items";
        case ApiCodes.PROCEED_TO_PAYMENT: return "Payment Cancelled";
        case ApiCodes.ORDER_CONFIRMATION: return "Order Not Placed";
    }
}

// api_chaining_via_async_await();
// api_chaining_via_promise_all();
// api_chaining_via_async_await();
// api_chaining_via_async_await2();
// api_chaining_via_async_await2()
test();
const cartIcon = document.querySelector("fas fa-cart-plus");
const ongle = document.getElementsByClassName("ongle");
const closeCart = document.getElementById("close-cart");
const BtnCart = document.getElementById('cart-icon')
 

//close carte
closeCart.addEventListener('click',function(){
  ongle[0].classList.remove('active')
})

//open carte
BtnCart.addEventListener('click',function(){
  ongle[0].classList.add('active')
})


//heart
  const heart=document.getElementsByClassName("fas fa-heart")
  console.log(heart)
  for (let i = 0; i < heart.length; i++) {
    heart[i].onclick=function(){
      if (!this.style.color){
        this.style.color="red"
        console.log(this.style.color)
      }else {
        this.style.color=""
      }
  }
  }
  
 
    //remove items from carts 
     const removecartButtons=document.getElementById("carte-remove")
     console.log(removecartButtons)
     removecartButtons.addEventListener("click",function(){
       console.log(this.parentNode)
      this.parentNode.parentNode.remove()
      document.getElementsByClassName("items")[0].innerHTML= trash.length+" items"
    })
         

 



//plus
const btnPlus = document.getElementsByClassName("plus")
const tab= []
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].onclick = function () {
        this.previousElementSibling.value++
        this.previousElementSibling.previousElementSibling.removeAttribute("disabled")
        console.log(Number(this.previousElementSibling.value))


        if (!Number(this.previousElementSibling.value)) {
            this.previousElementSibling.value = 1
        }

    }

}

//moins
const btnMoins = document.getElementsByClassName("moins")
console.log(btnMoins)
for (let i = 0; i < btnMoins.length; i++) {
    btnMoins[i].onclick = function () {
      this.nextElementSibling.value--
      if (this.nextElementSibling.value <= 1) {
        this.setAttribute("disabled", "disabled")
      }
      console.log(Number(this.nextElementSibling.value))
      if (!Number(this.nextElementSibling.value)){
        this.nextElementSibling.value=1
      }
    }
  }



  
  // add to cart
   const addcart = document.getElementsByClassName("fas fa-shopping-bag")
 
   for (let i = 0; i <addcart.length; i++) {
    addcart[i].onclick=function(){
    let shopProducts=addcart[i].parentNode
    const title=shopProducts.getElementsByClassName('product-title')[0].innerText;
    const price=shopProducts.getElementsByClassName('price')[0].innerText;
    const productImg=shopProducts.getElementsByClassName('product-img')[0].src;
    
    console.log(title, price,productImg);
    const CartShopBox = document.createElement("div");
    CartShopBox.classList.add("cart-box")
    const CartItems =document.getElementsByClassName("cart-content")[0]
    const CartItemsNames  =document.getElementsByClassName("cart-product-title")
    for (let i = 0; i <CartItemsNames.length; i++) {
      alert ("1,2,3")
      return;
  }
   }
   
  }


   

 

const list=[]

$(".adCrtBT").click(function(){
    const Ptitle=$(this).siblings(".card-title").text();
    const price=parseInt($(this).siblings("p").children("span").text());
    const imgs=$(this).parents(".card").children(".card-img-top").attr('src');
    var newProduct={Ptitle,price,imgs};
    
    

   
if(list.find((el=>el.Ptitle==newProduct.Ptitle)))
{
    alert("Product already added");
    
    return;
}
else{
    $(".crtITM").append(` <div class="crtPrd">
    <div class="row">
        <div class="col-lg-4">
            <div class="crtItem">
                <img src="${imgs}" class="crtImg">
            </div>
        </div>
        <div class="col-lg-8">
        <img src="/images/trash-bin.png" class="d-inline float-end" id="delete"   alt="">
            <h6 class="price mt-2">${Ptitle}</h6>
            
            <p>Rs.${price}</p>
            <p class="  d-inline mb-2" id="qtPrice"></p>
            <p class="mb-2 d-inline float-end mb-2 " for="qty">Quantity <input id="qty" type="number" value="1"></p>

        </div>
    </div>
</div>`);

totalAmount(price);
    list.push(newProduct);  
}

  });

 
  

  $(document).on("click","#delete",function(){
    
    const rmv=$(this).parents(".crtPrd");
    const ttl=$(rmv).find(".price").text();
    console.log(ttl);
    $(rmv).remove();

    // Find the index of the object with the matching value
    var index = list.findIndex(newProduct => newProduct.Ptitle === ttl);

    // Check if the index is found (-1 means no match)
    if (index !== -1) {
    // Delete the object from the array using the index
    list.splice(index, 1);
    }

    if(list.length==0)
    {
      const totalCo=document.getElementById('total');
      totalCo.innerHTML="Rs.0";
     
    }
  });
  function totalAmount(prices){
    let prc=prices;
    const cartItem=document.querySelectorAll('.crtPrd');
    const totalCost=document.querySelector('#total');

    let total=0;
    cartItem.forEach(product=>{
        
        
        let qty=Number(product.querySelector('#qty').value);
        console.log(qty)
        total+=(prc*qty);
        product.querySelector('#qtPrice').innerHTML="Rs."+prc*qty;
        console.log(prc);
    });
    totalCost.innerHTML="Rs."+total;
    console.log(total);
}


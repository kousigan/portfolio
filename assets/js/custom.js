var jData;
function getData(){
    $.getJSON('https://kousigan.github.io/portfolio/inkstellar.json', function(data) { 
        jData=data.cars;
        for(i=0;i<data.cars.length;i++){
            let galleryItem =`
<div class="col-md-6 col-lg-4 itemContainer">
    <div class="card border-0"><a href="#"><img class="card-img-top scale-on-hover" src="https://kousigan.github.io/portfolio/sample/${data.cars[i].image}" alt="Card Image" data-toggle="modal" data-target="#test" /></a>
        <div class="card-body">
            <h6><a href="#"> ${data.cars[i].name} </a></h6>
            <p class="text-muted card-text">${data.cars[i].content}</p>
        </div>
    </div>
</div>`;
            $('.gallery').append(galleryItem);
 
        }
          
    });
 }
    
 getData();     //
  

function resetData(){
    $.getJSON('https://kousigan.github.io/portfolio/inkstellar.json', function(data) {
        jData=data.cars;
    });
}

// 
     // $('.card-img-top').on('click',function(e){
         // e.preventDefault();
        // let carId=$(this).parent().parent().find('h6 a').html();
                // $('.inktitle').html(carId);
          // console.log(this)
        //      $.getJSON('https://kousigan.github.io/portfolio/inkstellar.json', function(data) {
        //       for(i=0;i<data.cars.length;i++){
        //         if (carId==data.cars[i].name){
        //               var titleText = data.cars[i].content;        
        //         }
        //     }
        //     $(".mypanel").html(titleText);
        // });
    // });
 var temp;
    $(document).on('click',function(e){
       
        
        if ($(e.target).is('.itemContainer img ')) {
             e.preventDefault();
            temp = $(e.target.parentNode.parentNode.parentNode).find('h6 a').html();
            $(".inktitle").html(temp);
            } 
         
        
              for(var i=0;i<jData.length;i++){
                  let t1 = temp.toString().trim();
                  let t2 = jData[i].name.toString().trim();
                  var t3 = t1.localeCompare(t2);
                      if(t3==0){
                      var titleText = jData[i].content;            
                    $(".mypanel").html(titleText);
                     break;
                }
            }
         
 })
 
var jData;
function getData(){
    $.getJSON('https://kousigan.github.io/portfolio/inkstellar.json', function(data) { 
        jData=data.projects;
        for(i=0;i<data.projects.length;i++){
            let galleryItem =`
            <div class="col-md-6 col-lg-4 itemContainer">
            <div class="card border-0">
            
            <div class="card-body">
            <h6><a href="#"> ${data.projects[i].name} </a></h6>
<a href="#">
                <img class="card-img-top scale-on-hover" src="https://kousigan.github.io/portfolio/assets/img/Thumbnails/${data.projects[i].image}" alt="${data.projects[i].image}" data-toggle="modal" data-target="#test" />
            </a>
        </div>
    </div>
</div>`;
//<p class="text-muted card-text">${data.projects[i].content}</p>

            $('.gallery').append(galleryItem);
 
        }
          
    });
 }
    
 getData();     //
  

function resetData(){
    $.getJSON('https://kousigan.github.io/portfolio/inkstellar.json', function(data) {
        jData=data.projects;
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
                  let t2Image = jData[i].image.toString().trim();
                  var t3 = t1.localeCompare(t2);
                      if(t3==0){
                      var titleText = jData[i].content;            
                        $(".mypanel").html(titleText);
                        $(".modal-image").attr("src", "https://kousigan.github.io/portfolio/assets/img/Thumbnails/"+t2Image);
                     break;
                }
            }
         
 })
 

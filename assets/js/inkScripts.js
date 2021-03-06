

$("[type=file]").on("change", function(){
  // Name of file and placeholder
    
  var file = this.files[0].name  ;
  var dflt = $(this).attr("placeholder");
     $(this).siblings('.fileList').text("");
  if($(this).val()!=""){
      for(var i=0;i<this.files.length;i++){
    $(this).siblings('.fileList').append("<small class='files'>"+ this.files[i].name+"</small>");
      }
      $(this).siblings('.fileList').append('<small style="color:#28a745;display:block">Total: '+ this.files.length+' file(s) attached successfully !</small>')
  } else {
    $(this).siblings('.fileList').text(dflt);
  }
});


// Loading JSON to portfolio
var jData;
function getData(){
    $.getJSON('https://kousigan.github.io/inkjs/inkstellar.json', function(data) { 
        jData=data.projects;
        for(i=0;i<data.projects.length;i++){
            let galleryItem =`
<div class="card ">
  <div class="card-body">
  <span class="preloader"></span>
    <img class="card-img-top scale-on-hover" src="${data.projects[i].image}" alt="${data.projects[i].name} " data-toggle="modal" data-target="#" />
           <h5 class="card-title">${data.projects[i].name}<a target="_blank" title="View on Behance"  href="${data.projects[i].link}"><i class="lni lni-arrow-top-right"></i></a></h5>
        </div>
</div>`;
            $('.gallery').append(galleryItem);
           
        }
        // ImageFunctions.imgLoader();
        imgLoader();
    });
 }
    
 getData(); 
 
// Bind to scroll
function onScroll(event){
  var sections = document.querySelectorAll('#navcol-1 a');
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  for( var i = 0; i < sections.length; i++ ){
    var currLink = sections[i]; 
    var val = currLink.getAttribute('href');
    var refElement = document.querySelector(val);
      if( refElement.offsetTop - 50 <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight - 50 > scrollPos)){
        document.querySelector('#navcol-1 ul li a').classList.remove('active');
        currLink.classList.add('active');
        $('aside ul li a').removeClass('active');
        $('aside ul li').removeClass('medium');
         $('aside ul li a[href="'+val+'"]').addClass('active');
         $('aside a.active').parent().prev().addClass('medium');
         $('aside a.active').parent().next().addClass('medium');

      }else{
         currLink.classList.remove('active');
         
       }
  }
  
  
                                                           
    
};

window.document.addEventListener('scroll', onScroll );

// Img loader
 var imgLoader = function(){
  
$('.card-img-top').each(function(){
 

	$(this).prev().hide();
console.log('loading success!!',this);


 });
};

 
// ImageFunctions = {
// 	imgLoader: function() {
		
  
//   $(".card-body").imagesStatus({

//     imgLoaded: function(img){
//         console.log(this.status );
//         console.log(img);
        
        
//     },

//     imgFailed: function(img){
//         console.log(this.status.failed);
//         console.log("-------failed---------------");
//         console.log(img);
//         console.log("-----------------------------");
//     },

//     allImgFinished: function(container){
//         console.log("all images loaded");
//         console.log(this.status.loaded + " images loaded, " + this.status.failed + " images failed!");
//     }

//   });
//   return;
// }
// }
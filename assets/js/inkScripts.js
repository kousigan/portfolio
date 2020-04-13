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
    <img class="card-img-top scale-on-hover" src="${data.projects[i].image}" alt="${data.projects[i].name} " data-toggle="modal" data-target="#test" />
           <h5 class="card-title">${data.projects[i].name}<a target="_blank" title="View on Behance"  href="${data.projects[i].link}"><i class="icon ion-android-open"></i></a></h5>
        </div>
</div>`;
            $('.gallery').append(galleryItem);
 
        }
          
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
      }else{
         currLink.classList.remove('active');
       }
  }
  
  
                                                           
    
};

window.document.addEventListener('scroll', onScroll );

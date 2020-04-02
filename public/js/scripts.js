$(document).ready(function(){
$("#devoured").on("click", function (event){
    var id = $(this).siblings(".burger_id").val();
    console.log(id)
})

})
$(document).ready(function(){
$(".devoured").on("click", function (event){
    var id = $(this).siblings(".burger_id").val();
    console.log(id)
    $.ajax("/api/burger/" + id, {
        type: "PUT"

    }).then(function(data){
        location.reload();
    })

})
$("#addBurger").on("click", function (event){
    var value = $("#burgerName").val();
    var data = {"name": value}
    $.ajax("/api/burger", {
        type: "POST",
        data: data
        
    }).then(function(data){
        location.reload();
    })
    
})
$("#reset").on("click", function (event){
    $.ajax("/api/burger/reset", {
        type: "PUT",        
    }).then(function(data){
        location.reload();
    })
    
})
})
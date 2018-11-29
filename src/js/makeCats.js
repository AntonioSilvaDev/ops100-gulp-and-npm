
function random() {
    return Math.floor((Math.random() * 20) + 1);
}

function showCat() {
    //add a cat to the page
}

document.getElementById("output").innerHTML = "This is just a test.  This is how you grab an element by ID and post text to the DOM using JS";
$(document).ready(function() {

    $('.btn').click(function(){
        $('#root').append('<img width="100px" src="assets/'+ random() + '.png " />');
    })
});
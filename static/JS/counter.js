countText = document.getElementById("counter").innerHTML

function updateOnKeyUp(){
    $.ajax({
        url: '/update_on_up_key_press',
        method: 'POST',
        success: function (data) {
            // Update the displayed number
            $('#counter').html(data.number);
            console.log(data.number)
        },
        error: function () {
            console.error('Error updating on key press');
        }
    });
}

function updateOnKeyDown(){
    $.ajax({
        url: '/update_on_down_key_press',
        method: 'POST',
        success: function (data) {
            // Update the displayed number
            $('#counter').html(data.number);
            console.log(data.number)
        },
        error: function () {
            console.error('Error updating on key press');
        }
    });
}


document.addEventListener('keyup', function(event) {
    isValid = false;
    isUp = false;
    var currentNum = parseInt(countText,10)     //10 for decimal numbers
    console.log(currentNum)
    // if (event.keyCode === 38) {
    if (event.keyCode === 32) {
        isValid = true;
        isUp = true;
        console.log("up")
        // currentNum++;
        // console.log(currentNum)
    }
    else if(event.keyCode === 40) {
        isValid = true;
        isUp = false;
        console.log("down")
        // currentNum--;
        // console.log(currentNum)
    }
    console.log(currentNum)
    console.log(isValid && isUp)
    // updateOnKeyUp();
    // countText = currentNum;
    if(isValid && isUp){
        console.log("HOI")
        updateOnKeyUp()}
    else if(isValid)
        updateOnKeyDown();
  });

//   document.getElementById('reset_button').addEventListener('click', function() {
    function resetNum(){
    // Reset the number to 0
    $.ajax({
        url: '/reset_number',
        method: 'POST',
        success: function (data) {
            // Update the displayed number
            $('#counter').html(data.number);
            console.log(data.number)
        },
        error: function () {
            console.error('Error resetting the number');
        }
    });}
// });
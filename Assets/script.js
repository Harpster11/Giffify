$( function(){
    console.log("Script Begins");
    // Testing to see if the script loads
    
})

let storyArray = [];
// Creating buttons for Gif application
function makeButton(storyArray,classToAdd,areaToAddTo){
//    Clearing the button queue
    console.log("makeButton Function");
    $(areaToAddTo).empty();
    // 
    for(var i=0;i<storyArray.length;i++){
        var a = $("<button class='btn btn-primary'>");
        a.addClass(classToAdd);
        a.attr('data-type',storyArray[i]);
        a.text(storyArray[i]);
        $(areaToAddTo).append(a);
    }
}
// Giphy API key tB53d1sS6UA2easeukdCDEQDO2HMpMJk
$(document).on('click','.gifButton',function(){
    var type = $(this).data('type');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' +type+ '&api_key=tB53d1sS6UA2easeukdCDEQDO2HMpMJk';
    console.log(queryURL);
    $.ajax({url:queryURL, method:'GET'})
    .done(function(response){
        console.log("Response: "+JSON.stringify(response));
        for(var i=0;i<2;i++){
        var searchDiv = $('<div class="search-item">');
        var animated = response.data[i].images.fixed_height.url;
        var still = response.data[i].images.fixed_height_still.url;
        var gifImage = $('<img>');
        gifImage.attr('src', still);
        gifImage.attr('data-still', still);
        gifImage.attr('data-animated', animated);
        gifImage.attr('data-state', 'still');
        gifImage.addClass('searchGif');
        searchDiv.append(gifImage);
        $('#storyBoard').append(searchDiv);
        }
    })
})

$(document).on('click', '.gifButton', function(){
    console.log("Animation Function");
    var state = $(this).attr('data-state');
    if(state == 'still'){
    
        $(this).attr('src',$(this).data("data-animated"));
        $(this).attr('data-state','animated');
        
    } else {
        $(this).attr('src',$(this).data("data-still"));
        $(this).attr('data-state', 'still');
    }
})

$('#searchGif').on('click',function(){
    var newSearch = $('#gifSearch').val().trim();
    storyArray.push(newSearch);
    makeButton(storyArray,'gifButton','#buttonsArea');
    return false;

})

$('#addText').on('click', function(){
    console.log("Adding Story");
    var newStory = $("#story").val().trim();
    var storyBox = $("<ul></ul>");
    storyBox.text(newStory);
    $("storyBoard").append(storyBox);
});

$('#addTitle').on('click', function(){
    console.log("Adding Title");
    var newTitle = $("#title").val().trim();
    var titleBox = $("<h2></h2>");
    titleBox.text(newTitle);
    $('#storyBoard').append(titleBox);
})

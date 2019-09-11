$( function(){
    console.log("Script Begins");
    // Testing to see if the script loads
    
})

let storyArray = ['Cats are Fat', 'Dogs are Dumb', 'Fish are Dead'];

function makeButton(storyArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for(var i=0;i<storyArray.length;i++){
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr('data-type', storyArray[i]);
        a.text(storyArray[i]);
        $(areaToAddTo).append(a);
    }
}
            // Giphy API key tB53d1sS6UA2easeukdCDEQDO2HMpMJk
$(document).on('click','#searchButton',function(){
    var type = $(this).data('type');
    var queryURL
})
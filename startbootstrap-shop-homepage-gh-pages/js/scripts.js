$(document).ready(function() {

    $('div.bigCard').hide();

});


$(document).ready(function() {
    // Add click event listener to the hide button
    $('#domBtn').click(function() {
        // Hide the element with id="elementToHide"

        $('#allCards').hide();
        $('#domDisp').show();
    });
});

$(document).ready(function() {
    // Add click event listener to the hide button
    $('#fifBtn').click(function() {
        // Hide the element with id="elementToHide"

        $('#allCards').hide();
        $('#fifDisp').show();
    });
});

$(document).ready(function() {
    // Add click event listener to the hide button
    $('#pulBtn').click(function() {
        // Hide the element with id="elementToHide"

        $('#allCards').hide();
        $('#pulDisp').show();
    });
});

$(document).ready(function() {
    // Add click event listener to the hide button
    $('#pulxBtn').click(function() {
        // Hide the element with id="elementToHide"

        $('#allCards').hide();
        $('#pulxDisp').show();
    });
});

$(document).ready(function() {
    // Add click event listener to the hide button
    $('#ultBtn').click(function() {
        // Hide the element with id="elementToHide"

        $('#allCards').hide();
        $('#ultDisp').show();
    });
});

$(document).ready(function() {
    // Add click event listener to the hide button
    $('a.showAll').click(function() {
        // Hide the element with id="elementToHide"

        $('#allCards').show();
        $('div.bigCard').hide();
    });
});
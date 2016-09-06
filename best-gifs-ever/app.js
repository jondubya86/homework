console.log('hello from app.js')

$('body').click(function() {
    console.log('jquery is working')
})

function appendRandom(link) {
    $('.gif').empty()
    var theLink = link.data.image_url
    $('.gif').append("<img src='" + theLink + "'border='3px' border-color='black'>")

}

$('#btn1').on('click', function(event) {
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
        success: appendRandom
    })
})


function appendTrend(link) {
    $('.gif').empty()
        // var theLink = link.data.image_url
    for (var i = 0; i < 5; i++) {
        $('.gif').append("<img src='https://media.giphy.com/media/" + link.data[i].id + "/giphy.gif' border='3px' border-color='black'> <br>")
    }
}

$('#btn2').on('click', function(event) {
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
        success: appendTrend
    })
})

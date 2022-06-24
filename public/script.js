$(document).ready(function(){
    $("#changeQuote").on("submit", function(event){
        event.preventDefault();
        let value = $("#value-name").val();

        $.ajax({
            url:"ajax",
            method: "GET",
            contentType: "application/json",
            data: JSON.stringify({quote: value}),
            success: function(res){
                    $("h1").html(`Quote: ${res.response}`);

            }

        });
        $.ajax({
            url:"http://127.0.0.1/books",
            method: "GET",
            contentType: "application/json",
            data: JSON.stringify({quote: value}),
            success: function(res){
                    $("#books").append(`
                    <h2>Infographics books</h2>
                    <p>Número de Books:${res.length} </p>
                  `);

            }

        });
        $.ajax({
            url:"http://127.0.0.1/characters",
            method: "GET",
            contentType: "application/json",
            data: JSON.stringify({quote: value}),
            success: function(res){
                    $("#characters").append(`
                    <h2>Infographics Characters</h2>
                    <p>Número de characters:${res.length} </p>
                 `);

            }

        });

        $.ajax({
            url:"http://127.0.0.1/houses",
            method: "GET",
            contentType: "application/json",
            data: JSON.stringify({quote: value}),
            success: function(res){
                    $("#houses").append(`
                    <h2>Infographics Houses</h2>
                    <p>Número de Houses:${res.length} </p>
                  `);

            }

        });


    });
    

});
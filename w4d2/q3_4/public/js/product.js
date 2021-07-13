$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (data) => {
        $("#cartSize").text(data.cart_size);
        console.log(data);
        $("#msg").text("Added to cart successfully");
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#addToCart").submit(() => {
        const data = {
            productName: $("#productName").val(),
            quantity: $("#quantity").val(),
            id: $("#id").val(),
            price: $("#price").val(),
        };

        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});
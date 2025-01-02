/**
 * Script to control clicking on cards within the browse page
 */

$(document).ready(function () {
    $(document).click(function (e) {
        //Go through element structure until we hit the
        //card that has been clicked on
        let el = $(e.target);
        while (!el.attr("class").split(/\s+/).includes("card")) {
            el = $(el).parent();
        }

        //ID will be the filename, just grab that and navigate there
        let id = $(el).prop("id");
        window.location.href = `./articles/${id}.html`;
    });
});

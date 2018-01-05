!function($){$.fn.images=function(){return this.each(function(){function e(){if(o.data("limit")){var e=o.data("limit"),i=o.find(".images-item.selected").length;o.find(".images-limit").html("("+i+"/"+e+")"),i>=e?o.addClass("limit-reached"):o.removeClass("limit-reached")}}function i(){o.find(".add").removeClass("over"),o.find(".images-item").removeClass("over")}function d(){o.find(".images-item.selected").length?o.find(".imagesgrid").addClass("filled"):o.find(".imagesgrid").removeClass("filled"),o.find(".images-dropdown").removeClass("open"),o.find(".images-add-button").removeClass("open"),o.find(".images-dropdown a").not(".disabled").length>0?(o.find(".images-dropdown .no-more-images").removeClass("da"),o.find(".filter-wrap").show(),o.find("span.add-all").show()):(o.find(".images-dropdown .no-more-images").addClass("da"),o.find(".filter-wrap").hide(),o.find("span.add-all").hide()),e()}function a(){o.find("input.images").val("").trigger("change"),o.find(".images-item.selected").length>1?(filenames=new Array,o.find(".images-item.selected").each(function(){filenames.push($(this).data("image"))}),filenames="- "+filenames.join("\n- "),o.find("input.images").val(filenames).trigger("change")):o.find("input.images").val(o.find(".images-item.selected").data("image")).trigger("change"),o.closest("form").trigger("keep")}function s(e){o.find(".images-item[data-image='"+e+"']").insertBefore(o.find(".add")).addClass("selected"),o.find(".images-dropdown a[data-filename='"+e+"']").addClass("disabled"),d(),a(),i()}function n(){o.find(".images-item").insertBefore(o.find(".add")).addClass("selected"),o.find(".images-dropdown a").addClass("disabled"),d(),a(),i()}function t(e){o.find(".images-item[data-image='"+e+"']").removeClass("selected"),o.find(".images-dropdown a[data-filename='"+e+"']").removeClass("disabled"),d(),i(),a()}var o=$(this),l="images";if(o.data("images"))return!0;o.data("images",!0),o.find("input.filter").on("input change",function(){filter=$(this).val(),o.find(".images-dropdown .no-images-found").removeClass("da"),""!=filter?($.expr[":"].Contains=function(e,i,d){return $(e).text().toUpperCase().indexOf(d[3].toUpperCase())>=0},o.find(".images-dropdown a").addClass("filtered"),o.find(".images-dropdown a .image:Contains('"+filter+"')").not("disabled").closest("a").removeClass("filtered"),0===o.find(".images-dropdown a").not(".filtered").length&&o.find(".images-dropdown .no-images-found").addClass("da")):o.find(".images-dropdown a").removeClass("filtered")}),o.find("input.filter").keydown(function(e){if(38==e.keyCode&&(o.find(".images-dropdown a.focused").length?o.find(".images-dropdown a.focused").removeClass("focused").prevAll("a").not(".filtered").not(".disabled").first().addClass("focused"):(o.find(".images-dropdown a").removeClass("focused"),o.find(".images-dropdown a").not(".filtered").not(".disabled").last().addClass("focused"))),40==e.keyCode&&(o.find(".images-dropdown a.focused").length?o.find(".images-dropdown a.focused").removeClass("focused").nextAll("a").not(".filtered").not(".disabled").first().addClass("focused"):(o.find(".images-dropdown a").removeClass("focused"),o.find(".images-dropdown a").not(".filtered").not(".disabled").first().addClass("focused"))),13==e.keyCode)return o.find(".images-dropdown a.focused").click(),o.find(".images-dropdown a").removeClass("focused"),!1}),e(),d(),o.find(".images-item .btn.remove").on("click",function(){if(!$(this).is(".ui-sortable-helper .btn")){t($(this).closest(".images-item").data("image"))}return!1}),o.find(".images-add-button").on("click",function(e){e.stopPropagation(),o.find(".images-dropdown").toggleClass("open"),o.find(".images-add-button").toggleClass("open"),o.find("input.filter").focus(),$(document).click(function(e){0===$(e.target).closest(".images-dropdown").length&&(o.find("input.filter").val(""),o.find("input.filter").trigger("change"),o.find("input.filter").blur(),o.find(".images-dropdown").removeClass("open"),o.find(".images-add-button").removeClass("open"))})}),o.find(".images-dropdown a").on("click",function(e){o.hasClass("limit-reached")||(o.find("input.filter").val(""),o.find("input.filter").trigger("change"),s($(this).find(".image").text()),o.find(".images-dropdown").removeClass("open"),o.find(".images-add-button").removeClass("open"))}),o.find(".images-dropdown .add-all").on("click",function(e){o.hasClass("limit-reached")||o.find(".images-item.selected").length+o.find(".images-dropdown a").not(".disabled").length>o.data("limit")||(o.find("input.filter").val(""),o.find("input.filter").trigger("change"),n(),o.find(".images-dropdown").removeClass("open"),o.find(".images-add-button").removeClass("open"))});var r=o.find(".imagesgrid"),f=r.find(".sortable"),m=r.find(".images-item"),g=r.data("api");f.find(".images-item").length>1&&f.sortable({tolerance:"pointer",revert:100,handle:"figure",items:".selected",update:function(){a()}}).disableSelection(),o.find(".field-content").droppable({tolerance:"pointer",hoverClass:"over",accept:function(e){return!!$(".sidebar").has(e).length||(!($(this).has(e).length||!e.hasClass("images-item"))||void 0)},drop:function(e,i){o.find(".add").removeClass("over"),o.find(".images-item").removeClass("over");var d=i.draggable.data("helper");o.hasClass("limit-reached")||(i.draggable.hasClass("images-item")&&(otherField=i.draggable.closest(".field-with-images"),otherField.find(".images-dropdown a[data-filename='"+d+"']").removeClass("disabled"),otherField.find(".selected").length<=2&&otherField.find(".imagesgrid").removeClass("filled"),i.draggable.removeClass("selected"),otherField.find("input.images").val(""),otherField.find(".images-item.selected").length>1?(filenames=new Array,otherField.find(".images-item.selected").each(function(){filenames.push($(this).data("image"))}),filenames="- "+filenames.join("\n- "),otherField.find("input.images").val(filenames)):otherField.find("input.images").val(otherField.find(".images-item.selected").data("image")),otherField.closest("form").trigger("keep")),s(d))},over:function(e,i){var d=o.find(".images-item[data-image='"+i.draggable.data("helper")+"']");if(o.hasClass("limit-reached"));else if(d.hasClass("selected"))d.addClass("over");else{var a=o.find(".images-item.selected figure");if(a.length)var s=a.height()-4;else{var n=o.find(".images-item").first();n.addClass("selected");var s=n.find("figure").height()-4;n.removeClass("selected")}o.find(".add .inner").height(s),o.find(".add").addClass("over")}o.find(".imagesgrid").addClass("filled")},out:function(e,a){i(),d()}})})}}(jQuery);
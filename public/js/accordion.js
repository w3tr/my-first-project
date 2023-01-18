jQuery(document).ready(function(){
    jQuery(".accordion-title").click(function(){
        jQuery(this).next(".accordion-text").slideToggle(500);
        jQuery(this).toggleClass("accordion-active");
        jQuery(this).find("i").toggleClass("fa-caret-down");
        jQuery(this).find("i").toggleClass("fa-caret-up");
    });
});
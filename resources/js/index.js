var accordion_list = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion_list.length; i++) {
    accordion_list[i].addEventListener("click", function() {

        /* Toggle between adding and removing the 'active' class,
         * to highlight the button that controls the panel
         */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active sidemenu items */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
jQuery(document).ready(function() {
    var eris_aboutpage = erisLiteWelcomeScreenCustomizerObject.aboutpage;
    var eris_nr_actions_required = erisLiteWelcomeScreenCustomizerObject.nr_actions_required;

    /* Number of required actions */
    if ((typeof eris_aboutpage !== 'undefined') && (typeof eris_nr_actions_required !== 'undefined') && (eris_nr_actions_required != '0')) {
        jQuery('#accordion-section-themes .accordion-section-title').append('<a href="' + eris_aboutpage + '"><span class="eris-actions-count">' + eris_nr_actions_required + '</span></a>');
    }

});

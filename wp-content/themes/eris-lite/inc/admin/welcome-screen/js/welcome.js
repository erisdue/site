jQuery(document).ready(function() {

	/* If there are required actions, add an icon with the number of required actions in the About eris page -> Actions required tab */
    var eris_nr_actions_required = erisLiteWelcomeScreenObject.nr_actions_required;

    if ( (typeof eris_nr_actions_required !== 'undefined') && (eris_nr_actions_required != '0') ) {
        jQuery('li.eris-w-red-tab a').append('<span class="eris-actions-count">' + eris_nr_actions_required + '</span>');
    }

    /* Dismiss required actions */
    jQuery(".eris-dismiss-required-action").click(function(){

        var id= jQuery(this).attr('id');
        console.log(id);
        jQuery.ajax({
            type       : "GET",
            data       : { action: 'eris_lite_dismiss_required_action',dismiss_id : id },
            dataType   : "html",
            url        : erisLiteWelcomeScreenObject.ajaxurl,
            beforeSend : function(data,settings){
				jQuery('.eris-tab-pane#actions_required h1').append('<div id="temp_load" style="text-align:center"><img src="' + erisLiteWelcomeScreenObject.template_directory + '/inc/admin/welcome-screen/img/ajax-loader.gif" /></div>');
            },
            success    : function(data){
				jQuery("#temp_load").remove(); /* Remove loading gif */
                jQuery('#'+ data).parent().remove(); /* Remove required action box */

                var eris_lite_actions_count = jQuery('.eris-actions-count').text(); /* Decrease or remove the counter for required actions */
                if( typeof eris_lite_actions_count !== 'undefined' ) {
                    if( eris_lite_actions_count == '1' ) {
                        jQuery('.eris-actions-count').remove();
                        jQuery('.eris-tab-pane#actions_required').append('<p>' + erisLiteWelcomeScreenObject.no_required_actions_text + '</p>');
                    }
                    else {
                        jQuery('.eris-actions-count').text(parseInt(eris_lite_actions_count) - 1);
                    }
                }
            },
            error     : function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }
        });
    });

	/* Tabs in welcome page */
	function eris_welcome_page_tabs(event) {
		jQuery(event).parent().addClass("active");
        jQuery(event).parent().siblings().removeClass("active");
        var tab = jQuery(event).attr("href");
        jQuery(".eris-tab-pane").not(tab).css("display", "none");
        jQuery(tab).fadeIn();
	}

	var eris_actions_anchor = location.hash;

	if( (typeof eris_actions_anchor !== 'undefined') && (eris_actions_anchor != '') ) {
		eris_welcome_page_tabs('a[href="'+ eris_actions_anchor +'"]');
	}

    jQuery(".eris-nav-tabs a").click(function(event) {
        event.preventDefault();
		eris_welcome_page_tabs(this);
    });

		/* Tab Content height matches admin menu height for scrolling purpouses */
	 $tab = jQuery('.eris-tab-content > div');
	 $admin_menu_height = jQuery('#adminmenu').height();
	 if( (typeof $tab !== 'undefined') && (typeof $admin_menu_height !== 'undefined') )
	 {
		 $newheight = $admin_menu_height - 180;
		 $tab.css('min-height',$newheight);
	 }

});

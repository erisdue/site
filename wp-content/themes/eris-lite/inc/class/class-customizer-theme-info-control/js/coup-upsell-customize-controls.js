( function( api ) {

    // Extends our custom "eris-theme-info" section.
    api.sectionConstructor['eris-theme-info'] = api.Section.extend( {

        // No events for this type of section.
        attachEvents: function () {},

        // Always make the section active.
        isContextuallyActive: function () {
            return true;
        }
    } );

    // Extends our custom "eris-upsell-frontpage-sections" section.
    api.sectionConstructor['eris-upsell-frontpage-sections'] = api.Section.extend( {

        // No events for this type of section.
        attachEvents: function () {},

        // Always make the section active.
        isContextuallyActive: function () {
            return true;
        }
    } );

} )( wp.customize );

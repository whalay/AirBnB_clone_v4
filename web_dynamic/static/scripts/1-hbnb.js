$(document).ready(function() {
    // Store the selected amenities
    var selectedAmenities = {};

    // Listen for changes on each input checkbox
    $('input[type="checkbox"]').change(function() {
        var amenityID = $(this).data('id');
        var amenityName = $(this).data('name');
        
	if ($(this).is(':checked')) {
	    // Checkbox is checked, add the amenity to selectedAmenities
            selectedAmenities[amenityID] = amenityName;
        } else {
            // Checkbox is unchecked, remove the amenity from selectedAmenities
            delete selectedAmenities[amenityID];
        }

	// Update the h4 tag inside the div Amenities
        var amenitiesList = Object.values(selectedAmenities).join(', '); 
	$('.amenities h4').text(amenitiesList);
    )};
)};

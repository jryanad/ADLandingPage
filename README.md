AD PPC Landing Page
===================

###Getting Started

I have included the _oneframework_ SASS framework that handles core elements like forms, buttons, typography, etc. 
You can change the _variables_ partial for the branding and template colors.

Just clone the repo and then _cd_ into the project directory and run _npm install_ and it will start
installing the grunt dependcies for the project. Then just run _grunt server_ and you're all set.

###How this works

Create a directory called "local" in the same _root_ as the "assets" directory for the site through FTP at the designated 
Site_ID (Example: 4798), then just upload this entire project to that directory with the exception of the node_modules
directory.

The landing page will not be visible on the staging site so you'll have to publish the site to see the end result of 
your work.

###Working Files

There are 2 included plugins for the animations used in the template, [_Animate.css_](https://github.com/daneden/animate.css) & [_Wow.js_](https://github.com/matthieua/WOW),
documentation on how to use either plugin can be found on both respective github pages.

###How to update the map 

Navigate to _js/vendor/custom.gmap.js_ to change up the center point point of the map, and to add additional locations and markers.

Line 8 & Line 64 specify the "center" of the map. If a practice has only one location, you would place the Lat & Long of
that location in both places, as well as the marker for the map. If the practice has more than 1 location, use best judgement 
as to where the center would be between all respective locations.

Line 24 is the HTML container ID in which the map will be placed. You may change this but not necessary.

Lines 31 to 52 is the entire block that specifies a locations' marker and info window content. To add additional locations, copy lines 31 to 52 and paste 
below the existing location. Line 36 specifies that locations' Lat & Long and must be updated for each location you add.

####Map Extras

The map is responsive and is set to remove _dragging_ capabilities on mobile devices < 480px. It also _re-centers_ as the
viewport changes.

The map is styled using a template from [SnazzyMaps](https://snazzymaps.com/) and is defined on line 10. You may change this out at any time, or if you're 
feeling creative, style your own map. just replace the _flatMap.js_ file with your own and add the name of your map theme
to line 10 of _custom.gmap.js_
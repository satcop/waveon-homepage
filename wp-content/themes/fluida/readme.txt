=============
Fluida WordPress Theme
Copyright 2015-17 Cryout Creations
https://www.cryoutcreations.eu/

Author: Cryout Creations
Requires at least: 4.2
Tested up to: 4.8.3
Stable tag: 1.3.5
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl.html
Donate link: https://www.cryoutcreations.eu/donate/

Fluida is a modern, crystal clear and squeaky clean theme. It shines bright with a fluid and responsive layout and carries under its hood a light and powerful framework. All the theme's graphics are created using HTML5, CSS3 and icon fonts so it's extremely fast to load.

It's also SEO ready, using microformats and Google readable Schema.org microdata. Fluida also provides over 100 customizer theme settings that enable you to take full control of your site. You can change everything starting with layout (content and up to 2 sidebars), site and sidebar widths, colors, (Google) fonts and font sizes for all the important elements of your blog, featured images, post information metas, post excerpts, comments and much more.

Fluida also features social menus with over 100 social network icons available in 4 locations, 3 menus, 6 widget areas, 8 page templates, all post formats, is translation ready, RTL and compatible with older browsers.


== License ==

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/copyleft/gpl.html


== Third Party Resources ==

Fluida WordPress Theme bundles the following third-party resources:

HTML5Shiv, Copyright Alexander Farkas (aFarkas)
Dual licensed under the terms of the GPL v2 and MIT licenses
Source: https://github.com/aFarkas/html5shiv/

FitVids, Copyright Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
Licensed under the terms of the WTFPLlicense
Source: http://fitvidsjs.com/

== Bundled Fonts ==

Elusive-Icons, Copyright Aristeides Stathopoulos
Licensed under the SIL Open Font License, Version 1.1
Source: http://shoestrap.org/downloads/elusive-icons-webfont/

Zocial CSS social buttons, Copyright Sam Collins
Licensed under the terms of the MIT license
Source: https://github.com/smcllns/css-social-buttons

Feather icons, Copyright Cole Bemis
Licensed under the terms of the MIT license
Source: http://colebemis.com/feather/

== Bundled Images ==

The following bundled images are released into the public domain under Creative Commons CC0:
https://unsplash.com/photos/YeH5EIRFCIs
https://pixabay.com/en/water-priroda-drops-rain-815271/
https://pixabay.com/en/jellyfish-under-water-sea-ocean-698521/
https://pixabay.com/en/waterfall-water-level-movement-335985/

The rest of the bundled images are created by Cryout Creations and released with the theme under GPLv3


== Changelog ==

= 1.3.5 =
* Fixed site title overlapping menu icon on mobile
* Fixed featured boxes not deactivating by setting the category to 'disabled'
* Fixed dropdown menu width issue in Chrome with very short menu items
* Renamed landing page icon blocks related options (with auto-migration of existing settings)
* Changed landing page icon blocks content source values behaviour to be consistent with other options *** this will require adjusting the option to restore the desired configuration after update
* Added CTA buttons feature on the static slider image area
* Added integrated styling for our Serious Slider plugin
* Adjusted landing page static slider image responsiveness to cover more usage scenarios
* Fixed static slider caption container being displayed when no static slider caption fields are used
* Renamed $fluids variables to be more generic
* Fixed editor styling option not controlling style.css enqueue
* Escaped variables in custom-styles.php, loop.php, meta.php and main.php
* Added auto-match for mailto: URL in social icons
* Improved masonry initiation to check if function is available
* Added workaround for horizontal scrollbar on mobile devices when large menus are used
* Fixed 'Category page with intro' page template pagination not working when set on static home page
* Fixed missing text areas numbers in theme options
* Fixed non-translatable strings in theme options
* Corrected custom footer text sample information
* Added cryout_before_content_hook, cryout_after_content_hook, cryout_empty_page_hook, cryout_absolute_top_hook, cryout_absolute_bottom_hook and cryout_singular_before_comments_hook
* Added landing page icon blocks, featured boxes and featured text areas background color options
* Unpplugged fluida_get_theme_options() and fluida_get_theme_structure() functions
* Updated to Cryout Framework 0.7.0
* Added filters: cryout_landingpage_indexquery on landing page posts query, cryout_breadcrumbs_excluded_templates in breadcrumbs
* Improved header video support and fixed header height on non-homepage sections
* Moved moved menu background colors from list items to anchors, rem mobile menu anchor color, improved menu items height
* Improved static slider image check
* Adjusted registered image sizes filters and crop settings; added new square image size for certain usage cases
* Moved older changelog entries to changelog.txt

= 1.3.4 =
* Default sidebar message is now only shown for users that have widget editing capabilities
* Adjusted dropdown menu z-index to improve appearance on multi-line menus; also moved background colors from list items to anchors
* Improved mobile menu appearance (submenus indentation, items color inherited from the main menu, removed submenu items bottom line)
* Fixed image vertical alignment in main menu
* Fixed headings font sizes in editor styling

= 1.3.3 =
* Added styling to disable Chrome's built-in blue border on focused form elements
* Added explicit support for WooCommerce 3.0 new product gallery
* Removed 'wp_calculate_image_srcset' filter support due to Jetpack_Photon::filter_srcset_array() issue

= 1.3.2 =
* Changed post titles in posts lists from 60 units smaller to 75%
* Improved srcset functionality by switching to viewpoint units for better responsiveness
* Improved srcset sizes for the landing page featured images
* Improved backwards compatibility for browsers that do not use srcsets
* Fixed srcset sizes for 1 column posts list layout
* Added 'fluida_featured_srcset' filter and support for 'wp_calculate_image_srcset' filter for disabling srcset functionality
* Fixed renaming .mobile class
* Changed default value for Featured Image Alignment from center/center to center/top
* Updated Cryout Framework to v0.6.5

= 1.3.1.1 =
* Changed H1 to H2 in the static slider
* Fixed post titles wrong size in the landing page posts list (since 1.3.1)
* Added site title always present in the source of the site (for SEO purposes)
* Fixed WordPress' "Display Site Title and Tagline" option not hiding tagline

= 1.3.1 =
* Added srcset support for featured images and two additional featured image sizes to improve responsiveness and cross-device compatibility
* Added colour option for the H1-H4 content headings
* Extended Featured Image Alignment option to apply to all featured image crop variants added by the new srcset feature
* Slightly adjusted headings font sizes generator function and added separate distinct styling for h5 and h6
* Increased page/post titles default value to 250% and made post titles in page list 60 units smaller
* Fixed responsive styling arranging footer widgets in two columns even when option was set to one column
* Added site title accent position option
* Fixed pages manual excerpts not working and added support for <!--nextpage--> tag in icon blocks
* Fixed search results showing meta information for pages
* Fixed floats in content not clearing properly
* Updated Cryout Framework to v0.6.4
* Updated translation files

= 1.3.0 =
* Improved landing page behaviour for the contained and wide theme layouts
* Added support for <!--more--> tag in landing page text area pages
* Fixed author pages displaying broken titles in certain cases
* Added landing page slider shortcode field to translatable fields in WPML / Polylang
* Made header video centered on wide layouts
* Removed wp_kses() filtering from landing page blocks/boxes/texts titles/contents
* Extended fitVids status option to add desktop/mobile separate control
* Improved content_width internal handling to take layouts into account (for better handling of embed media sizing)

Rest of the changelog in changelog.txt

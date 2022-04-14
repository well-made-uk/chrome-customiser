# chrome-customiser

Just a really simple Chrome extension that lets you load custom CSS and JS files in Chrome/Chromium browsers.

## Usage

You can go ahead and delete all the .css and .js files or use them as a template.

Enter ``manifest.json``; for each website you want to customise, create a new object in the array under ``content_scripts``. Change the URL to match and the path to the CSS/JS files.

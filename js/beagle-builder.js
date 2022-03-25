function embedBuilder() {
    $("body").append('<div class="beagle-builder"> <div id="beagle-html-widget" class="beagle-panel-row-full beagle-widget beagle-floating-widget"> <div class="close-modal-area"></div><div class="beagle-edit-view beagle-edit-modal"> <div class="beagle-panel-row"> <div class="beagle-panel-row-full-title"> HTML Content <div class="beagle-help-icon" message="HTML is the back bone of a webpage, edit this field with code if you want full control over the element."> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <textarea id="beagle-html-content-edit" rows="20" cols="140"></textarea> </div><div class="beagle-panel-row beagle-panel-row-after" style="display: block;"> <button id="beagle-update-html" class="beagle-button" style="background-color: #ffb237;">Update</button> <button id="beagle-dismiss-html" class="beagle-button">Dismiss</button> <div style="clear: both;"></div></div></div></div><div class="beagle-builder-top-bar"> <div class="beagle-logo"> <svg id="paw_logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.63 375.41"> <defs> <style>.cls-1{fill: #fff;}.cls-2{fill: #ffb237;}</style> </defs> <title>paw</title> <path class="cls-1" d="M379,187.3a47.36,47.36,0,0,1-94.71,0c0-26.15,43.14-68.84,69.29-68.84S379,161.15,379,187.3Z"/> <path class="cls-2" d="M100.39,187.3a47.36,47.36,0,0,1-94.71,0c0-26.15-1.61-68.84,24.53-68.84S100.39,161.15,100.39,187.3Z"/> <path class="cls-2" d="M299.27,92.59a47.36,47.36,0,0,1-94.71,0c0-26.15,21.19-87.38,47.35-87.38S299.27,66.44,299.27,92.59Z"/> <path class="cls-2" d="M309.63,278.84c12.7,52.34-40.88,93.49-119.8,92S58.34,327,72.18,276.14s67.39-92,119.7-92S296.93,226.56,309.63,278.84Z"/> <path class="cls-2" d="M179.31,92.59a47.36,47.36,0,0,1-94.71,0c0-26.15,21.18-87.38,47.34-87.38S179.31,66.44,179.31,92.59Z"/> </svg> </div><div class="beagle-menu-size-button-wrapper"> <div id="beagle-mobile-responsive" class="beagle-menu-size-button"> <svg class="beagle-menu-size-button-single" id="Mobile" data-name="Mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565.69 565.69"> <title>Mobile</title> <path style="fill: #fff;" class="cls-1" d="M390.53,3H175.15a41.05,41.05,0,0,0-41,41V522a41.05,41.05,0,0,0,41,41H390.53a41.05,41.05,0,0,0,41-41V44a41.05,41.05,0,0,0-41-41Zm31.19,519a31.19,31.19,0,0,1-31.19,31.19H175.15A31.19,31.19,0,0,1,144,522V44a31.19,31.19,0,0,1,31.19-31.19H216v3.92a16,16,0,0,0,16,16H333.64a16,16,0,0,0,16-16V12.85h40.88A31.19,31.19,0,0,1,421.72,44Z"/> </svg> </div><div id="beagle-laptop-responsive" class="beagle-menu-size-button"> <svg class="beagle-menu-size-button-single" id="Laptop" data-name="Laptop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565.69 565.69"> <title>Laptop</title> <g> <path class="cls-1" d="M94.91,92h372c11.53,0,20.91,7.49,20.91,16.7V322c0,9.21-9.38,16.7-20.91,16.7h-372C83.37,338.73,74,331.24,74,322V108.65C74,99.45,83.37,92,94.91,92Zm372,11.44h-372c-3.61,0-6.59,2.38-6.59,5.26V322c0,2.88,3,5.26,6.59,5.26h372c3.61,0,6.59-2.38,6.59-5.26V108.65c0-2.88-3-5.26-6.59-5.26Z"/> <path class="cls-1" d="M491.72,350.1l59.15,90.16c-3.36,9.35-7.23,17.64-17.74,20H30.08c-11-3-18.27-11.12-17.23-22.93L70,350.1H491.72ZM484,364.43H77.76L27.2,441.5a19.63,19.63,0,0,0,4.88,4.41H531.32a11.08,11.08,0,0,0,3.52-4L484,364.43Z"/> <path class="cls-1" d="M81.16,372.2H480.62l18,40.95H63.18Z"/> </g> </svg> </div></div><div class="beagle-menu-buttons"> <div class="beagle-menu-buttons-inner"> <button id="beagle-update-site-button" class="beagle-button">Update Site</button> <button id="beagle-preview-button" class="beagle-button" onClick="previewHTML()">Preview</button> <button id="beagle-language-button" class="beagle-button">Save Language</button> <button class="beagle-button" onClick="saveHTMLFile()">Download</button> </div></div></div><div class="beagle-builder-right-bar"> <div class="beagle-brand-name-wrapper"> <div class="beagle-brand-name-inner"> <h2>BEAGLE UI</h2> <h7>light-weighted web editor</h7> </div></div><div class="beagle-builder-right-bar-content"> <div class="beagle-component-gallery-panel"> <h3 class="beagle-panel-header">Components</h3> <div class="beagle-component-panel-body"></div></div><div class="beagle-component-panel"> <h3 class="beagle-panel-header">Elements</h3> <div class="beagle-component-panel-body"> <div class="beagle-component-item" value="div"> <div class="beagle-component-logo"> <svg viewBox="0 0 342 225.8"> <g> <path d="M308.6,8.5c13.7,0,24.9,11.2,24.9,24.9v158.9c0,13.7-11.2,24.9-24.9,24.9H33.4c-13.7,0-24.9-11.2-24.9-24.9V33.4 c0-13.7,11.2-24.9,24.9-24.9H308.6 M308.6,0H33.4C15,0,0,15,0,33.4v158.9c0,18.5,15,33.4,33.4,33.4h275.2c18.5,0,33.4-15,33.4-33.4 V33.4C342,15,327,0,308.6,0L308.6,0z"/> </g> </svg> </div><h3>Container</h3> </div><div class="beagle-component-item" value="p"> <div class="beagle-component-logo"> <svg viewBox="0 0 342 225.8"> <style type="text/css"> .st0{fill:none;stroke-width:8.5039;stroke-linecap:round;stroke-miterlimit:10;}</style> <g> <path d="M308.6,8.5c13.7,0,24.9,11.2,24.9,24.9v158.9c0,13.7-11.2,24.9-24.9,24.9H33.4c-13.7,0-24.9-11.2-24.9-24.9V33.4 c0-13.7,11.2-24.9,24.9-24.9H308.6 M308.6,0H33.4C15,0,0,15,0,33.4v158.9c0,18.5,15,33.4,33.4,33.4h275.2c18.5,0,33.4-15,33.4-33.4 V33.4C342,15,327,0,308.6,0L308.6,0z"/> </g> <g> <line class="st0" x1="75" y1="49.5" x2="266" y2="49.5"/> </g> <g> <line class="st0" x1="75.4" y1="113.5" x2="228.8" y2="113.5"/> </g> <g> <line class="st0" x1="75.4" y1="177.5" x2="170.5" y2="177.5"/> </g> </svg> </div><h3>Paragraph</h3> </div><div class="beagle-component-item" value="h1"> <div class="beagle-component-logo"> <svg viewBox="0 0 342 225.8"> <style type="text/css"> .st0{fill:none;stroke-width:8.5039;stroke-linecap:round;stroke-miterlimit:10;}.st1{fill-rule:evenodd;clip-rule:evenodd;}</style> <defs> </defs> <g> <path d="M308.6,8.5c13.7,0,24.9,11.2,24.9,24.9v158.9c0,13.7-11.2,24.9-24.9,24.9H33.4c-13.7,0-24.9-11.2-24.9-24.9V33.4 c0-13.7,11.2-24.9,24.9-24.9H308.6 M308.6,0H33.4C15,0,0,15,0,33.4v158.9c0,18.5,15,33.4,33.4,33.4h275.2c18.5,0,33.4-15,33.4-33.4 V33.4C342,15,327,0,308.6,0L308.6,0z"/> </g> <g> <line class="st0" x1="75.4" y1="134.5" x2="228.8" y2="134.5"/> </g> <g> <line class="st0" x1="75.4" y1="177.5" x2="170.5" y2="177.5"/> </g> <path class="st1" d="M272.1,89H70.9C62.1,89,55,81.9,55,73.1v-7.3C55,57.1,62.1,50,70.9,50h201.3c8.8,0,15.9,7.1,15.9,15.9v7.3 C288,81.9,280.9,89,272.1,89z"/> </svg> </div><h3>Header</h3> </div><div class="beagle-component-item" value="img"> <div class="beagle-component-logo"> <svg viewBox="0 0 342 226"> <defs> </defs> <g> <path d="M308.6,8.5c13.7,0,24.9,11.2,24.9,24.9v158.9c0,13.7-11.2,24.9-24.9,24.9H33.4c-13.7,0-24.9-11.2-24.9-24.9V33.4 c0-13.7,11.2-24.9,24.9-24.9H308.6 M308.6,0H33.4C15,0,0,15,0,33.4v158.9c0,18.5,15,33.4,33.4,33.4h275.2c18.5,0,33.4-15,33.4-33.4 V33.4C342,15,327,0,308.6,0L308.6,0z"/> </g> <g> <path d="M112,81.5c37.2,0,67.5,30.3,67.5,67.5v68.5h-135V149C44.5,111.8,74.8,81.5,112,81.5 M112,73c-42,0-76,34-76,76v77h152v-77 C188,107,154,73,112,73L112,73z"/> </g> <g> <path d="M157,222c0-42,34-76,76-76s76,34,76,76H157z"/> </g> </svg> </div><h3>Image</h3> </div><div class="beagle-component-item" value="video"> <div class="beagle-component-logo"> <svg viewBox="0 0 342 225.8"> <style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke-width:8.5039;stroke-miterlimit:10;}</style> <defs> </defs> <g> <path d="M308.6,8.5c13.7,0,24.9,11.2,24.9,24.9v158.9c0,13.7-11.2,24.9-24.9,24.9H33.4c-13.7,0-24.9-11.2-24.9-24.9V33.4 c0-13.7,11.2-24.9,24.9-24.9H308.6 M308.6,0H33.4C15,0,0,15,0,33.4v158.9c0,18.5,15,33.4,33.4,33.4h275.2c18.5,0,33.4-15,33.4-33.4 V33.4C342,15,327,0,308.6,0L308.6,0z"/> </g> <path class="st0" d="M210.5,101L149,65.5c-10-5.8-22.5,1.4-22.5,13v71c0,11.6,12.5,18.8,22.5,13l61.5-35.5 C220.5,121.2,220.5,106.8,210.5,101z"/> </svg> </div><h3>Video</h3> </div><div class="beagle-component-item" value="ul"> <div class="beagle-component-logo"> <svg viewBox="0 0 342 225.8"> <style type="text/css"> .st0{fill:none;stroke-width:8.5039;stroke-linecap:round;stroke-miterlimit:10;}.st1{fill-rule:evenodd;clip-rule:evenodd;}</style> <defs> </defs> <g> <path d="M308.6,8.5c13.7,0,24.9,11.2,24.9,24.9v158.9c0,13.7-11.2,24.9-24.9,24.9H33.4c-13.7,0-24.9-11.2-24.9-24.9V33.4 c0-13.7,11.2-24.9,24.9-24.9H308.6 M308.6,0H33.4C15,0,0,15,0,33.4v158.9c0,18.5,15,33.4,33.4,33.4h275.2c18.5,0,33.4-15,33.4-33.4 V33.4C342,15,327,0,308.6,0L308.6,0z"/> </g> <g> <line class="st0" x1="75" y1="49.5" x2="266" y2="49.5"/> </g> <g> <line class="st0" x1="75.4" y1="113.5" x2="228.8" y2="113.5"/> </g> <g> <line class="st0" x1="75.4" y1="177.5" x2="170.5" y2="177.5"/> </g> <circle class="st1" cx="50.5" cy="49.5" r="6.5"/> <circle class="st1" cx="50.5" cy="112.5" r="6.5"/> <circle class="st1" cx="50.5" cy="177.5" r="6.5"/> </svg> </div><h3>List</h3> </div><div class="beagle-component-item" value="a"> <div class="beagle-component-logo"> <svg viewBox="0 0 342 225.8"> <g> <path d="M308.6,8.5c13.7,0,24.9,11.2,24.9,24.9v158.9c0,13.7-11.2,24.9-24.9,24.9H33.4c-13.7,0-24.9-11.2-24.9-24.9V33.4 c0-13.7,11.2-24.9,24.9-24.9H308.6 M308.6,0H33.4C15,0,0,15,0,33.4v158.9c0,18.5,15,33.4,33.4,33.4h275.2c18.5,0,33.4-15,33.4-33.4 V33.4C342,15,327,0,308.6,0L308.6,0z"/> </g> <g> <path d="M93.7,74v45.2c0,17.1,7.6,24.4,17.8,24.4c11.3,0,18.6-7.5,18.6-24.4V74h10v44.6c0,23.5-12.4,33.1-28.9,33.1 c-15.6,0-27.4-9-27.4-32.7V74H93.7z"/> <path d="M157.2,75.1c5-1,12.1-1.6,18.9-1.6c10.5,0,17.3,1.9,22.1,6.2c3.9,3.4,6,8.6,6,14.5c0,10.1-6.3,16.8-14.4,19.5v0.3 c5.9,2,9.4,7.5,11.2,15.4c2.5,10.7,4.3,18,5.9,21h-10.2c-1.2-2.2-2.9-8.7-5.1-18.3c-2.3-10.5-6.4-14.5-15.3-14.9h-9.3v33.1h-9.9 V75.1z M167.1,109.9h10.1c10.5,0,17.2-5.8,17.2-14.5c0-9.9-7.1-14.2-17.6-14.3c-4.8,0-8.2,0.5-9.8,0.9V109.9z"/> <path d="M218.2,74h9.9v68.1h32.7v8.3h-42.5V74z"/> </g> </svg> </div><h3>Link URL</h3> </div><div class="beagle-component-item" value="component"> <div class="beagle-component-logo"> <svg viewBox="0 0 342 225.8"> <style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:none;stroke-width:8.5039;stroke-linecap:round;stroke-miterlimit:10;}.st2{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke-width:8.5039;stroke-miterlimit:10;}</style> <defs> </defs> <path class="st0" d="M276.1,89h-90.3c-8.8,0-15.9-7.1-15.9-15.9v-7.3c0-8.8,7.1-15.9,15.9-15.9h90.3c8.8,0,15.9,7.1,15.9,15.9v7.3 C292,81.9,284.9,89,276.1,89z"/> <g> <path d="M308.6,8.5c13.7,0,24.9,11.2,24.9,24.9v158.9c0,13.7-11.2,24.9-24.9,24.9H33.4c-13.7,0-24.9-11.2-24.9-24.9V33.4 c0-13.7,11.2-24.9,24.9-24.9H308.6 M308.6,0H33.4C15,0,0,15,0,33.4v158.9c0,18.5,15,33.4,33.4,33.4h275.2c18.5,0,33.4-15,33.4-33.4 V33.4C342,15,327,0,308.6,0L308.6,0z"/> </g> <g> <line class="st1" x1="175.1" y1="134.5" x2="287" y2="134.5"/> </g> <g> <line class="st1" x1="175.1" y1="177.5" x2="244.5" y2="177.5"/> </g> <path class="st2" d="M89.3,67.8l-38.6,28c-4.6,3.4-6.5,9.3-4.8,14.7l14.7,45.4c1.8,5.4,6.8,9.1,12.5,9.1h47.7 c5.7,0,10.8-3.7,12.5-9.1l14.7-45.4c1.8-5.4-0.2-11.4-4.8-14.7l-38.6-28C100.1,64.4,93.9,64.4,89.3,67.8z"/> </svg> </div><h3>Component</h3> </div></div></div><div class="beagle-panel-toolbar"> <div class="beagle-tool" tool="view-tool"> <svg id="Circle_Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326.64 326.64"> <title>Passive Mode</title> <g id="Circle_Logo-2" data-name="Circle_Logo"> <path d="M163.68,8.7C78,8.7,8,78.14,8,164.38c0,85.68,69.44,155.68,155.68,155.68,85.68,0,155.68-69.44,155.68-155.68C319.36,78.7,249.36,8.7,163.68,8.7Zm0,248.64c-51.52,0-93.52-42-93.52-93a93.69,93.69,0,0,1,93.52-93.52c51.52,0,93,42,93,93.52A92.73,92.73,0,0,1,163.68,257.34Z"/> </g> </svg> </div><div class="beagle-tool beagle-active-tool" tool="edit-tool"> <div class="beagle-tool-icon-wrapper"> <svg id="Cursor_Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314.51 445.72"> <title>Context Editor</title> <path id="Cursor_Logo-2" data-name="Cursor_Logo" d="M78.63,12.49a11.2,11.2,0,0,0-9.8,9.45L17.38,348.84h0a11.2,11.2,0,0,0,16.8,11.37l71.93-43.93,29.4,109.9a11.2,11.2,0,0,0,13.82,7.88l75.77-20.3A11.19,11.19,0,0,0,233,400.12l-29.57-109.9,84.35,1.93h0a11.2,11.2,0,0,0,8.93-18.2L88.61,16.69h0a11.2,11.2,0,0,0-10-4.2Zm8.57,37.8L264.14,269.23l-75.07-1.75a11.2,11.2,0,0,0-11,14L208.48,395l-54.07,14.52L124,296a11.2,11.2,0,0,0-16.8-6.65l-63.87,39Z"/> </svg> </div></div><div id="design-tool" class="beagle-tool" tool="design-tool"> <div class="beagle-tool-icon-wrapper"> <svg id="design_logo" data-name="design_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.36 445.28"> <title>Designer</title> <g> <path d="M405.31,168.5l25-25a56.74,56.74,0,0,0-.13-79.8L387.06,20.4l-.13-.13a56.36,56.36,0,0,0-79.67,0L282.32,45.38Z"/> <path d="M44.36,295.7,11.69,418.34C8,432.13,20.87,444.66,34.14,440.79L156.51,408Z"/> <path d="M64.79,264.22,187.7,387.32,379.39,194.48,256.45,71.4Z"/> </g> </svg> </div></div><div class="beagle-tool" tool="translate-tool"> <div class="beagle-tool-icon-wrapper"> <svg id="translator" data-name="translator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.24 342.24" style="width: 70%;"> <title>Translator</title> <g> <path class="cls-1" d="M154.62,172.65c0,12.86,8.22,21.2,21.63,21.2,16.1-.34,32-10.57,37.22-15.18s19.15-20.68,25.32-33.4c7.8,3.68,11.5,9.86,11.5,16.69,0,14.78-14.23,23.35-37,26l11,15.26c35.58-4.66,47.69-19.6,47.69-41.48,0-18.49-11.63-29.71-26.54-34.63.27-1.36.78-2.77,1.05-4.14l-20.22-3.6c-.13,2-.54,2.42-.94,4.47A81.25,81.25,0,0,0,207.46,125c0-3.69.13-13.56.27-17.11a448.88,448.88,0,0,0,48.71-4.37l-1.78-20a322.91,322.91,0,0,1-45.84,5.62c.4-4,1-15.21,1-15.21l-21.35-1.63c-.29,5.48-.4,11.91-.68,17.52-9.45.13-20.66.13-26.55,0l1,19.29h2.32c5.62,0,14.8-.29,23-.55,0,5.33.13,16.83.27,22-19.32,8.06-33.15,23-33.15,42Zm64.32-30.94A72.35,72.35,0,0,1,208.82,157c-.56-4.52-.82-9.17-1.1-14.09a82.82,82.82,0,0,1,11.22-1.23Zm-30.11,7.94c.69,7.67,1.52,15.05,2.74,21.76a25.58,25.58,0,0,1-10.13,3c-6.86.27-6.86-4.09-6.86-6,0-7.27,5.63-14,14.25-18.75Z"/> <path class="cls-1" d="M256.07,294.67a20,20,0,0,1-18.6-12.89L229.68,261c-2.39.14-4.75.23-7.06.23H192.3a114.08,114.08,0,0,1-114-114V116.95A114.1,114.1,0,0,1,192.31,3h30.32A114.08,114.08,0,0,1,336.58,116.95v30.31A113.87,113.87,0,0,1,288.87,240l-14,41.2a19.89,19.89,0,0,1-18.5,13.47Zm-13.93-54,12.94,34.52a1.07,1.07,0,0,0,1,.68v9.4l0-9.4a1.05,1.05,0,0,0,.95-.71l16-47.14,2.64-1.77a95.09,95.09,0,0,0,42.06-79V117a95.24,95.24,0,0,0-95.13-95.13H192.3A95.24,95.24,0,0,0,97.17,117v30.31A95.24,95.24,0,0,0,192.3,242.4h30.32a94.36,94.36,0,0,0,12.14-.8Z"/> <path class="cls-1" d="M192.39,271.58A124.54,124.54,0,0,1,68,147.18V116.86a123.72,123.72,0,0,1,8.88-46.08A104.59,104.59,0,0,0,3.18,170.69V201A104.53,104.53,0,0,0,107.72,305.54H138a106.3,106.3,0,0,0,13.33-.86l10.33,27.54a10.44,10.44,0,0,0,9.78,6.79h.17a10.46,10.46,0,0,0,9.73-7.09l15-44.13a105,105,0,0,0,18.79-16.2H192.39Z"/> </g> </svg> </div></div><div id="media-tool" class="beagle-tool" tool="media-tool"> <div class="beagle-tool-icon-wrapper"> <svg viewBox="0 0 474.7 336.9" style="fill: white; width: 60%;"> <g> <path d="M141.5,336.9h297.6c19.9,0,35.6-16.7,35.6-36.6V242l-137.8-97.6L141.5,336.9z"/> <path d="M211.1,77.1c-8.2,0-16,3.2-21.8,9s-9,13.6-9,21.8s3.2,16,9,21.8s13.6,9,21.8,9c8.2,0,16-3.2,21.8-9s9-13.6,9-21.8 c0-8.2-3.3-16-9-21.8C227.1,80.3,219.3,77.1,211.1,77.1L211.1,77.1z"/> <path d="M113.3,185.6L0,251.5v48.8c0,19.9,15.7,36.6,35.6,36.6h84.1L220.2,238L113.3,185.6z"/> <path d="M439.1,0H35.6C15.7,0,0,16.7,0,36.6v197.2l109.2-63.5c2.1-1.3,4.7-1.4,6.9-0.3l115.5,56.3l99.3-97.6 c2.6-2.6,6.7-2.9,9.7-0.8l134.2,95.3V36.6C474.7,16.7,459,0,439.1,0L439.1,0z M211.1,154c-12.2,0-24-4.9-32.6-13.5 c-8.7-8.7-13.5-20.4-13.5-32.6c0-12.2,4.9-24,13.5-32.6c8.7-8.7,20.4-13.5,32.6-13.5c12.2,0,24,4.9,32.6,13.5 c8.7,8.7,13.5,20.4,13.5,32.6c0,12.2-4.9,24-13.5,32.6C235.1,149.2,223.3,154,211.1,154L211.1,154z"/> </g> </svg> </div></div><div id="component-tool" class="beagle-tool" tool="component-tool"> <div class="beagle-tool-icon-wrapper"> <svg id="add-component" viewBox="0 0 560 560"> <title>Add New Component</title> <g> <path d="M140,260h-0.3c-11,0-20,8.9-20,20c0,11.1,8.9,20,20,20h0.3h280h0.3c11,0,20-8.9,20-20c0-11.1-8.9-20-20-20h-0.3H140z"/> <path d="M300,140v-0.3c0-11-8.9-20-20-20c-11.1,0-20,8.9-20,20v0.3v0v280v0.3c0,11,8.9,20,20,20c11.1,0,20-8.9,20-20V420v0V140z"/> <path d="M280,0C125.6,0,0,125.6,0,280s125.6,280,280,280c154.4,0,280-125.6,280-280S434.4,0,280,0L280,0z M280,40 c132.8,0,240,107.2,240,240S412.8,520,280,520C147.2,520,40,412.8,40,280C40,147.2,147.2,40,280,40L280,40z"/> </g> </svg> </div></div></div><div class="beagle-panel-body"> <div class="beagle-section"> <h3 class="beagle-panel-header">Element Properties</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div class="beagle-panel-row"> <div class="beagle-panel-row-half" style="width: 20%;"> <div id="beagle-change-node-type" class="beagle-element-logo beagle-element-panel-logo beagle-align-left"> type <select id="beagle-change-node-type-select"> <option value="default">---</option> <option value="div">Container</option> <option value="p">Paragraph</option> <option value="span">Word</option> <option value="img">Image</option> <option value="a">URL Link</option> <option value="select">Dropdown Menu</option> <option value="h1">Header &#40;XXL&#41;</option> <option value="h2">Header &#40;XL&#41;</option> <option value="h3">Header &#40;L&#41;</option> <option value="h4">Header &#40;M&#41;</option> <option value="h5">Header &#40;S&#41;</option> <option value="h6">Header &#40;XS&#41;</option> <option value="h7">Header &#40;XXS&#41;</option> </select> </div></div><div class="beagle-panel-row-half beagle-align-right" style="width: 80%;"> <h3 id="selected-element-type">N/A</h3> </div></div><div class="beagle-panel-row"> <div class="beagle-panel-row-half" style="width: 20%;"> <div id="beagle-change-node-id" class="beagle-element-name-logo beagle-element-panel-logo beagle-align-left"> name </div></div><div class="beagle-panel-row-half beagle-align-right" style="width: 80%;"> <h3 id="selected-element-name">--</h3> </div></div><div class="beagle-panel-row"> <div class="beagle-panel-row-full"> <div class="beagle-list-view"> <div class="beagle-list-view-header"> <div class="beagle-list-view-header-inner"> <h3>Classes</h3> <div class="beagle-add-icon"> <select id="beagle-add-class-select"> <option value="default">---</option> <option value="manually-add-class">manual</option> </select> <svg id="plus_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 63"> <defs> <style>.ps-cls-1{fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 6px;}</style> </defs> <title>plus</title> <g id="Line_2"> <line class="ps-cls-1" x1="31.5" y1="3.5" x2="31.5" y2="59.5"/> </g> <g id="Line_1"> <line class="ps-cls-1" x1="3" y1="31.5" x2="59" y2="31.5"/> </g> </svg> </div></div></div><div class="beagle-list-view-body"> <div id="beagle-class-list" class="beagle-list-view-list"><!-- <div class="beagle-list-view-list-item"> <h5> color-blue </h5> </div>--> </div></div></div></div></div></div></div></div><div id="beagle-context-editor" class="beagle-section beagle-editor-section"> <h3 class="beagle-panel-header">Context Editor</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-empty-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Select an element to edit. </div></div></div></div><div id="beagle-no-option-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> This element has no editable properties. </div></div></div></div><div id="beagle-select-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full"> <div class="beagle-list-view-large"> <div class="beagle-list-view-header"> <div class="beagle-list-view-header-inner"> <h3>Dropdown Menu</h3> <div class="beagle-add-icon"> <svg id="plus_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 63"> <defs> <style>.ps-cls-1{fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 6px;}</style> </defs> <title>plus</title> <g id="Line_2"> <line class="ps-cls-1" x1="31.5" y1="3.5" x2="31.5" y2="59.5"/> </g> <g id="Line_1"> <line class="ps-cls-1" x1="3" y1="31.5" x2="59" y2="31.5"/> </g> </svg> </div></div></div><div class="beagle-list-view-body"> <div id="beagle-select-list" class="beagle-list-view-list"><!-- <div class="beagle-list-view-list-item beagle-flex-row"> <input class="beagle-col-md-6" type="text" placeholder="title" minlength="1" maxlength="200"> <input class="beagle-col-md-6" type="text" placeholder="value" minlength="1" maxlength="200"> </div>--> </div></div></div><div class="beagle-flex-row beagle-row"> <button id="update-select-list" class="beagle-button-flexible-width beagle-col-md-5" message="The dropdown menu has been updated successfully!">Update</button> <button id="cancel-select-list" class="beagle-button-flexible-width beagle-col-md-5">Cancel</button> </div></div></div></div></div><div id="beagle-text-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Text Content <div class="beagle-help-icon" message="Change the text of your paragraph or word here, be aware that any HTML tags within the paragraph will be dessolved."> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <textarea id="beagle-text-content-edit" rows="10" cols="100"></textarea> </div></div></div><div id="beagle-image-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row"> <div class="beagle-panel-row-full-title"> Image Source <div class="beagle-help-icon" message="Input the URL of your image here. For relative paths use ../ or ./"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <input id="beagle-image-source-edit" style="width: 100%;"> </div><div class="beagle-panel-row beagle-panel-row-after"> <div id="beagle-image-select-gallery" class="beagle-list-view-large"> <div class="beagle-list-view-header"> <div class="beagle-list-view-header-inner"> <h3>Gallery</h3> <div id="beagle-refresh-media-gallery-icon" class="beagle-refresh-icon" message="Media fetched successfully!"> <svg viewBox="0 0 420 392" style="fill: white;"> <g> <path d="M196,364c-92.8,0-168-75.2-168-168S103.2,28,196,28c69.7,0,129.4,42.4,154.9,102.8l27.3-7C349.4,51.3,278.7,0,196,0 C87.8,0,0,87.8,0,196s87.8,196,196,196"/> <path d="M363.5,183.8l15.8,12.2"/> <path d="M379.3,196l11.3-23.1L420,113l-41.8,10.7l-27.3,7L309,141.5l54.5,42.3"/> </g> </svg> </div></div></div><div id="beagle-image-select-area" class="beagle-list-view-body"><!-- <div class="beagle-image-select-gallery-image"> <img class="beagle-image-select-target" src="images/Video_illustration2.png"> </div>--> </div></div></div></div></div><div id="beagle-link-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row"> <div class="beagle-panel-row-full-title"> URL Link <div class="beagle-help-icon" message="Input the URL of your link here. For relative paths use ../ or ./"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <input id="beagle-link-edit" style="width: 100%;"> </div></div></div><div id="beagle-video-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row"> <div class="beagle-panel-row-full-title"> Video Source <div class="beagle-help-icon" message="Input the URL of your video here. For relative paths use ../ or ./"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <input id="beagle-video-source-edit" style="width: 100%;"> </div></div></div></div></div></div><div id="beagle-view-editor" class="beagle-section beagle-editor-section" style="display: none;"> <h3 class="beagle-panel-header">View</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-view-widget" class="beagle-panel-row-full"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Passive mode, you are free to interact with the page click events. </div></div></div></div></div></div></div><div id="beagle-translation-editor" class="beagle-section beagle-editor-section" style="display: none;"> <h3 class="beagle-panel-header">Translation Editor</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-no-option-translation-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Please select a text element to translate. </div></div></div></div></div></div><div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-translate-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row-full-title"> Add translation key. (no special characters/spaces) <div class="beagle-help-icon" message="Input the URL of your image here. For relative paths use ../ or ./"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div><!-- <div class="beagle-panel-row-after"> <div class="beagle-panel-row-full"> <button id="beagle-make-translatable" class="beagle-widget-button">Make Translatable</button> </div></div>--> <div class="beagle-panel-row beagle-panel-row-after"> <input id="beagle-translatable-key-edit" style="width: 100%;"> </div><div class="beagle-panel-row-after" style="margin-top: 20px;"> <div class="beagle-panel-row-full beagle-panel-block"> <span style="color: black; margin-bottom: 5px; display: block;">Import Language File</span> <input type="file" id="select-files" value="Import" style="margin: 0; padding: 0; height: auto;"/> </div></div></div></div></div></div></div><div id="beagle-designer-editor" class="beagle-section beagle-editor-section" style="display: none;"> <h3 class="beagle-panel-header">Designer</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-no-option-design-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Please select an element to design. </div></div></div></div></div></div><div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-design-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row"> <div class="beagle-panel-row-full-title"> Background Image <div class="beagle-help-icon" message="Input the URL of your image here. E.g: url(example.jpg)"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <input id="beagle-background-image-source-edit" style="width: 100%;"> </div></div></div></div></div></div><div id="beagle-media-editor" class="beagle-section beagle-editor-section" style="display: none;"> <h3 class="beagle-panel-header">Media</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-media-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row-full-title"> Upload Image <div class="beagle-help-icon" message="Input the URL of your image here. For relative paths use ../ or ./"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div><div class="beagle-panel-row-after" style="margin-top: 20px;"> <div class="beagle-panel-row-full beagle-panel-block"> <input id="beagle-image-upload" type="file" accept=".jpg,.png,.jpeg,.gif,.svg" onchange="previewFile()"><br><div class="beagle-preview-image-wrapper"> <img id="beagle-image-upload-preview" src="" width="100px" alt="Choose an image to upload..."> <button id="beagle-upload-media-button" class="beagle-button beagle-disabled" onclick="uploadPreviewImage()">Upload</button> </div></div></div></div></div></div></div></div></div></div></div><div class="beagle-context-menu"> <div class="beagle-context-menu-inner"> <span class="beagle-context-menu-item" value="move-before">Move Before</span> <span class="beagle-context-menu-item" value="move-in">Move Into</span> <span class="beagle-context-menu-item" value="move-after">Move After</span> <span class="beagle-context-menu-item" value="empty">Empty</span> <span class="beagle-context-menu-item" value="delete">Delete</span> </div><span class="beagle-context-menu-item" value="edit">Edit</span> <span class="beagle-context-menu-item" value="edit-html">Edit Code</span> <span class="beagle-context-menu-item" value="manipulate">Arrange &amp; Remove &rang;</span> <span class="beagle-context-menu-item" value="deselect">Deselect</span> <span class="beagle-context-menu-item" value="duplicate">Duplicate</span> <span class="beagle-context-menu-item" value="copy">Copy</span> <span class="beagle-context-menu-item" value="paste">Paste</span> <span class="beagle-context-menu-item" value="trigger">Trigger</span><!-- <span class="beagle-context-menu-item" value="copy">Copy</span> <span class="beagle-context-menu-item" value="cut">Cut</span> --> </div><div class="beagle-notification"> [message] </div></div>');
}
// all functions ============================================================
function getMedia() {
    var apiurl = "https://api.github.com/repos/" + nameWithOwner + "/contents/" + mediaFolder;
    $.ajax({
        url: apiurl,
        type: 'GET',
    }).done(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            if (response[i].download_url.includes(".png") || response[i].download_url.includes(".jpg") || response[i].download_url.includes(".jpeg") || response[i].download_url.includes(".svg") || response[i].download_url.includes(".gif")) {
                $("#beagle-image-select-area").append('<div class="beagle-image-select-gallery-image"><img class="beagle-image-select-target" src="' + response[i].download_url + '"></div>');   
            } else if (response[i].download_url.includes(".mp4") || response[i].download_url.includes(".mov")) {
//                $("#beagle-image-select-area").append("<video controls class='embedded-video' poster='https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg'><source src='" + response[i].download_url + "' type='video/mp4'><source src='movie.ogg' type='video/ogg'>Your browser does not support the video tag.</video>");  
            }
        }
    }).fail(function (jqXHR, textStatus) {
        alert("Media retrieval failed, please check if you have an internet connection. (error " + jqXHR.status + ")");
    });
}

$(document).on("click", "#beagle-refresh-media-gallery-icon", function () {
    updateMediaGallery();
    var notiText = $(this).attr("message");
    $(".beagle-notification").text(notiText).css("transform", "translateX(0)");
    setTimeout(function () {
        $(".beagle-notification").text(notiText).css("transform", "");
    }, 4500);
});

function updateMediaGallery() {
    $("#beagle-image-select-area").empty();
    $("#main-html img").each(function () {
        var imageSrc = $(this).attr("src");
        if (imageSrc && !allImageSrc.includes(imageSrc)) {
            $("#beagle-image-select-area").append('<div class="beagle-image-select-gallery-image"><img class="beagle-image-select-target" src="' + imageSrc + '"></div>');
        }
    });
    if (typeof nameWithOwner !== 'undefined' && typeof uploadMediaToken !== 'undefined' && typeof mediaFolder !== 'undefined') {
        getMedia();   
    }
    $("#beagle-image-select-area").append('<div style="clear: both;"></div>');
}

function previewFile() {
    const preview = $("#beagle-image-upload-preview").get(0);
    const file = $("#beagle-image-upload").get(0).files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
        console.log("preview.src", preview.src);
        console.log(checkFileSize() + " size");
        if (checkFileSize() > 999999) {
            $("#beagle-upload-media-button").addClass("beagle-disabled");
            alert("The file you selected is too big, select files that are smaller than 1mb.");
        } else {
            $("#beagle-upload-media-button").removeClass("beagle-disabled");
        }
        
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function checkFileSize() {
    if (!window.FileReader) {
        console.log("The file API isn't supported on this browser yet.");
        return;
    }
    var fileSize = 0;
    var input = $("#beagle-image-upload").get(0);
    if (!input.files) {
        console.error("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
    } else {
        var file = input.files[0];
        fileSize = file.size;
    }
    return fileSize;
}

function uploadPreviewImage() {
    if (typeof nameWithOwner !== 'undefined' && typeof uploadMediaToken !== 'undefined' && typeof mediaFolder !== 'undefined') {
        var input = $("#beagle-image-upload").get(0);
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onloadend = function () {
                var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
                console.log(base64result);
                getSHAForMedia(input.files[0].name, "uploading a file", base64result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        console.log("nameWithOwner", nameWithOwner);
        console.log("uploadMediaToken", nameWithOwner);
        console.log("nameWithOwner", nameWithOwner);
        alert("Media upload has not been enabled, please check your config before trying again.");
    }
}

function getSHAForMedia(fileName, fileMessage, fileContent) {
    var settings = {
      "url": "https://api.github.com/repos/" + nameWithOwner + "/contents/" + mediaFolder + "/" + fileName,
      "method": "GET",
      "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
        if (response.message == "Not Found") {
            createfile(fileName, fileMessage, fileContent, "new");
        } else {
            createfile(fileName, fileMessage, fileContent, response.sha);
        }
    }).fail(function (jqXHR, textStatus) {
        console.log(jqXHR.status);
        console.log("textStatus", jqXHR);
        if(jqXHR.status==404) {
            createfile(fileName, fileMessage, fileContent, "new");
        }
    });
}
function createfile(fileName, fileMessage, fileContent, status) {
    var apiurl = "https://api.github.com/repos/" + nameWithOwner + "/contents/" + mediaFolder + "/" + fileName;
    console.log("apiurl", apiurl);
    console.log("status/sha", status);
    if (status == "new") {
        var filedata = JSON.stringify({
            "message": fileMessage,
            "content": fileContent
        }); 
    } else {
        var filedata = JSON.stringify({
            "message": fileMessage,
            "content": fileContent,
            "sha": status
        }); 
    }
    
    $.ajax({
        url: apiurl,
        type: 'PUT',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Token " + uploadMediaToken);
        },
        data: filedata
    }).done(function (response) {
        console.log(response);
        alert("File upload successfully! (Refesh the media gallery in 1-2 minutes to see the new file)");
        $("#beagle-upload-media-button").addClass("beagle-disabled");
        $("#beagle-image-upload").get(0).value= null;
        $("#beagle-image-upload-preview").get(0).src= '';
        updateMediaGallery();
//        $("#get-git").trigger("click");
    }).fail(function (jqXHR, textStatus) {
        alert("File upload failed, please check if you have an internet connection. (error " + jqXHR.status + ")");
    });
}



function previewHTML() {
    var w = window.open();
    var css = $("<link href='css/styles.css' rel='stylesheet' type='text/css'/>");
    var html = $("#main-html-content").html();
    $(w.document.head).html(css);
    $(w.document.body).html(html);
}

function deselectElement() {
    $("#beagle-design-widget").hide();
    $(".beagle-widget").hide();
    $("#beagle-empty-widget").show();
    $(".beagle-selected").removeClass("beagle-selected");
    clearEleClassList();
    $("#selected-element-type").text("N/A");
    $("#selected-element-name").text("--");
    $("#beagle-empty-widget").show();
    $("#beagle-no-option-design-widget").show();
}

var sortable;
function selectElement(thisEle) {
    // check if element is within the html scope
    if (thisEle.parents('#main-html').length) {
        var isTextElement = false;
        var hasProperty = 0;
        $("*").removeClass("beagle-selected");
        $("*").removeClass("beagle-hovering");
        var thisEleNodeName = thisEle.get(0).nodeName;
        clearEleClassList();
        refreshEleClassList(thisEle);

        thisEle.addClass("beagle-selected");
        $(".beagle-widget").hide();
        if (elementNames[thisEleNodeName]) {
            $("#selected-element-type").text(elementNames[thisEleNodeName]);
        } else {
            $("#selected-element-type").text("Other");
        }

        if (textElements.includes(thisEleNodeName)) {
            $("#beagle-text-widget").show();
            $("#beagle-text-content-edit").val(thisEle.text().trimStart().trimEnd());
            isTextElement = true;
            hasProperty++;
        }
        if (linkElements.includes(thisEleNodeName)) {
            $("#beagle-text-widget").show();
            $("#beagle-text-content-edit").val(thisEle.text().trimStart().trimEnd());
            $("#beagle-link-widget").show();
            $("#beagle-link-edit").val(thisEle.attr("href"));
            isTextElement = true;
            hasProperty++;
        }
        if (imageElements.includes(thisEleNodeName)) {
            $("#beagle-image-widget").show();
            console.log(thisEle.attr("src"));
            $("#beagle-image-source-edit").val(thisEle.attr("src"));
            $(".beagle-image-select-target-selected").removeClass("beagle-image-select-target-selected");
            $(".beagle-image-select-target").each(function () {
                var imageSrc = $(this).attr("src");
                if (imageSrc == thisEle.attr("src")) {
                    $(this).addClass("beagle-image-select-target-selected");
                }
            });
            hasProperty++;
        }
        if (selectDropdownElements.includes(thisEleNodeName)) {
            $("#beagle-select-list").empty();
            $("#beagle-select-list").append('<div class="beagle-list-view-list-item beagle-flex-row"><h5 class="beagle-col-md-6">Title<h5><h5 class="beagle-col-md-6">Value<h5></div>');
            $(".beagle-selected").find("option").each(function( index ) {
                console.log($(this));
                $("#beagle-select-list").append('<div class="beagle-list-view-list-item beagle-flex-row"><input class="beagle-col-md-6 beagle-select-list-title" type="text" placeholder="--" minlength="1" maxlength="200" value="' + $(this).text() + '"><input class="beagle-col-md-6 beagle-select-list-value" type="text"  placeholder="--" minlength="1" maxlength="200" value="' + $(this).attr("value") + '"></div>');
            });
//            beagle-select-list
            $("#beagle-select-widget").show();
            hasProperty++;
        }

        if (htmlElements.includes(thisEleNodeName)) {
//            $("#beagle-html-widget").show();
            $("#beagle-html-content-edit").val(thisEle.html());
        }
        
        if (videoElements.includes(thisEleNodeName)) {
            $("#beagle-image-source-edit").val(thisEle.attr("poster"));
            $(".beagle-image-select-target-selected").removeClass("beagle-image-select-target-selected");
            $(".beagle-image-select-target").each(function () {
                var imageSrc = $(this).attr("poster");
                if (imageSrc == thisEle.attr("poster")) {
                    $(this).addClass("beagle-image-select-target-selected");
                }
            });
            
            $("#beagle-video-widget").show();
            $("#beagle-image-widget").show();
            $("#beagle-video-source-edit").val(thisEle.find("source").first().attr("src"));
            hasProperty++;
        }
        
        
        if (thisEle.attr("id")) {
            if (thisEle.attr("id").length < 15) {
                $("#selected-element-name").text(thisEle.attr("id"));
            } else {
                $("#selected-element-name").text(thisEle.attr("id").substring(0, 12) + "...");
            }
        } else {
            $("#selected-element-name").text("--");
        }

        if (hasProperty <= 0) {
            $("#beagle-no-option-widget").show();
        }
        
        console.log("isTextElement", isTextElement);
        if (!isTextElement) {
            $("#beagle-no-option-translation-widget").show();
        } else {
            $("#beagle-translate-widget").show();
            if (thisEle.attr("beagle-translatable")) {
                $("#beagle-translatable-key-edit").val(thisEle.attr("beagle-translatable"));
            } else {
                $("#beagle-translatable-key-edit").val("");
            }
        }
        $("#beagle-design-widget, #beagle-media-widget").show();
        var bgImg = thisEle.css("background-image");
        if (bgImg) {
            $("#beagle-background-image-source-edit").val(bgImg);
        }
//            thisEle
        $("#beagle-no-option-design-widget").hide();
    }
//    $("*").removeClass("filtering");
//    $("*").addClass("filtering");
//    thisEle.removeClass("filtering");
//    var gradientEL = document.getElementById('main-html-content');
//    var gradientEL = thisEle.parent().parent().get(0);
//    sortable = new Sortable(gradientEL, {
//        animation: 150,
//        filter: '.filtering'
//    });
//    console.log($(':not(.beagle-selected)'));
//    console.log(sortable);
}

function clearEleClassList() {
    $("#beagle-class-list").empty();
}

function refreshEleClassList(thisEle) {
    var thisEleClassList = thisEle.attr("class");
    if (thisEleClassList) {
        var thisEleClass = thisEleClassList.split(" ");
        for (var i = 0; i < thisEleClass.length; i++) {
            if (thisEleClass[i] != "beagle-selected") {
                $("#beagle-class-list").append('<div class="beagle-list-view-list-item"><span class="beagle-remove-class-list-item">X</span><h5 class="beagle-list-view-list-item-name">' + thisEleClass[i] + '</h5></div>');
            }
        }
    }
}

function saveHTMLFile(elementSelectorInput) {
//    $("*").each(function () {
//        var eachEle = $(this);
//        if (eachEle.attr("style") === "" || eachEle.attr("style") === null) {
//            eachEle.removeAttr("style");   
//        }
//        if (eachEle.attr("beagle-translatable") === "" || eachEle.attr("beagle-translatable") === null) {
//            eachEle.removeAttr("beagle-translatable");   
//        }
//    });
//    $('*[class=""]').removeAttr('class');
//    $('*[beagle-translatable=""]').removeAttr('beagle-translatable');
//    console.log($('*[class=""]').text());
    if (Math.floor(Date.now()) - timeStored > 3) {
        timeStored = Math.floor(Date.now());
        var elementSelector = elementSelectorInput || "html";
        var selectedBeagleEle = $(".beagle-selected");
        $(".beagle-selected").removeClass("beagle-selected");
        $(".beagle-hovering").removeClass("beagle-hovering");
        var cleansedHtml = $(elementSelector).clone();
        cleansedHtml.find(".beagle-builder").remove();
        cleansedHtml.find(".beagle-translatable").removeClass("beagle-translatable");
        cleansedHtml.find(".temp-visible").removeClass("temp-visible");
        cleansedHtml.find("#main-html-content").removeClass("beagle-laptop-width beagle-mobile-width");
        cleansedHtml.find(".beagle-temp-show").removeClass("beagle-temp-show");
        var mainContentHtml = cleansedHtml.find("#main-html-content").html();
        var mainContentHtmlClass = cleansedHtml.find("#main-html-content").attr("class");
        var mainContentHtmlStyles = cleansedHtml.find("#main-html-content").attr("style");
        cleansedHtml.find("#main-html-content").remove();
        cleansedHtml.find("body").prepend(mainContentHtml);
        cleansedHtml.find("body").attr("class", mainContentHtmlClass);
        cleansedHtml.find("body").attr("style", mainContentHtmlStyles);
        cleansedHtml.find("#main-html").remove();
        cleansedHtml.find("*[class='']").removeAttr('class');
        cleansedHtml.find("*[beagle-translatable='']").removeAttr('beagle-translatable');
        var elHtml = cleansedHtml.html();
        console.log("Preparing html file...");
        console.log(elHtml);
        var link = document.createElement('a');
        var mimeType = 'text/plain';
        link.setAttribute('download', 'index.html');
        link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
        link.click();
        link.remove();
        selectedBeagleEle.addClass("beagle-selected");
    }
}

function collectAllStyleClasses() {
    allRules = [];
    $.each(document.styleSheets, function (sheetIndex, sheet) {
        console.log("Looking at styleSheet[" + sheetIndex + "]:");
        var ruleList;
        try {
            ruleList = document.styleSheets[sheetIndex].cssRules;
            for (var rule = 0; rule < ruleList.length; rule++) {
                if (ruleList[rule].selectorText) {
                    var thisSelector = ruleList[rule].selectorText;
                    if (thisSelector.includes(".") && !thisSelector.includes(" ") && !thisSelector.includes(">") && !thisSelector.includes(",") && !thisSelector.includes("#") && !thisSelector.includes("+") && !thisSelector.includes("~") && !thisSelector.includes("[") && !thisSelector.includes("]") && !thisSelector.includes("=") && !thisSelector.includes("$") && !thisSelector.includes(":") && !thisSelector.includes("*") && !thisSelector.includes("^") && !thisSelector.includes("(") && !thisSelector.includes(")")) {
                        if (thisSelector.includes("beagle")) {
                            if (thisSelector.includes("custom-style")) {
                                allRules.push(ruleList[rule].selectorText.replace(".", ""));
                            }
                        } else {
                            allRules.push(ruleList[rule].selectorText.replace(".", ""));
                        }
                    }
                }
            }
        } catch (err) {
            //            console.log("error", err);
            console.warn("Due to CORS Policy, BEAGLE UI cannot get classes from CDN linked css files. Download the files and host them under the same domain to resolve this problem.", err)
        }
    });
    console.log("All CSS classes collected!");
}

// all varibles ============================================================
var oneClickEdit = true;
var toolSelected = "edit-tool";
var allRules = [];
var rightClickedElement;
var elementNames = {
    "DIV": "Container",
    "P": "Paragraph",
    "SPAN": "Word",
    "BR": "Line Break",
    "H1": "Header (XXL)",
    "H2": "Header (XL)",
    "H3": "Header (L)",
    "H4": "Header (M)",
    "H5": "Header (S)",
    "H6": "Header (XS)",
    "H7": "Header (XXS)",
    "SELECT": "Dropdown Menu",
    "INPUT": "Data Input",
    "A": "URL Link",
    "IMG": "Image",
    "SVG": "SVG Image",
    "TITLE": "Title"
};
var textElements = ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "LI", "OL", "TITLE", "LABEL"];
var linkElements = ["A"];
var imageElements = ["IMG"];
var selectDropdownElements = ["SELECT"];
var htmlElements = ["DIV", "SECTION", "HEADER", "FOOTER", "P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "IMG", "LI", "UL", "SELECT", "A"];
var videoElements = ["VIDEO"];

var url_string = window.location.href
var url = new URL(url_string);
var editorEnabled = url.searchParams.get("editor");
var allImageSrc = [];
var copiedElement;
if (editorEnabled == "true") {
    if ((window.jQuery)) {
        // document ready ============================================================
        $(document).ready(function () {
//            $('meta[name="viewport"]').prop('content', 'width=500');
            if (!$("#main-html").length && !$("#main-html-content").length) {
                var originalBody = $("body").html();
                $("body").empty();
                $("body").append('<div id="main-html"><div id="main-html-content"></div></div>');
                $("body").find('#main-html-content').append(originalBody);
                embedBuilder();
            }
            $("* #main-html-content").addClass("temp-visible");
//            $("*[data-aos]").addClass("beagle-show");
            collectAllStyleClasses();
            $("#main-html").css("height", "calc(100vh - 70px)").css("margin-top", "70px").css("width", "calc(100vw - 300px)");
            setTimeout(function () {}, 0);
            $("#beagle-add-class-select").empty();
            $("#beagle-add-class-select").append('<option value="default">---</option>').append('<option value="manually-add-class">Customised Class</option>');
            for (var i = 0; i < allRules.length; i++) {
                $("#beagle-add-class-select").append('<option value="' + allRules[i] + '">' + allRules[i] + '</option>');
            }
            
            updateMediaGallery();
            $("#beagle-html-widget").hide();
            $(".beagle-widget").hide();
            $("#beagle-empty-widget").show();
            $("#beagle-media-widget").show();
            $("*[beagle-translatable]").addClass("beagle-translatable");
            if (Math.floor(Date.now()) - timeStored > 3) {
                timeStored = Math.floor(Date.now());
                if (typeof components !== 'undefined') {
                    for (var i = 0; i < components.length; i++) {
                        var newEleInner = $("<div class='beagle-component-premade-inner'></div>");
                        newEleInner.load("../components/" + components[i]);
                        var newEle = $("<div id='" + components[i].replace(".html", "") + "' class='beagle-component-premade-item'><div class='beagle-component-block-overlay'><div class='beagle-component-buttons'><h5 style='border-radius: 0px 0px 0px 20px'>Insert</h5><h5 style='background-color: #ffb237'>Append</h5></div><h4>" + components[i].replace(".html", "").split("_").join(" ") + "</h4></div></div>");
                        newEleInner.appendTo(newEle);
                        if ($("#" + components[i].replace(".html", "")).length <= 0) {
                            newEle.appendTo($(".beagle-component-gallery-panel .beagle-component-panel-body"));   
                        }
                    }
                }
            }
//            $(".beagle-component-gallery-panel .beagle-component-panel-body").append();
        });

        $(window).resize(function () {
            $("#main-html").css("height", "calc(100vh - 70px)").css("margin-top", "70px").css("width", "calc(100vw - 300px)");
        });

        $(document).on("click", "#main-html-content a", function (e) {
            e.preventDefault();
        });

        // contextmenu events ============================================================
        $(document).bind('contextmenu click', function () {
            if ($("#beagle-html-widget").css("display") != "none") {
                
            } else {
                $(".beagle-context-menu").hide(100);
            }
        });

        $(document).on("click", ".beagle-context-menu-item", function (e) {
            if (Math.floor(Date.now()) - timeStored > 3) {
                timeStored = Math.floor(Date.now());
                var contextValue = $(this).attr("value");
                switch (contextValue) {
                    case 'edit':
                        selectElement($(rightClickedElement));
                        break;
                    case 'edit-html':
                        if ($(rightClickedElement).attr("id") != "main-html-content") {
                            var tempEle = $("<div class='beagle-temp'></div>");
                            tempEle.insertBefore($(rightClickedElement));
                            $(rightClickedElement).appendTo(tempEle);
                            selectElement(tempEle);
                            console.log("tempEle", tempEle.html());
                            $(".beagle-context-menu").hide(100);
                            $("#beagle-html-widget").show();
                        } else {
                            $(".beagle-selected").removeClass("beagle-selected");
                            alert("You cannot directly edit the code of this element.")
                        }
                        break;
                    case 'deselect':
                        deselectElement();
                        break;
                    case 'duplicate':
                        if ($(rightClickedElement).attr("id") != "main-html-content") {
                            var duplicatedElement = $(rightClickedElement).clone();
                            duplicatedElement.removeClass("beagle-selected");
                            duplicatedElement.insertAfter(rightClickedElement);
                        }
                        break;
                    case 'copy':
                        copiedElement = $(rightClickedElement).clone().removeClass("beagle-selected");
//                        console.log('Mangoes and papayas are $2.79 a pound.');
                        break;
                    case 'paste':
                        if (copiedElement) {
                            copiedElement.appendTo($(rightClickedElement)); 
                        }
                        break;
                    case 'trigger':
                        if ($(rightClickedElement).get(0).nodeName == "A") {
                            $(rightClickedElement).parent().find(".list-link-content").toggle();
                        }
                        break;
                    case 'move-before':
                        if ($(".beagle-selected")) {
                            $(".beagle-selected").insertBefore($(rightClickedElement));   
                        }
                        break;
                    case 'move-in':
                        if ($(".beagle-selected")) {
                            $(".beagle-selected").appendTo($(rightClickedElement));   
                        }
                        break;
                    case 'move-after':
                        if ($(".beagle-selected")) {
                            $(".beagle-selected").insertAfter($(rightClickedElement));   
                        }
                        break;
                    case 'empty':
                        if ($(rightClickedElement).attr("id") == "main-html-content") {
                            if (confirm("You're about to clear your whole web page, confirm this operation? (this can not be undone)") == true) {
                                $(rightClickedElement).empty();
                            }
                        } else {
                            if (confirm("You're about to empty this element, confirm this operation? (this can not be undone)") == true) {
                                $(rightClickedElement).empty();
                            }
                        }
                        break;
                    case 'delete':
                        if ($(rightClickedElement).attr("id") == "main-html-content" || $(rightClickedElement).attr("id") == "main-html") {
                            alert("You cannot delete this element.");
                        } else {
                            if (confirm("You're about to delete this element, confirm this operation? (this can not be undone)") == true) {
                                $(rightClickedElement).remove();
                            }
                        }
                        break;
                    default:
                        console.log("Nope");
                }    
            }
        });
        $('.beagle-context-menu').bind('contextmenu', function () {
            return false;
        });
        
        $(document).on("mouseenter", ".beagle-context-menu-item[value=manipulate]", function () {
            $(".beagle-context-menu-inner").css("opacity", 1);
        });
        $(document).on("mouseleave", ".beagle-context-menu", function () {
            $(".beagle-context-menu-inner").css("opacity", "");
        });

        var timeStored = Math.floor(Date.now());
        // element click detections
        $("#main-html").bind('contextmenu', function (e) {
            if (Math.floor(Date.now()) - timeStored > 3) {
                rightClickedElement = e.target;
                timeStored = Math.floor(Date.now());
                console.log("eta: ", rightClickedElement);
                var top = e.pageY + 5;
                var left = e.pageX;
                $(".beagle-context-menu").toggle(100).css({
                    top: top + "px",
                    left: left + "px",
                    display: "flex"
                });
                return false;   
            }
        });

        // element hover and selection events
        if (oneClickEdit) {
            $("#main-html").on("click mouseenter mouseleave", "section, header, footer, div, p, h1, h2, h3, h4, h5, h6, h7, h8, h9, span, hr, iframe, button, path, svg, a, select, input, img, title", function (e) {
                var target = $(e.target);
//                            console.log(target);
                if (e.type == "click" && (toolSelected == "edit-tool" || toolSelected == "translate-tool" || toolSelected == "design-tool" || toolSelected == "media-tool")) {
                    $("*").removeClass("beagle-hovering");
                    if (target.attr("class")) {
                        if (target.attr("class").toString().includes("beagle-translatable")) {
                            selectElement(target);
                        } else if (!target.attr("class").toString().includes("beagle")) {
                            selectElement(target);
                        }
                        
                    } else {
                        selectElement(target);
                    }
                } else if (e.type == "mouseenter") {
                    $("*").removeClass("beagle-hovering");
                    if (target.attr("class")) {
                        if (!target.attr("class").toString().includes("beagle")) {
                            if (!target.attr("class").toString().includes("beagle-selected")) {
                                target.addClass("beagle-hovering");
                            }
                        }
                    } else {
                        target.addClass("beagle-hovering");
                    }
                } else if (e.type == "mouseleave") {
                    $("*").removeClass("beagle-hovering");
                }
            });
        }

        // class list events ============================================================
        $(document).on("change", "#beagle-add-class-select", function () {
            var selectedValue = $(this).val();
            clearEleClassList();
            if (selectedValue != "default" && selectedValue != "manually-add-class") {
                if ($(".beagle-selected").length) {
                    $(".beagle-selected").addClass(selectedValue);
                }
            } else if (selectedValue == "manually-add-class") {
                if ($(".beagle-selected").length) {
                    var customClassInput = prompt("Add classes (separate multiple classes with spaces)");
                    if (customClassInput != null) {
                        if (customClassInput.includes(",") || customClassInput.includes("|") || customClassInput.includes("#") || customClassInput.includes(".") || customClassInput.includes("<") || customClassInput.includes(">") || customClassInput.includes(";") || customClassInput.includes(";") || customClassInput.includes("'") || customClassInput.includes("[") || customClassInput.includes("]") || customClassInput.includes("(") || customClassInput.includes(")")) {
                            alert("Your class cannot have any special characters");
                        } else {
                            $(".beagle-selected").addClass(customClassInput);
                        }
                    }
                }

            }
            $('#beagle-add-class-select option[value=default]').prop('selected', true);
            refreshEleClassList($(".beagle-selected"));
        });

        $(document).on("click", ".beagle-remove-class-list-item", function () {
            var removingClassItem = $(this).parent().find(".beagle-list-view-list-item-name").text();
            console.log("Removing class: ", removingClassItem);
            if ($(".beagle-selected").length) {
                $(".beagle-selected").removeClass(removingClassItem);
                clearEleClassList();
                refreshEleClassList($(".beagle-selected"));
            }
        });

        // change node type ============================================================
        $(document).on("change", "#beagle-change-node-type-select", function () {
            var selectedValue = $(this).val();
            if ($(".beagle-selected").length) {
                var thisEleHtml = $(".beagle-selected").html();
                var thisEleClass = $(".beagle-selected").attr("class");
                var thisEleStyle = $(".beagle-selected").attr("style");
                $(".beagle-selected").replaceWith(
                    "<" + selectedValue + " class=" + thisEleClass + " style=" + thisEleStyle + ">" + thisEleHtml + "</" + selectedValue + ">"
                    //                function () {
                    //                    return $("<" + selectedValue + ">", {
                    //                        class: this.className,
                    //                        style: this.style,
                    //                        value: this.innerHTML
                    //                    });
                    //                }
                );
            }
            $('#beagle-change-node-type-select option[value=default]').prop('selected', true);
            selectElement($(".beagle-selected"));
        });

//        $(document).on("click", "#beagle-change-node-type", function () {
//            if ($(".beagle-selected").length) {
//                $("a").replaceWith(
//                    function () {
//                        return $("<input>", {
//                            class: this.className,
//                            style: this.style,
//                            value: this.innerHTML
//                        });
//                    });
//            }
//        });

        // change node id ============================================================
        $(document).on("click", "#beagle-change-node-id", function () {
            if ($(".beagle-selected").length) {
                //            var customClassInput;
                //            if ($(".beagle-selected").attr("id")) {
                //                customClassInput = prompt("Change this element name (no space/special characters, must be unique)", $(".beagle-selected").attr("id"));
                //            } else {
                //                customClassInput = prompt("Change this element name (no space/special characters, must be unique)");
                //            }
                var customClassInput = prompt("Change this element name (no space/special characters, must be unique)");
                console.log(customClassInput);
                if (customClassInput != null) {
                    if (customClassInput.includes(",") || customClassInput.includes("|") || customClassInput.includes("#") || customClassInput.includes(".") || customClassInput.includes("<") || customClassInput.includes(">") || customClassInput.includes(";") || customClassInput.includes(";") || customClassInput.includes("'") || customClassInput.includes("[") || customClassInput.includes("]") || customClassInput.includes("(") || customClassInput.includes(")") || customClassInput.includes(" ")) {
                        alert("Your element name cannot have any special characters.");
                    } else {
                        if ($("#" + customClassInput).length) {
                            alert("Your element name has already been taken, please try another one.");
                        } else {
                            $(".beagle-selected").attr("id", customClassInput);
                            selectElement($(".beagle-selected"));
                        }
//                        $(".beagle-selected").attr("id", customClassInput);
//                        selectElement($(".beagle-selected"));
                    }
                }
            }
        });
        
        
        // select images from gallery events ============================================================
        $(document).on("click", ".beagle-image-select-target", function () {
            var selectedEleNodeName = $(".beagle-selected").get(0).nodeName;
            if (selectedEleNodeName == "IMG") {
                $(".beagle-selected").attr("src", $(this).attr("src"));
            } else if (selectedEleNodeName == "VIDEO") {
                $(".beagle-selected").attr("poster", $(this).attr("src"));
            }
            $("#beagle-image-source-edit").val($(this).attr("src"));
            selectElement($(".beagle-selected"));
        });
        
        
        // help icon events ============================================================
        $(document).on("click", ".beagle-help-icon", function () {
            var notiText = $(this).attr("message");
            $(".beagle-notification").text(notiText).css("transform", "translateX(0)");
            setTimeout(function () {
                $(".beagle-notification").text(notiText).css("transform", "");
            }, 4500);
        });

        // text content edit events ============================================================
        $(document).on("input propertychange", "#beagle-text-content-edit", function () {
            var inputText = $(this).val();
            $(".beagle-selected").text(inputText);
            $("#beagle-html-content-edit").val($(".beagle-selected").html());
        });
        $(document).on("click", "#beagle-update-html", function () {
            var inputText = $("#beagle-html-content-edit").val();
            $(inputText).insertBefore(".beagle-temp");
            $(".beagle-temp").remove();
//            $(".beagle-selected").html(inputText);
            $("#beagle-html-widget").hide();
        });
        
        $(document).on("click", ".close-modal-area, #beagle-dismiss-html", function () {
            var inputText = $(".beagle-temp").html();
            $(inputText).insertBefore(".beagle-temp");
            $(".beagle-temp").remove();
            $("#beagle-html-widget").hide();
        });
//        $( document ).keypress(function(e) {
//          console.log( e.keyCode );
//        });

        // select list edit events ============================================================
        $(document).on("click", "#beagle-select-widget .beagle-add-icon", function () {
            $("#beagle-select-list").append('<div class="beagle-list-view-list-item beagle-flex-row"><input class="beagle-col-md-6 beagle-select-list-title" type="text" placeholder="--" minlength="1" maxlength="200" value=""><input class="beagle-col-md-6 beagle-select-list-value" type="text"  placeholder="--" minlength="1" maxlength="200" value=""></div>');
        });
        
        $(document).on("click", "#update-select-list", function () {
            $(".beagle-selected").empty();
            $("#beagle-select-list").find(".beagle-list-view-list-item").each(function( index ) {
                if (index > 0) {
                    var thisTitle = $(this).find(".beagle-select-list-title").val();
                    var thisValue = $(this).find(".beagle-select-list-value").val();
                    if (thisTitle || thisValue) {
                        $(".beagle-selected").append('<option value="' + thisValue + '">' + thisTitle + '</option>');   
                    }
                }
            });
            selectElement($(".beagle-selected"));
            var notiText = $(this).attr("message");
            $(".beagle-notification").text(notiText).css("transform", "translateX(0)");
            setTimeout(function () {
                $(".beagle-notification").text(notiText).css("transform", "");
            }, 4500);
        });
        
        $(document).on("click", "#cancel-select-list", function () {
            deselectElement();
        });
        
        // tool bar events ============================================================
        var showingAll = false;
        $(document).on("click", ".beagle-tool", function () {
            if ($(this).attr("tool") != "component-tool" && $(this).attr("tool") != "view-tool") {
                toolSelected = $(this).attr("tool");
                console.log(toolSelected);
                $(".beagle-active-tool").removeClass("beagle-active-tool");
                $(this).addClass("beagle-active-tool");
                $(".beagle-editor-section").hide();
                if (toolSelected == "view-tool") {
                    $("#beagle-view-editor").show();
                    oneClickEdit = false;
                    console.log("oneClickEdit", oneClickEdit);
                } else if (toolSelected == "edit-tool") {
                    $("#beagle-context-editor").show();
                    oneClickEdit = true;
                } else if (toolSelected == "translate-tool") {
                    $("#beagle-translation-editor").show();
                    oneClickEdit = true;
                } else if (toolSelected == "design-tool") {
                    $("#beagle-designer-editor").show();
                    oneClickEdit = true;
                } else if (toolSelected == "media-tool") {
                    $("#beagle-media-editor").show();
                    oneClickEdit = true;
                }
            } else if ($(this).attr("tool") == "component-tool") {
                if ($(".beagle-component-panel").css("opacity") == 0) {
                    $(".beagle-component-panel").css("transform", "translateX(-100%)").css("opacity", 1);  
                } else {
                    $(".beagle-component-panel").css("transform", "").css("opacity", "");
                    $(".beagle-component-gallery-panel").removeClass("beagle-flex");
                }
            } else if ($(this).attr("tool") == "view-tool") {
                $(this).toggleClass("beagle-active-view-tool");
                if (showingAll) {
                    showingAll = false;
                    $("#main-html-content .beagle-temp-show").removeClass("beagle-temp-show");
                } else {
                    showingAll = true;
                    $( "#main-html-content *" ).each(function( index ) {
                        if ($(this).css("display") == "none") {
                            $(this).addClass("beagle-temp-show");
                        }
                    });
                }
            }
        });
        
        // image source edit events ============================================================
        $(document).on("input propertychange", "#beagle-image-source-edit", function () {
            var selectedEleNodeName = $(".beagle-selected").get(0).nodeName;
            var inputText = $(this).val();
            
            if (selectedEleNodeName == "IMG") {
                $(".beagle-selected").attr("src", inputText);
                $(".beagle-image-select-target-selected").removeClass("beagle-image-select-target-selected");
                if (allImageSrc.includes(inputText)) {
                    $( ".beagle-image-select-target[src='" + inputText + "']" ).addClass("beagle-image-select-target-selected");
                }
            } else if (selectedEleNodeName == "VIDEO") {
                $(".beagle-selected").attr("poster", inputText);
                if (allImageSrc.includes(inputText)) {
                    $( ".beagle-image-select-target[src='" + inputText + "']" ).addClass("beagle-image-select-target-selected");
                }
            }
        });
        
        // background image source edit events ============================================================
        $(document).on("input propertychange", "#beagle-background-image-source-edit", function () {
            var inputText = $(this).val();
            $(".beagle-selected").css("background-image", inputText);
        });
        
        // video source edit events ============================================================
        $(document).on("input propertychange", "#beagle-video-source-edit", function () {
            var inputText = $(this).val();
            $(".beagle-selected").find("source").attr("src", inputText);
        });
        
        // url link edit events ============================================================
        $(document).on("input propertychange", "#beagle-link-edit", function () {
            var inputText = $(this).val();
            $(".beagle-selected").attr("href", inputText);
        });

        // html content edit events ============================================================
        $(document).on("input propertychange", "#beagle-html-content-edit", function () {
            var inputText = $(this).val();
            $("#beagle-text-content-edit").val($(".beagle-selected").text());
        });
        
        // translation import events======================================================
        $(document).on("change", "#select-files", function () {
            var reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(event.target.files[0]);
        });
        
        var importedJSON;
        function onReaderLoad(event){
            console.log(event.target.result);
            importedJSON = JSON.parse(event.target.result);
            var jsonKeys = [];
            for(var k in importedJSON) jsonKeys.push(k);
            console.log(importedJSON);
            console.log("==========");
            console.log(jsonKeys);
            for (var i = 0; i < jsonKeys.length; i++) {
                $("*[beagle-translatable='" + jsonKeys[i] + "']").text(importedJSON[jsonKeys[i]]);
                console.log($("*[" + jsonKeys[i] + "]"));
//                console.log(importedJSON[jsonKeys[i]]);
            }
        }


        // translation export events======================================================
        $(document).on("click", "#beagle-language-button", function () {
            if (Math.floor(Date.now()) - timeStored > 3) {
                timeStored = Math.floor(Date.now());
                var translatableObjStr = "";
                $('*[beagle-translatable]').each(function(index) {
                    var thisEle = $(this);
                    if (thisEle.attr("beagle-translatable")) {
                        translatableObjStr += '"' + thisEle.attr("beagle-translatable") + '"' + " : " + '"' + thisEle.text().trim() + '", ';
                    }
                });
    //            console.log("1", translatableObjStr);
                translatableObjStr = translatableObjStr.substring(0, translatableObjStr.length - 2);
                translatableObjStr = "{" + translatableObjStr + "}";
    //            console.log("2", translatableObjStr);
    //            console.log(JSON.parse(translatableObjStr));
                $("<a />", {
                    "download": "data.json",
                    "href": "data:application/json," + encodeURIComponent(JSON.stringify(JSON.parse(translatableObjStr)))
                }).appendTo("body").click(function () {
                    $(this).remove()
                })[0].click();
            }
        });
        
        $(document).on("input propertychange", "#beagle-translatable-key-edit", function () {
            var inputText = $(this).val();
            cleansedText = inputText.replace(/[^A-Z0-9]/ig, "");
            $(this).val(cleansedText)
            $(".beagle-selected").attr("beagle-translatable", cleansedText);
            if (cleansedText != "" && cleansedText != undefined && cleansedText != null) {
                $(".beagle-selected").addClass("beagle-translatable");   
            } else {
                $(".beagle-selected").removeClass("beagle-translatable");  
            }
        });
        
        $(document).on("click", "#beagle-make-translatable", function () {
            var translateKeyInput = prompt("Add translatable keys (only alphabet characters allowed)");
            if (translateKeyInput != null) {
                if (translateKeyInput.includes(",") || translateKeyInput.includes("|") || translateKeyInput.includes("#") || translateKeyInput.includes(".") || translateKeyInput.includes("<") || translateKeyInput.includes(">") || translateKeyInput.includes(";") || translateKeyInput.includes(";") || translateKeyInput.includes("'") || translateKeyInput.includes("[") || translateKeyInput.includes("]") || translateKeyInput.includes("(") || translateKeyInput.includes(")") || translateKeyInput.includes(" ")) {
                    alert("Your translatable cannot have any special characters");
                } else {
                    $(".beagle-selected").attr("beagle-translatable", translateKeyInput);
                    $(".beagle-selected").addClass("beagle-translatable");
                }
            }
        });
        
        // responsive events======================================================
        $(document).on("click", "#beagle-mobile-responsive", function () {
            $("#main-html-content").removeClass("beagle-laptop-width").addClass("beagle-mobile-width");
//            $('meta[name="viewport"]').prop('content', 'width=900');

        });
        $(document).on("click", "#beagle-laptop-responsive", function () {
            $("#main-html-content").removeClass("beagle-mobile-width").addClass("beagle-laptop-width");
//            $('meta[name="viewport"]').prop('content', '');
        });
        
        // components events======================================================
        $(document).on("click", ".beagle-component-item", function () {
            if (Math.floor(Date.now()) - timeStored > 3) {
                timeStored = Math.floor(Date.now());
                if ($(".beagle-selected").length > 0 || $(this).attr("value") === "component") {
                    var clickedEle = $(this).attr("value");
                    var selectedEle = $(".beagle-selected");
                    switch (clickedEle) {
                        case 'div':
                            $("<div style='min-height: 100px;'></div>").insertAfter(selectedEle);
                            break;
                        case 'p':
                            $("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat, leo ac volutpat vestibulum, lorem ex vulputate quam, eu tempus massa tortor condimentum est. Aliquam elit velit, ultrices ut sagittis quis, fringilla et erat. Mauris nec pulvinar felis. Ut nisl dui, vehicula varius mauris ac, vulputate placerat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vestibulum ultrices mauris, cursus facilisis magna molestie id. Sed eget ligula nibh. Aenean varius tortor sit amet elit accumsan maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse a neque erat. Nulla et nisi ac orci viverra vulputate et non eros. Nullam scelerisque fringilla tortor ut porta.</p>").insertAfter(selectedEle);
                            break;
                        case 'h1':
                            $("<h1>Lorem ipsum dolor sit amet</h1>").insertAfter(selectedEle);
                            break;
                        case 'img':
                            $("<img src='https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg' alt='image here'>").insertAfter(selectedEle);
                            break;
                        case 'video':
                            $("<video controls class='embedded-video' poster='https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg'><source src='movie.mp4' type='video/mp4'><source src='movie.ogg' type='video/ogg'>Your browser does not support the video tag.</video>").insertAfter(selectedEle);
                            break;
                        case 'ul':
                            $("<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>").insertAfter(selectedEle);
                            break;
                        case 'a':
                            $("<a href='www.google.com'>URL Link</a>").insertAfter(selectedEle);
                            break;
                        case 'component':
                            $(".beagle-component-gallery-panel").toggleClass("beagle-flex");
    //                        $("<a href='www.google.com'/>").insertAfter(selectedEle);
                            break;
                        default:
                            console.log("Nope");
                    }   
                } else {
                    alert("Please select an element first.");
                }
            }
        });
        
        $(document).on("click", ".beagle-component-premade-item .beagle-component-buttons h5", function () {
            if (Math.floor(Date.now()) - timeStored > 3) {
                timeStored = Math.floor(Date.now());
                if ($(".beagle-selected").length > 0) {
                    var selectedEle = $(".beagle-selected");
                    var thisEle = $(this);
                    var appendingHTML = $(thisEle.parent().parent().parent().find(".beagle-component-premade-inner").html());
                    if (thisEle.text() == "Insert") {
                        appendingHTML.appendTo(selectedEle);
                    } else if (thisEle.text() == "Append") {
                        appendingHTML.insertAfter(selectedEle);
                    }
                } else {
                    alert("Please select an element first.");
                }
            }
        });
    } else {
        console.warn("BEAGLE UI requires jQuery, please link jQuery before using BEAGLE UI.");
    }
}
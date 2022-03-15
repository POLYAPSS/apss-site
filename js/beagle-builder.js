function embedBuilder() {
    $("body").append('<div class="beagle-builder"> <div id="beagle-html-widget" class="beagle-panel-row-full beagle-widget beagle-floating-widget"> <div class="close-modal-area"></div><div class="beagle-edit-view beagle-edit-modal"> <div class="beagle-panel-row"> <div class="beagle-panel-row-full-title"> HTML Content <div class="beagle-help-icon" message="HTML is the back bone of a webpage, edit this field with code if you want full control over the element."> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <textarea id="beagle-html-content-edit" rows="40" cols="140"></textarea> </div></div></div><div class="beagle-builder-top-bar"> <div class="beagle-logo"> <svg id="paw_logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.63 375.41"> <defs> <style>.cls-1{fill: #fff;}.cls-2{fill: #ffb237;}</style> </defs> <title>paw</title> <path class="cls-1" d="M379,187.3a47.36,47.36,0,0,1-94.71,0c0-26.15,43.14-68.84,69.29-68.84S379,161.15,379,187.3Z"/> <path class="cls-2" d="M100.39,187.3a47.36,47.36,0,0,1-94.71,0c0-26.15-1.61-68.84,24.53-68.84S100.39,161.15,100.39,187.3Z"/> <path class="cls-2" d="M299.27,92.59a47.36,47.36,0,0,1-94.71,0c0-26.15,21.19-87.38,47.35-87.38S299.27,66.44,299.27,92.59Z"/> <path class="cls-2" d="M309.63,278.84c12.7,52.34-40.88,93.49-119.8,92S58.34,327,72.18,276.14s67.39-92,119.7-92S296.93,226.56,309.63,278.84Z"/> <path class="cls-2" d="M179.31,92.59a47.36,47.36,0,0,1-94.71,0c0-26.15,21.18-87.38,47.34-87.38S179.31,66.44,179.31,92.59Z"/> </svg> </div><div class="beagle-menu-buttons"> <div class="beagle-menu-buttons-inner"> <button id="beagle-language-button" class="beagle-button">Export Language</button> <button class="beagle-button">Site Properties</button> <button class="beagle-button" onClick="saveHTMLFile()">Save</button> </div></div></div><div class="beagle-builder-right-bar"> <div class="beagle-brand-name-wrapper"> <div class="beagle-brand-name-inner"> <h2>BEAGLE UI</h2> <h7>light-weighted web editor</h7> </div></div><div class="beagle-builder-right-bar-content"> <div class="beagle-panel-toolbar"> <div class="beagle-tool" tool="view-tool"> <svg id="Circle_Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326.64 326.64"> <title>Passive Mode</title> <g id="Circle_Logo-2" data-name="Circle_Logo"> <path d="M163.68,8.7C78,8.7,8,78.14,8,164.38c0,85.68,69.44,155.68,155.68,155.68,85.68,0,155.68-69.44,155.68-155.68C319.36,78.7,249.36,8.7,163.68,8.7Zm0,248.64c-51.52,0-93.52-42-93.52-93a93.69,93.69,0,0,1,93.52-93.52c51.52,0,93,42,93,93.52A92.73,92.73,0,0,1,163.68,257.34Z"/> </g> </svg> </div><div class="beagle-tool beagle-active-tool" tool="edit-tool"> <div class="beagle-tool-icon-wrapper"> <svg id="Cursor_Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314.51 445.72"> <title>Context Editor</title> <path id="Cursor_Logo-2" data-name="Cursor_Logo" d="M78.63,12.49a11.2,11.2,0,0,0-9.8,9.45L17.38,348.84h0a11.2,11.2,0,0,0,16.8,11.37l71.93-43.93,29.4,109.9a11.2,11.2,0,0,0,13.82,7.88l75.77-20.3A11.19,11.19,0,0,0,233,400.12l-29.57-109.9,84.35,1.93h0a11.2,11.2,0,0,0,8.93-18.2L88.61,16.69h0a11.2,11.2,0,0,0-10-4.2Zm8.57,37.8L264.14,269.23l-75.07-1.75a11.2,11.2,0,0,0-11,14L208.48,395l-54.07,14.52L124,296a11.2,11.2,0,0,0-16.8-6.65l-63.87,39Z"/> </svg> </div></div><div class="beagle-tool" tool="design-tool"> <div class="beagle-tool-icon-wrapper"> <svg id="design_logo" data-name="design_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.36 445.28"> <title>Designer</title> <g> <path d="M405.31,168.5l25-25a56.74,56.74,0,0,0-.13-79.8L387.06,20.4l-.13-.13a56.36,56.36,0,0,0-79.67,0L282.32,45.38Z"/> <path d="M44.36,295.7,11.69,418.34C8,432.13,20.87,444.66,34.14,440.79L156.51,408Z"/> <path d="M64.79,264.22,187.7,387.32,379.39,194.48,256.45,71.4Z"/> </g> </svg> </div></div><div class="beagle-tool" tool="translate-tool"> <div class="beagle-tool-icon-wrapper"> <svg id="translator" data-name="translator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.24 342.24" style="width: 70%;"> <title>Translator</title> <g> <path class="cls-1" d="M154.62,172.65c0,12.86,8.22,21.2,21.63,21.2,16.1-.34,32-10.57,37.22-15.18s19.15-20.68,25.32-33.4c7.8,3.68,11.5,9.86,11.5,16.69,0,14.78-14.23,23.35-37,26l11,15.26c35.58-4.66,47.69-19.6,47.69-41.48,0-18.49-11.63-29.71-26.54-34.63.27-1.36.78-2.77,1.05-4.14l-20.22-3.6c-.13,2-.54,2.42-.94,4.47A81.25,81.25,0,0,0,207.46,125c0-3.69.13-13.56.27-17.11a448.88,448.88,0,0,0,48.71-4.37l-1.78-20a322.91,322.91,0,0,1-45.84,5.62c.4-4,1-15.21,1-15.21l-21.35-1.63c-.29,5.48-.4,11.91-.68,17.52-9.45.13-20.66.13-26.55,0l1,19.29h2.32c5.62,0,14.8-.29,23-.55,0,5.33.13,16.83.27,22-19.32,8.06-33.15,23-33.15,42Zm64.32-30.94A72.35,72.35,0,0,1,208.82,157c-.56-4.52-.82-9.17-1.1-14.09a82.82,82.82,0,0,1,11.22-1.23Zm-30.11,7.94c.69,7.67,1.52,15.05,2.74,21.76a25.58,25.58,0,0,1-10.13,3c-6.86.27-6.86-4.09-6.86-6,0-7.27,5.63-14,14.25-18.75Z"/> <path class="cls-1" d="M256.07,294.67a20,20,0,0,1-18.6-12.89L229.68,261c-2.39.14-4.75.23-7.06.23H192.3a114.08,114.08,0,0,1-114-114V116.95A114.1,114.1,0,0,1,192.31,3h30.32A114.08,114.08,0,0,1,336.58,116.95v30.31A113.87,113.87,0,0,1,288.87,240l-14,41.2a19.89,19.89,0,0,1-18.5,13.47Zm-13.93-54,12.94,34.52a1.07,1.07,0,0,0,1,.68v9.4l0-9.4a1.05,1.05,0,0,0,.95-.71l16-47.14,2.64-1.77a95.09,95.09,0,0,0,42.06-79V117a95.24,95.24,0,0,0-95.13-95.13H192.3A95.24,95.24,0,0,0,97.17,117v30.31A95.24,95.24,0,0,0,192.3,242.4h30.32a94.36,94.36,0,0,0,12.14-.8Z"/> <path class="cls-1" d="M192.39,271.58A124.54,124.54,0,0,1,68,147.18V116.86a123.72,123.72,0,0,1,8.88-46.08A104.59,104.59,0,0,0,3.18,170.69V201A104.53,104.53,0,0,0,107.72,305.54H138a106.3,106.3,0,0,0,13.33-.86l10.33,27.54a10.44,10.44,0,0,0,9.78,6.79h.17a10.46,10.46,0,0,0,9.73-7.09l15-44.13a105,105,0,0,0,18.79-16.2H192.39Z"/> </g> </svg> </div></div></div><div class="beagle-panel-body"> <div class="beagle-section"> <h3 class="beagle-panel-header">Element Properties</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div class="beagle-panel-row"> <div class="beagle-panel-row-half" style="width: 20%;"> <div id="beagle-change-node-type" class="beagle-element-logo beagle-element-panel-logo beagle-align-left"> type <select id="beagle-change-node-type-select"> <option value="default">---</option> <option value="div">Container</option> <option value="p">Paragraph</option> <option value="span">Word</option> <option value="img">Image</option> <option value="a">URL Link</option> <option value="select">Dropdown Menu</option> <option value="h1">Header &#40;XXL&#41;</option> <option value="h2">Header &#40;XL&#41;</option> <option value="h3">Header &#40;L&#41;</option> <option value="h4">Header &#40;M&#41;</option> <option value="h5">Header &#40;S&#41;</option> <option value="h6">Header &#40;XS&#41;</option> <option value="h7">Header &#40;XXS&#41;</option> </select> </div></div><div class="beagle-panel-row-half beagle-align-right" style="width: 80%;"> <h3 id="selected-element-type">N/A</h3> </div></div><div class="beagle-panel-row"> <div class="beagle-panel-row-half" style="width: 20%;"> <div id="beagle-change-node-id" class="beagle-element-name-logo beagle-element-panel-logo beagle-align-left"> name </div></div><div class="beagle-panel-row-half beagle-align-right" style="width: 80%;"> <h3 id="selected-element-name">--</h3> </div></div><div class="beagle-panel-row"> <div class="beagle-panel-row-full"> <div class="beagle-list-view"> <div class="beagle-list-view-header"> <div class="beagle-list-view-header-inner"> <h3>Classes</h3> <div class="beagle-add-icon"> <select id="beagle-add-class-select"> <option value="default">---</option> <option value="manually-add-class">manual</option> </select> <svg id="plus_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 63"> <defs> <style>.ps-cls-1{fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 6px;}</style> </defs> <title>plus</title> <g id="Line_2"> <line class="ps-cls-1" x1="31.5" y1="3.5" x2="31.5" y2="59.5"/> </g> <g id="Line_1"> <line class="ps-cls-1" x1="3" y1="31.5" x2="59" y2="31.5"/> </g> </svg> </div></div></div><div class="beagle-list-view-body"> <div id="beagle-class-list" class="beagle-list-view-list"><!-- <div class="beagle-list-view-list-item"> <h5> color-blue </h5> </div>--> </div></div></div></div></div></div></div></div><div id="beagle-context-editor" class="beagle-section beagle-editor-section"> <h3 class="beagle-panel-header">Context Editor</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-empty-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Select an element to edit. </div></div></div></div><div id="beagle-no-option-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> This element has no editable properties. </div></div></div></div><div id="beagle-select-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full"> <div class="beagle-list-view-large"> <div class="beagle-list-view-header"> <div class="beagle-list-view-header-inner"> <h3>Dropdown Menu</h3> <div class="beagle-add-icon"> <svg id="plus_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 63"> <defs> <style>.ps-cls-1{fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 6px;}</style> </defs> <title>plus</title> <g id="Line_2"> <line class="ps-cls-1" x1="31.5" y1="3.5" x2="31.5" y2="59.5"/> </g> <g id="Line_1"> <line class="ps-cls-1" x1="3" y1="31.5" x2="59" y2="31.5"/> </g> </svg> </div></div></div><div class="beagle-list-view-body"> <div id="beagle-select-list" class="beagle-list-view-list"><!-- <div class="beagle-list-view-list-item beagle-flex-row"> <input class="beagle-col-md-6" type="text" placeholder="title" minlength="1" maxlength="200"> <input class="beagle-col-md-6" type="text" placeholder="value" minlength="1" maxlength="200"> </div>--> </div></div></div><div class="beagle-flex-row beagle-row"> <button id="update-select-list" class="beagle-button-flexible-width beagle-col-md-5" message="The dropdown menu has been updated successfully!">Update</button> <button id="cancel-select-list" class="beagle-button-flexible-width beagle-col-md-5">Cancel</button> </div></div></div></div></div><div id="beagle-text-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Text Content <div class="beagle-help-icon" message="Change the text of your paragraph or word here, be aware that any HTML tags within the paragraph will be dessolved."> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <textarea id="beagle-text-content-edit" rows="10" cols="100"></textarea> </div></div></div><div id="beagle-image-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row"> <div class="beagle-panel-row-full-title"> Image Source <div class="beagle-help-icon" message="Input the URL of your image here. For relative paths use ../ or ./"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <input id="beagle-image-source-edit" style="width: 100%;"> </div><div class="beagle-panel-row beagle-panel-row-after"> <div id="beagle-image-select-gallery" class="beagle-list-view-large"> <div class="beagle-list-view-header"> <div class="beagle-list-view-header-inner"> <h3>Gallery</h3> <div class="beagle-add-icon"> <select id="beagle-add-class-select"> <option value="default">---</option> <option value="manually-add-class">manual</option> </select> <svg id="plus_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 63"> <defs> <style>.ps-cls-1{fill: none; stroke: #fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 6px;}</style> </defs> <title>plus</title> <g id="Line_2"> <line class="ps-cls-1" x1="31.5" y1="3.5" x2="31.5" y2="59.5"/> </g> <g id="Line_1"> <line class="ps-cls-1" x1="3" y1="31.5" x2="59" y2="31.5"/> </g> </svg> </div></div></div><div id="beagle-image-select-area" class="beagle-list-view-body"><!-- <div class="beagle-image-select-gallery-image"> <img class="beagle-image-select-target" src="images/Video_illustration2.png"> </div>--> </div></div></div></div></div><div id="beagle-link-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row"> <div class="beagle-panel-row-full-title"> URL Link <div class="beagle-help-icon" message="Input the URL of your link here. For relative paths use ../ or ./"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div></div><div class="beagle-panel-row beagle-panel-row-after"> <input id="beagle-link-edit" style="width: 100%;"> </div></div></div></div></div></div><div id="beagle-view-editor" class="beagle-section beagle-editor-section" style="display: none;"> <h3 class="beagle-panel-header">View</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-view-widget" class="beagle-panel-row-full"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Passive mode, you are free to interact with the page click events. </div></div></div></div></div></div></div><div id="beagle-translation-editor" class="beagle-section beagle-editor-section" style="display: none;"> <h3 class="beagle-panel-header">Translation Editor</h3> <div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-no-option-translation-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row" style="margin-top: 0;"> <div class="beagle-panel-row-full-title"> Please select a text element to translate. </div></div></div></div></div></div><div class="beagle-panel"> <div class="beagle-panel-container"> <div id="beagle-translate-widget" class="beagle-panel-row-full beagle-widget"> <div class="beagle-edit-view"> <div class="beagle-panel-row-full-title"> Add translation key. (no special characters/spaces) <div class="beagle-help-icon" message="Input the URL of your image here. For relative paths use ../ or ./"> <svg id="question_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.14 402.72"> <path id="qm_circle_outline" class="cls-1" d="M202.87,397.48c-108.08,0-196-87.92-196-196s87.92-196,196-196,196,87.92,196,196S311,397.48,202.87,397.48Zm0-358.4c-90.16,0-163,72.8-163,162.4s72.8,163,163,163a162.76,162.76,0,0,0,163-163C365.27,111.87,292.47,39.08,202.87,39.08Z"/> <path id="qm_mark" class="cls-1" d="M197.83,255.8A16.85,16.85,0,0,1,181,239a57.81,57.81,0,0,1,40.88-55.44c10.64-3.36,17.92-12.88,17.36-24.08a37,37,0,0,0-73.92,0,16.8,16.8,0,1,1-33.6,0c1.13-38.64,32.48-70,71.13-70a70,70,0,0,1,70,70A57.81,57.81,0,0,1,232,214.92c-10.64,3.36-17.92,12.88-17.36,24.08a17.23,17.23,0,0,1-16.8,16.8Z"/> <path id="qm_circle" class="cls-1" d="M218,290.52a20.16,20.16,0,1,1-20.16-20.16A20.16,20.16,0,0,1,218,290.52"/> </svg> </div></div><!-- <div class="beagle-panel-row-after"> <div class="beagle-panel-row-full"> <button id="beagle-make-translatable" class="beagle-widget-button">Make Translatable</button> </div></div>--> <div class="beagle-panel-row beagle-panel-row-after"> <input id="beagle-translatable-key-edit" style="width: 100%;"> </div><div class="beagle-panel-row-after" style="margin-top: 20px;"> <div class="beagle-panel-row-full beagle-panel-block"> <span style="color: black; margin-bottom: 5px; display: block;">Import Language File</span> <input type="file" id="select-files" value="Import" style="margin: 0; padding: 0; height: auto;"/> </div></div></div></div></div></div></div></div></div></div><div class="beagle-context-menu"> <span class="beagle-context-menu-item" value="edit">Edit</span> <span class="beagle-context-menu-item" value="edit-html">Edit Code</span> <span class="beagle-context-menu-item" value="deselect">Deselect</span> <span class="beagle-context-menu-item" value="duplicate">Duplicate</span><!-- <span class="beagle-context-menu-item" value="copy">Copy</span> <span class="beagle-context-menu-item" value="cut">Cut</span>--> <span class="beagle-context-menu-item" value="empty">Empty</span> <span class="beagle-context-menu-item" value="delete">Delete</span> </div><div class="beagle-notification"> [message] </div></div>');
}
// all functions ============================================================

function deselectElement() {
    $(".beagle-widget").hide();
    $("#beagle-empty-widget").show();
    $(".beagle-selected").removeClass("beagle-selected");
    clearEleClassList();
    $("#selected-element-type").text("N/A");
    $("#selected-element-name").text("--");
    $("#beagle-empty-widget").show();
}
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
            hasProperty++
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
    }
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
    var elementSelector = elementSelectorInput || "html";
    var selectedBeagleEle = $(".beagle-selected");
    $(".beagle-selected").removeClass("beagle-selected");
    $(".beagle-hovering").removeClass("beagle-hovering");
    var cleansedHtml = $(elementSelector).clone();
    cleansedHtml.find(".beagle-builder").remove();
    cleansedHtml.find(".beagle-translatable").removeClass("beagle-translatable");
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

var url_string = window.location.href
var url = new URL(url_string);
var editorEnabled = url.searchParams.get("editor");
var allImageSrc = [];

if (editorEnabled == "true") {
    if ((window.jQuery)) {
        // document ready ============================================================
        $(document).ready(function () {
            if (!$("#main-html").length && !$("#main-html-content").length) {
                var originalBody = $("body").html();
                $("body").empty();
                $("body").append('<div id="main-html"><div id="main-html-content"></div></div>');
                $("body").find('#main-html-content').append(originalBody);
                embedBuilder();
            }
            collectAllStyleClasses();
            $("#main-html").css("height", "calc(100vh - 70px)").css("margin-top", "70px").css("width", "calc(100vw - 300px)");
            setTimeout(function () {}, 0);
            $("#beagle-add-class-select").empty();
            $("#beagle-add-class-select").append('<option value="default">---</option>').append('<option value="manually-add-class">Customised Class</option>');
            for (var i = 0; i < allRules.length; i++) {
                $("#beagle-add-class-select").append('<option value="' + allRules[i] + '">' + allRules[i] + '</option>');
            }
            
            $("#main-html img").each(function () {
                var imageSrc = $(this).attr("src");
                if (imageSrc && !allImageSrc.includes(imageSrc)) {
                    $("#beagle-image-select-area").append('<div class="beagle-image-select-gallery-image"><img class="beagle-image-select-target" src="' + imageSrc + '"></div>');
                }
            });
            $("#beagle-image-select-area").append('<div style="clear: both;"></div>');
            $("#beagle-html-widget").hide();
            $(".beagle-widget").hide();
            $("#beagle-empty-widget").show();
            $("*[beagle-translatable]").addClass("beagle-translatable");
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
            var contextValue = $(this).attr("value");
            switch (contextValue) {
                case 'edit':
                    selectElement($(rightClickedElement));
                    break;
                case 'edit-html':
                    selectElement($(rightClickedElement));
                    if ($(".beagle-selected").attr("id") != "main-html-content") {
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
                    console.log('Mangoes and papayas are $2.79 a pound.');
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
        });
        $('.beagle-context-menu').bind('contextmenu', function () {
            return false;
        });

        // element click detections
        $("#main-html").bind('contextmenu', function (e) {
            rightClickedElement = e.target;
            console.log("eta: ", rightClickedElement);
            var top = e.pageY + 5;
            var left = e.pageX;
            $(".beagle-context-menu").toggle(100).css({
                top: top + "px",
                left: left + "px",
                display: "flex"
            });
            return false;
        });

        // element hover and selection events
        if (oneClickEdit) {
            $("#main-html").on("click mouseenter mouseleave", "section, header, footer, div, p, h1, h2, h3, h4, h5, h6, h7, h8, h9, span, hr, iframe, button, path, svg, a, select, input, img, title", function (e) {
                var target = $(e.target);
                //            console.log(target);
                if (e.type == "click" && (toolSelected == "edit-tool" || toolSelected == "translate-tool")) {
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
            $(".beagle-selected").attr("src", $(this).attr("src"));
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
        $(document).on("click", ".close-modal-area", function () {
            var inputText = $("#beagle-html-content-edit").val();
            $(".beagle-selected").html(inputText);
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
        $(document).on("click", ".beagle-tool", function () {
            $(".beagle-active-tool").removeClass("beagle-active-tool");
            $(this).addClass("beagle-active-tool");
            toolSelected = $(this).attr("tool");
            console.log(toolSelected);
            $(".beagle-editor-section").hide();
            if (toolSelected == "view-tool") {
                $("#beagle-view-editor").show();
            } else if (toolSelected == "edit-tool") {
                $("#beagle-context-editor").show();
            } else if (toolSelected == "translate-tool") {
                $("#beagle-translation-editor").show();
            }
            
        });
        
        // image source edit events ============================================================
        $(document).on("input propertychange", "#beagle-image-source-edit", function () {
            var inputText = $(this).val();
            $(".beagle-selected").attr("src", inputText);
            $(".beagle-image-select-target-selected").removeClass("beagle-image-select-target-selected");
            if (allImageSrc.includes(inputText)) {
                $( ".beagle-image-select-target[src='" + inputText + "']" ).addClass("beagle-image-select-target-selected");
            }
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
        
        
        
    } else {
        console.warn("BEAGLE UI requires jQuery, please link jQuery before using BEAGLE UI.");
    }
}
/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});



/* Download document button*/
$('.downloadBtn').on('click', function (event) {
// URL of the PDF file (this could be a path to a file on your server or a URL to an external PDF file)
var fileUrl = '/assets/documents/Resume_LuisDominguez.pdf';

console.log(fileUrl);

// Create a new anchor element
var a = document.createElement('a');
a.href = fileUrl;

// Set the file name for download
a.download = 'Resume_LuisDominguez.pdf';

// Append anchor to body.
document.body.appendChild(a);

// Trigger the download by simulating click
a.click();

// Remove the anchor from body
document.body.removeChild(a);
});
	
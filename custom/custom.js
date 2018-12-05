define([
        'base/js/namespace',
        'base/js/promises'
     ], function(Jupyter, promises) {
         promises.app_initialized.then(function(appname) {
             if (appname === 'NotebookApp') {
				 if (document.getElementById('maintoolbar').style.display !="none"){
					 document.getElementById("maintoolbar-container").removeChild(document.getElementById("maintoolbar-container").lastChild)
						}
						IPython.keyboard_manager.command_shortcuts.remove_shortcut('x');
                        IPython.keyboard_manager.command_shortcuts.remove_shortcut('d,d');
                        IPython.keyboard_manager.command_shortcuts.remove_shortcut('enter');
                        IPython.keyboard_manager.command_shortcuts.remove_shortcut('Shift-m');
                        IPython.keyboard_manager.command_shortcuts.remove_shortcut('Shift-v');
					}
         });
     });
	 
	 var innerFlexSpacer = document.getElementsByClassName('flex-spacer');

var aimg1 = document.createElement("a");
aimg1.target = "_blank";
aimg1.rel="noopener noreferrer";
aimg1.href = "https://www.univ-rennes1.fr/";
var img1 = document.createElement("IMG");	
img1.src = "/custom/LogoR.png";
img1.width = 120;
img1.height = 33;
aimg1.appendChild(img1);
innerFlexSpacer[0].appendChild(aimg1);

var aimg2 = document.createElement("a");
aimg2.target = "_blank";
aimg2.rel="noopener noreferrer";
aimg2.href = "https://istic.univ-rennes1.fr/en";
var img2 = document.createElement("IMG");	
img2.src = "/custom/logoisticfr_0.png";
img2.width = 120;
img2.height = 33;
aimg2.appendChild(img2);
innerFlexSpacer[0].appendChild(aimg2);

var aimg3 = document.createElement("a");
aimg3.target = "_blank";
aimg3.rel="noopener noreferrer";
aimg3.href = "https://esir.univ-rennes1.fr/en";
var img3 = document.createElement("IMG");	
img3.src = "/custom/esir_0.png";
img3.width = 120;
img3.height = 33;
aimg3.appendChild(img3);
innerFlexSpacer[0].appendChild(aimg3);

var aimg4 = document.createElement("a");
aimg4.target = "_blank";
aimg4.rel="noopener noreferrer";
aimg4.href = "https://www.ltsi.univ-rennes1.fr/";
var img4 = document.createElement("IMG");	
img4.src = "/custom/logoltsi_600px.jpg";
img4.width = 120;
img4.height = 33;
aimg4.appendChild(img4);
innerFlexSpacer[0].appendChild(aimg4);

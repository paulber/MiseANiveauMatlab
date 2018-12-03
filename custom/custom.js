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
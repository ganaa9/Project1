sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            }
        });

       
        
    });
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function(Controller, MessageToast) {
        "use strict";
    
        return Controller.extend("sap.ui.webc.main.sample.ListBasic.C", {
            handleItemClick: function(event) {
                var selectedItem = event.getParameter("listItem");
                var selectedText = selectedItem.getText();
                MessageToast.show("Selected item: " + selectedText);
            }
        });
    });
    
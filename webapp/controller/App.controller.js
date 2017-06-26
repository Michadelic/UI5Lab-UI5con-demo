sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("ui5lab.app.QRLabApp.controller.App", {
		onInit: function () {
			var oViewModel = new JSONModel({
				data0: 55,
				data1: 9,
				data2: 33,
				data3: 20,
				buttonClicked: false
			});
			this.getView().setModel(oViewModel, "view");

			var newValue= function (oModel) {
				var oData = oModel.getData();
				for (var i=0;i<4;i++) {
					oData["data" + i] =  Math.random() * 100.0;
				}
				oModel.setData(oData);
			};

			var interval = 1000;
			setInterval(newValue, interval,this.getView().getModel("view"));
						},

		buttonPressed: function(){
			var oModel=this.getView().getModel("view");
			var oData = oModel.getData();
			oData["buttonClicked"] = true;
			oModel.setData(oData);
		}
	});
});
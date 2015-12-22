'use strict'

angular
	.module('app')
	.controller('GaleriaImagenesCtrl',['$scope','$http','FileUploader','config','GaleriaImagenesService','TextosService','imagenes', function($scope,$http,FileUploader,config,GaleriaImagenesService,TextosService,imagenes){
		$scope.imagenes = imagenes;
	  $scope.imagenSeleccionada = {};
		$scope.inputSearchImage = $("#inputSearchImage");
		$scope.addImagen = true;
		
		$scope.errorText = "";

		$('#inputSearchImage').on('change', function (event, files, label) {
		    var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '')
		   	$scope.imagenSeleccionada.imagenAgregada = file_name;
		});

		var uploader = $scope.uploader = new FileUploader({
            url: config.path + 'service/manager/upload.php'
        });

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

    $scope.uploadImagen = function() {
      uploader.uploadAll();
    }

    $scope.postImagen = function() {
      //$scope.imagenSeleccionada.codigoTexto = "IMG_GALLERY_IMG_" + $scope.imagenSeleccionada.id;
      $scope.imagenSeleccionada.orden = $scope.imagenes.length + 1;
      GaleriaImagenesService.postImagen($scope.imagenSeleccionada).then(function(response) {
            if(response.status==200) {
              console.log("Se agregó correctamente");
              $scope.resetFormFields();
              $scope.reloadImagenes();
            }
      });
    }

    $scope.editImagen = function() {
      GaleriaImagenesService.editImagen($scope.imagenSeleccionada).then(function(response) {
            if(response.status==200) {
              console.log("Se editó correctamente");
              $scope.resetFormFields();
              $scope.reloadImagenes();
            }
          });
    }

    $scope.deleteImagen = function(id) {
        GaleriaImagenesService.deleteImagen(id).success(function(response) {
          $scope.reloadImagenes();
        });
      }

    $scope.reloadImagenes = function() {
      GaleriaImagenesService.getImagenes().then(function(response){
        $scope.imagenes = response;
      });
    }

		$scope.resetFormFields = function() {
			$scope.imagenSeleccionada = {};
			$scope.cleanErrorText();
			//$scope.inputSearchImage.replaceWith( $scope.inputSearchImage = $scope.inputSearchImage.clone( true ) );
			$scope.add(true);
		}

    $scope.add = function(value){
      $scope.addImagen = value;
    }

		$scope.cleanErrorText = function() {
			$scope.errorText = "";
		}

		uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
        console.info('onComplete');
        $scope.postImagen();
    };
	}]);
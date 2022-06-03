jQuery(document).ready(function () {
    $('input[type="radio"]').click(function () {
        if ($(this).attr("value") == "Residential") {
            $('#ElevatorsHTMLOutput').val('');
            $('#apartments').show();
            $('#floors').show();
            $('#basements').show();
            $('#businesses').hide();
            $('#parking').hide();
            $('#cages').hide();
            $('#companies').hide();
            $('#occupants').hide();
            $('#hours').hide();

            $(function () {
                var ApartmentsInput = $('#apartmentsinput'),
                    FloorInput = $('#floorsinput'),
                    BasementInput = $('#basementsinput'),
                    ResidentialShafts = $('#ElevatorsHTMLOutput');                    
                ApartmentsInput.on('input', function () {
                    ResidentialShafts.val(((ApartmentsInput.val() / 6) * (Math.floor(((parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 20) + 1)).toFixed())
                });
                FloorInput.on('input', function () {
                    ResidentialShafts.val(((ApartmentsInput.val() / 6) * (Math.floor(((parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 20) + 1)).toFixed())
                });
                BasementInput.on('input', function () {
                    ResidentialShafts.val(((ApartmentsInput.val() / 6) * (Math.floor(((parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 20) + 1)).toFixed())
                });
            });
        }
        else if ($(this).attr("value") == "Commercial") {
            $('#ElevatorsHTMLOutput').val('');
            $('#apartments').hide();
            $('#floors').show();
            $('#basements').show();
            $('#businesses').show();
            $('#parking').show();
            $('#cages').show();
            $('#companies').hide();
            $('#occupants').hide();
            $('#hours').hide();

            $(function () {
                var $src = $('#cagesinput'),
                    $dst = $('#ElevatorsHTMLOutput');
                $src.on('input', function () {
                    $dst.val($src.val());
                });
            });
           
        }
        else if ($(this).attr("value") == "Corporate") {
            $('#ElevatorsHTMLOutput').val('');
            $('#apartments').hide();
            $('#floors').show();
            $('#basements').show();
            $('#businesses').hide();
            $('#parking').show();
            $('#cages').hide();
            $('#companies').show();
            $('#occupants').show(); 
            $('#hours').hide();
           
            $(function (){
                var OccupantInput = $('#occupantsinput'), 
                    FloorInput = $('#floorsinput'),
                    BasementInput = $('#basementsinput'),
                    CorporateShafts = $('#ElevatorsHTMLOutput');                                 
                OccupantInput.on('input', function(){                  
                    CorporateShafts.val(((OccupantInput.val() * (parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 1000).toFixed());
                });
                FloorInput.on('input', function(){                  
                    CorporateShafts.val(((OccupantInput.val() * (parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 1000).toFixed());
                });       
                BasementInput.on('input', function(){                  
                    CorporateShafts.val(((OccupantInput.val() * (parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 1000).toFixed());
                });                                           
            });
        }
        else if ($(this).attr("value") == "Hybrid") {
            $('#ElevatorsHTMLOutput').val('');
            $('#apartments').show();
            $('#floors').show();
            $('#basements').show();
            $('#businesses').show();
            $('#parking').hide();
            $('#cages').hide();
            $('#companies').hide();
            $('#occupants').show();
            $('#hours').show();

            $(function (){
                var OccupantInput = $('#occupantsinput'), 
                    FloorInput = $('#floorsinput'),
                    CorporateShafts = $('#ElevatorsHTMLOutput'), 
                    BasementInput = $('#basementsinput');                                
                OccupantInput.on('input', function(){                    
                    CorporateShafts.val(((OccupantInput.val() * (parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 1000).toFixed());
                });  
                FloorInput.on('input', function(){                  
                    CorporateShafts.val(((OccupantInput.val() * (parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 1000).toFixed());
                });     
                BasementInput.on('input', function(){                  
                    CorporateShafts.val(((OccupantInput.val() * (parseFloat(FloorInput.val()) + parseFloat(BasementInput.val()))) / 1000).toFixed());
                });                                           
            });
        }
        if ($(this).attr("value") == "Standard") {
           $('#PricePerElevatorOutput').val(7565);
           $('#InstallationFeeOutput').val('10%');
           $('#HiddenFeeOutput').val(.10);

           $(function (){
               var PricePerUnit = $('#PricePerElevatorOutput'),
                    ElevatorsNeeded = $('#ElevatorsHTMLOutput'),
                    InstallationFee = $('#HiddenFeeOutput'),
                    FinalPrice = $('#FinalPriceOutput'),
                    ElevatorPrice = $('#TotalElevatorCostOutput'),
                    InstallationCost = $('#InstallationCostOutput'),
                    StandardRadio = $('#RadioStandard');
                StandardRadio.on('click', function(){
                    ElevatorPrice.val(ElevatorsNeeded.val() * PricePerUnit.val())
                });
                StandardRadio.on('click', function(){
                    InstallationCost.val(InstallationFee.val() * ElevatorPrice.val())
                });
                StandardRadio.on('click', function(){
                    FinalPrice.val(parseFloat(InstallationCost.val()) + parseFloat(ElevatorPrice.val()))
                });
           });
        };
        if ($(this).attr("value") == "Premium") {
            $('#PricePerElevatorOutput').val(12345);
            $('#InstallationFeeOutput').val('13%');
            $('#HiddenFeeOutput').val(.13);

            $(function (){
                var PricePerUnit = $('#PricePerElevatorOutput'),
                ElevatorsNeeded = $('#ElevatorsHTMLOutput'),
                InstallationFee = $('#HiddenFeeOutput'),
                FinalPrice = $('#FinalPriceOutput'),
                ElevatorPrice = $('#TotalElevatorCostOutput'),
                InstallationCost = $('#InstallationCostOutput'),
                PremiumRadio = $('#RadioPremium');
            PremiumRadio.on('click', function(){
                ElevatorPrice.val(ElevatorsNeeded.val() * PricePerUnit.val())
                });
                PremiumRadio.on('click', function(){
                    InstallationCost.val(InstallationFee.val() * ElevatorPrice.val())
                });
                PremiumRadio.on('click', function(){
                    FinalPrice.val(parseFloat(InstallationCost.val()) + parseFloat(ElevatorPrice.val()))
                });

            });
        };
        if ($(this).attr("value") == "Excelium") {
            $('#PricePerElevatorOutput').val(15400);
            $('#InstallationFeeOutput').val('16%');
            $('#HiddenFeeOutput').val(.16);

            $(function (){
                var PricePerUnit = $('#PricePerElevatorOutput'),
                ElevatorsNeeded = $('#ElevatorsHTMLOutput'),
                InstallationFee = $('#HiddenFeeOutput'),
                FinalPrice = $('#FinalPriceOutput'),
                ElevatorPrice = $('#TotalElevatorCostOutput'),
                InstallationCost = $('#InstallationCostOutput'),
                ExceliumRadio = $('#RadioExcelium');
            ExceliumRadio.on('click', function(){
                ElevatorPrice.val(ElevatorsNeeded.val() * PricePerUnit.val())
                });
                ExceliumRadio.on('click', function(){
                    InstallationCost.val(InstallationFee.val() * ElevatorPrice.val())
                });
                ExceliumRadio.on('click', function(){
                    FinalPrice.val(parseFloat(InstallationCost.val()) + parseFloat(ElevatorPrice.val()))
                });     
       
            });
        };
    });
});






$('.carousel').carousel();

// profile image upload
$('.editProfile').on('click', function() {
    $('.profile-default').css('display', 'none');
    $('.editProfile').css('display', 'none');
    $('.profile-replace').css('display', 'block');
});

$('.cancelEditProfile').on('click', function() {
    $('.profile-default').css('display', 'block');
    $('.editProfile').css('display', 'block');
    $('.profile-replace').css('display', 'none');
});

$("#profileImage").click(function(e) {
    $("#imageUpload").click();
});

// reporting Image Upload
$('#reportingAdd').on('click', function() {
    $('.reporting-default').css('display', 'none');
    $('#reportingAdd').css('display', 'none');
    $('.reporting-replace-add').css('display', 'block');
});

$('.canceladdReporting').on('click', function() {
    $('.reporting-default').css('display', 'block');
    $('#reportingAdd').css('display', 'block');
    $('.reporting-replace-add').css('display', 'none');
});

$("#reportingImage").click(function(e) {
    $("#reportingImageUpload").click();
});

// reporting Image Upload
$('.reportingEdit').on('click', function() {
    $('.reporting-default').css('display', 'none');
    $('#reportingAdd').css('display', 'none');
    $('.reporting-replace-add').css('display', 'block');
});

$('.canceladdReporting').on('click', function() {
    $('.reporting-default').css('display', 'block');
    $('#reportingAdd').css('display', 'block');
    $('.reporting-replace-add').css('display', 'none');
});

$("#reportingImage").click(function(e) {
    $("#reportingImageUpload").click();
});


$('#directAdd').on('click', function() {
    $('.direct-default').css('display', 'none');
    $('#directAdd').css('display', 'none');
    $('.direct-replace-add').css('display', 'block');
});

$('.canceladdReporting').on('click', function() {
    $('.direct-default').css('display', 'block');
    $('#directAdd').css('display', 'block');
    $('.direct-replace-add').css('display', 'none');
});

$("#directImage").click(function(e) {
    $("#directImageUpload").click();
});


// direct Image Upload
$('.directEdit').on('click', function() {
    $('.direct-default').css('display', 'none');
    $('#directAdd').css('display', 'none');
    $('.direct-replace-add').css('display', 'block');
});

$('.canceladdDirect').on('click', function() {
    $('.direct-default').css('display', 'block');
    $('#directAdd').css('display', 'block');
    $('.direct-replace-add').css('display', 'none');
});

$("#directImage").click(function(e) {
    $("#directImageUpload").click();
});

$(document).ready(function() {
    $('.editForm').on('click', function() {
        $('#formsidebar').toggleClass('open');
        $('#formsidebar').css('display', 'block');
        $('#formsidebar').css('right', '0px');
    });

    $('.scorecarddesc').on('click', function() {
        $('#scorecardsidebar').toggleClass('open');
        $('#scorecardsidebar').css('display', 'block');
        $('#scorecardsidebar').css('right', '0px');
    });

    $('.perspectivedesc').on('click', function() {
        $('#perspectivesidebar').toggleClass('open');
        $('#perspectivesidebar').css('display', 'block');
        $('#perspectivesidebar').css('right', '0px');
    });

    $('.objectivedesc').on('click', function() {
        $('#objectivesidebar').toggleClass('open');
        $('#objectivesidebar').css('display', 'block');
        $('#objectivesidebar').css('right', '0px');
    });

    $('.kpidesc').on('click', function() {
        $('#kpisidebar').toggleClass('open');
        $('#kpisidebar').css('display', 'block');
        $('#kpisidebar').css('right', '0px');
    });
});

$('.cancelEditScorecard').on('click', function() {
    $('#scorecardsidebar').css('display', 'none');
    $('.overlay').css('display', 'none');
});

$('.cancelEditPerspective').on('click', function() {
    $('#perspectivesidebar').css('display', 'none');
    $('.overlay').css('display', 'none');
});
$('.cancelEditObjective').on('click', function() {
    $('#objectivesidebar').css('display', 'none');
    $('.overlay').css('display', 'none');
});
$('.cancelEditKpi').on('click', function() {
    $('#kpisidebar').css('display', 'none');
    $('.overlay').css('display', 'none');
});

$('.checkbox').change(function() {
    $('.toggleDiv').toggle(this.checked);
    $('.btn-new-persp').toggle(this.checked);
}).change();

$('.switchTable').on('click', function() {
    $('.tableview').css('display', 'block');
    $('.tableview').css('display', '');
    $('.tileview').css('display', 'none');
    $('.switchTable').css('display', 'none');
    $('.switchTile').css('display', 'block');
});


$('.switchTile').on('click', function() {
    $('.tileview').css('display', 'block');
    $('.tileview').css('display', '');
    $('.tableview').css('display', 'none');
    $('.switchTile').css('display', 'none');
    $('.switchTable').css('display', 'block');
});

/*********POPUP***********/

$(function () {
    $('.js-modal-buttons .btn').on('click', function () {
        var color = $(this).data('color');
        $('#mdModal .modal-content').removeAttr('class').addClass('modal-content modal-col-' + color);
        $('#mdModal').modal('show');
    });
});

$('.date_pickers').daterangepicker({
    drops: 'up',
    opens: 'center',
    timePicker: false,
    autoApply: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(48, 'hour'),
    locale: {
        format: 'MMM DD, YYYY'
    }
});          

$('#kpi_threshold').on('change', function(){
    $(this).val()=='option_1' ? $('.color_picks_1').css('display', 'block') : $('.color_picks_1').css('display', 'none');
    $(this).val()=='option_2' ? $('.color_picks_2').css('display', 'block') : $('.color_picks_2').css('display', 'none');
    $(this).val()=='option_3' ? $('.color_picks_3').css('display', 'block') : $('.color_picks_3').css('display', 'none');
});



// $(function() {
//     $('.tableBody').slimscroll({
//         height: '385px',
//         size: '3px'
//     });
// });


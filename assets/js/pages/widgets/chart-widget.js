'use strict';
var class1, fill, empty, color;
$(document).ready(function() {
    initCardChart();
    // updateChart(fill="35", empty="65", color="red");
});

function initCardChart() {

    //Chart Pie
    $('.chart_yellow.chart-pie').sparkline([50, 50], {
        type: 'pie',
        height: '30px',
        sliceColors: ['#ffd500', '#ffffff']
    });

    $('.chart_green.chart-pie').sparkline([85, 15], {
        type: 'pie',
        height: '30px',
        sliceColors: ['#1aa243', '#ffffff']
    });

    $('.chart_orange.chart-pie').sparkline([25, 75], {
        type: 'pie',
        height: '30px',
        sliceColors: ['#e84343', '#ffffff']
    });

}

function updateChart(id, fill, empty, color) {
    $('#' + id).sparkline([fill, empty], {
        type: 'pie',
        tooltipFormat: '{{offset:offset}} ({{percent}}%)',
        tooltipValueLookups: {
            'offset': {
                0: fill,
                1: empty,
            }
        },
        height: '30px',
        sliceColors: [color, '#ffffff']
    });

    $('.chart-pie').children(':first-child').css('border', '1px solid #e9ecef').css('border-radius', '50%');
}

$(function() {
    $('#chat_user').slimscroll({
        height: '590px',
        size: '5px'
    });
});

$(function () {
	$('#initiate_sidebar').slimscroll({
		height: '597px',
		size: '3px'
	});
});

$(function() {
    // $('#comment-conversation').slimscroll({
    //     height: '267px',
    //     size: '3px'
    // });

    $('#comment-conversation').slimscroll({
        height: '262px',
        size: '3px'
    });

    $('.milestones-box, .sub-ini-box, .activities-box').slimscroll({
        height: '340px',
        size: '3px'
    });

    $('.chart-pie').children(':first-child').css('border', '1px solid #e9ecef').css('border-radius', '50%');
});

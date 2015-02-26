// Forms Demo
// ----------------------------------- 


(function(window, document, $, undefined){

  if (! $.fn['slider']    ||
      ! $.fn['chosen']    ||
      ! $.fn['inputmask'] ||
      ! $.fn['filestyle'] ||
      ! $.fn['wysiwyg'] ) return;

  $(function(){

    // BOOTSTRAP SLIDER CTRL
    // ----------------------------------- 

    $('[data-ui-slider]').slider();

    // CHOSEN
    // ----------------------------------- 

    $('.chosen-select').chosen();

    // MASKED
    // ----------------------------------- 

    $('[data-masked]').inputmask();

    // FILESTYLE
    // ----------------------------------- 

    $('.filestyle').filestyle();

    // WYSIWYG
    // ----------------------------------- 

    $('.wysiwyg').wysiwyg();


    // DATETIMEPICKER
    // ----------------------------------- 

    $('#datetimepicker1').datetimepicker({
      icons: {
          time: 'fa fa-clock-o',
          date: 'fa fa-calendar',
          up: 'fa fa-chevron-up',
          down: 'fa fa-chevron-down',
          previous: 'fa fa-chevron-left',
          next: 'fa fa-chevron-right',
          today: 'fa fa-crosshairs',
          clear: 'fa fa-trash'
        }
    });
    // only time
    $('#datetimepicker2').datetimepicker({
        format: 'LT'
    });
    // View mode
    $('#datetimepicker3').datetimepicker({
        viewMode: 'years',
       format: 'MM/YYYY'
    });

  });

})(window, document, window.jQuery);
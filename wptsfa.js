/**
 * Class Name: wpts_fontawesome
 * GitHub URI: https://github.com/mattiasghodsian/wpts_fontawesome
 * Description: A custom icon picker (FontAwesome) for wp_theme_settings
 * Author: Mattias Ghodsian
 * Author URI: http://www.nexxoz.com
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Version: 1.0.0
 */
(function( $ ){
  $.fn.wptsFa = function() {
    return this.each(function() { 
      var mainE = $(this);
      var mainName = $(mainE).attr('name');
      $(mainE).hide();

      $( '<div class="wptsFA-container" id="'+mainName+'"><div class="wptsFA-icon"></div><div class="wptsFA-button">Select icon</div><div class="wptsFA-icons"></div></div>').insertBefore(mainE);

      $.get( 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/src/icons.yml', function( data ) {
        var obj = jsyaml.load( data );
        jQuery.each( obj['icons'], function( i, val ) {
           $('#' + mainName + ' .wptsFA-icons').append('<i class="fa fa-'+val['id']+'"></i>');
        });
      });

      if ($(this).length > 0) {
        $('#' + mainName + ' .wptsFA-icon').html('<i class="fa ' + $(this).val() + '"></i>');
      }

      $('#' + mainName).click(function(){
        $(this).toggleClass('active');
      });

      $(document).on("click",'#' + mainName + ' .wptsFA-icons > i',function() {
        var id = $(this).attr('class').replace('fa','');
        $(mainE).val(id);
        $('#' + mainName + ' .wptsFA-icon').html('<i class="fa ' + id + '"></i>');
      });

    });
  }; 
})( jQuery );

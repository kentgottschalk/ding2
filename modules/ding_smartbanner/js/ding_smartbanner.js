/**
 * Initiate SmartBanner object.
 */
(function () {
  "use strict";

  Drupal.behaviors.ding_smartbanner = {
    attach: function(context, settings) {
      var ding_smartbanner = settings.ding_smartbanner;
      var store = {};
      var price = {};

      var os = ['android', 'ios', 'windows'];
      if (Drupal.settings.ding_smartbanner) {
        os.forEach(function (item) {
          if (Drupal.settings.ding_smartbanner[item] !== undefined) {
            store[item] = ding_smartbanner[item].description;
            price[item] = ding_smartbanner[item].price;
          }
        });

        new SmartBanner({
          daysHidden: Drupal.settings.ding_smartbanner.days_hidden,   // days to hide banner after close button is clicked (defaults to 15)
          daysReminder: Drupal.settings.ding_smartbanner.days_reminder, // days to hide banner after "VIEW" button is clicked (defaults to 90)
          appStoreLanguage: Drupal.settings.ding_smartbanner.app_store_language, // language code for the App Store (defaults to user's browser language)
          title: Drupal.settings.ding_smartbanner.app_title,
          author: Drupal.settings.ding_smartbanner.app_author,
          button: Drupal.settings.ding_smartbanner.button_name,
          store: store,
          price: price,
          icon: ding_smartbanner.app_icon.icon_path
        });
      }

    }
  };
})(jQuery);

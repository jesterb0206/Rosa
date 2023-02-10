const $icon = $('.menu-btn');
const $menu = $('.overlay');

$icon.on('click', function () {
  if (!$menu.hasClass('active')) {
    $menu.fadeIn().toggleClass('active');
  } else {
    $menu.fadeOut().removeClass('active');
  }
});

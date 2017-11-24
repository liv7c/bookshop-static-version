import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuContent = $('.main-navigation__nav');
    this.menuIcon = $('.main-navigation__menu-icon');
    this.events(); //call events method
  }

  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuContent.toggleClass('main-navigation__nav--is-visible');
    this.menuIcon.toggleClass('main-navigation__menu-icon--close-x');
  }
}

export default MobileMenu;

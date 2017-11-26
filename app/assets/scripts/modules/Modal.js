import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    // clicking the openModalButton
    this.openModalButton.click(this.openModal.bind(this));
    // clicking the closeModalButton
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    return false; //prevents browser from scrolling to top of page
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }
}

export default Modal;

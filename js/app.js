const $ = (elem) => document.querySelector(elem)

const hamburgerButton = $('.js-ham-button')
const backdrop = $('.js-backdrop')

const toggleSidebarAndBackdrop = function () {
  document.body.classList.toggle('sidenav-open')
  backdrop.classList.toggle('backdrop--active')
}

hamburgerButton?.addEventListener('click', toggleSidebarAndBackdrop)
backdrop?.addEventListener('click', toggleSidebarAndBackdrop)

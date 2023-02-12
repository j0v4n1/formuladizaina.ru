(()=>{"use strict";var e=document.querySelector(".nav-menu__burger-menu"),t=document.querySelector(".nav-menu-small__overlay"),n=document.querySelector(".nav-menu-small"),r=document.querySelector(".nav-menu-small__close-button"),o=document.querySelector(".popup_type_image"),c=document.querySelector(".popup__image"),s=document.querySelector(".popup_type_form"),i=Array.from(document.querySelectorAll(".button_type_popup")),a=Array.from(document.querySelectorAll(".popup__close-button")),u=Array.from(document.querySelectorAll(".popup")),l=document.querySelector(".popup__title"),d=document.querySelector(".messenger__button"),m=document.querySelector(".messenger__links"),p=document.querySelector("#overlay"),_=document.querySelector(".messenger"),f=Array.from(document.querySelectorAll(".messenger__link")),y=Array.from(document.querySelectorAll(".gallery__main-item")),v=document.querySelector(".our-production__slider-button_type_next"),S=document.querySelector(".our-production__slider-button_type_prev"),q=document.querySelector(".our-production__slider-wrapper"),g=document.querySelector(".our-production__slider-wrapper").offsetWidth,E=document.querySelector(".popup__button-confirmation"),L=document.querySelector(".popup_type_send-form-confirmation"),b=document.querySelector(".popup__title_type_send-form-confirmation"),h=Array.from(document.querySelectorAll(".form__submit")),k=Array.from(document.querySelectorAll("input[name=agreement]")),A=document.querySelector(".root"),C=window.innerWidth-A.offsetWidth+"px";a.forEach((function(e){e.addEventListener("click",(function(){var t=e.closest(".popup");B(t)}))})),u.forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.contains("popup")&&B(e)}))}));var w=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");B(t)}},x=function(e){e.classList.add("popup_opened"),A.classList.add("root_scroll_disabled"),A.style.paddingRight=C,_.style.paddingRight=C,window.addEventListener("keydown",w)},B=function(e){e.classList.remove("popup_opened"),setTimeout((function(){A.classList.remove("root_scroll_disabled"),A.style.paddingRight="0",_.style.paddingRight="0"}),200),window.removeEventListener("keydown",w)},R=function(e){return e.some((function(e){return!e.validity.valid}))},X=function(e){var t=e.querySelector(".form__submit");t.classList.add("form__submit_disabled"),t.disabled=!0};function M(e,t){t.target.closest(".form").disabled=!e}e.addEventListener("click",(function(){t.classList.add("nav-menu-small__overlay_active"),n.classList.add("nav-menu-small_active")})),r.addEventListener("click",(function(){t.classList.remove("nav-menu-small__overlay_active"),n.classList.remove("nav-menu-small_active")})),i.forEach((function(e){e.addEventListener("click",(function(){l.textContent=e.textContent,x(s)}))})),f.forEach((function(e){e.addEventListener("click",(function(){m.classList.remove("messenger__links_active"),p.style.display="none"}))})),document.addEventListener("click",(function(e){"overlay"===e.target.id&&(m.classList.remove("messenger__links_active"),p.style.display="none"),e.target===d&&(m.classList.toggle("messenger__links_active"),p.style.display="block")})),y.forEach((function(e){e.addEventListener("click",(function(e){x(o),c.src=e.target.src}))}));var W,j=0;v.addEventListener("click",(function(){j+=g,q.style.transform="translateX(-".concat(j,"px)"),j===4*g&&(q.style.transform="translateX(0)",j=0)})),S.addEventListener("click",(function(){j-=g,q.style.transform="translateX(-".concat(j,"px)"),j===-g&&(q.style.transform="translateX(-".concat(3*g,"px)"),j=3*g)})),E.addEventListener("click",(function(){B(L)})),h.forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault();var n=e.closest(".form");M(!1,t);var r=new FormData(n);fetch("sendmail.php",{method:"POST",body:r}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))})).then((function(e){x(L),b.textContent=e.message})).catch((function(e){b.textContent=e.message})).finally((function(){M(!0,t),X(n),document.querySelector(".popup_opened")&&B(n.closest(".popup"))})),n.reset()}))})),W={formElement:".form",inputElement:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_disabled",inputErrorClass:"form__input_type_error",errorClass:".form__input-error"},Array.from(document.querySelectorAll(W.formElement)).forEach((function(e){Array.from(e.querySelectorAll(W.inputElement)).forEach((function(t){!function(e,t,n){var r=Array.from(e.querySelectorAll(n.inputElement));t.addEventListener("input",(function(){!function(e,t,n,r){t.validity.patternMismatch?t.setCustomValidity(n):t.setCustomValidity(""),t.validity.valid?function(e,t,n){t.classList.remove(n.inputErrorClass),e.querySelector(".".concat(t.id,"-error")).textContent=""}(e,t,r):function(e,t,n,r){t.classList.add(r.inputErrorClass),e.querySelector(".".concat(t.id,"-error")).textContent=n}(e,t,t.validationMessage,r)}(e,t,t.dataset.errorMessage,n),function(e,t,n){var r=t.querySelector(n.submitButtonSelector),o=t.querySelector("input[name=agreement]");e||!o.checked?(r.classList.add(n.inactiveButtonClass),r.disabled=!0):(r.classList.remove(n.inactiveButtonClass),r.disabled=!1)}(R(r),e,n)}))}(e,t,W)}))})),k.forEach((function(e){e.addEventListener("change",(function(e){var t,n=e.target.closest(".form"),r=n.querySelector("input[name=agreement]");R(Array.from(n.querySelectorAll(".form__input")))||!r.checked?X(n):((t=n.querySelector(".form__submit")).classList.remove("form__submit_disabled"),t.disabled=!1)}))}))})();
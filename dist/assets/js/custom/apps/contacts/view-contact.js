﻿"use strict";var KTAppContactView={init:function(){(()=>{const t=document.getElementById("kt_contact_delete");t&&t.addEventListener("click",(n=>{n.preventDefault(),Swal.fire({text:"Delete contact confirmation",icon:"warning",buttonsStyling:!1,showCancelButton:!0,confirmButtonText:"بله حذفش کن!",cancelButtonText:"خیر",customClass:{confirmButton:"btn btn-danger",cancelButton:"btn btn-active-light"}}).then((function(n){n.value?Swal.fire({text:"Contact has been deleted!",icon:"success",buttonsStyling:!1,confirmButtonText:"باشه فهمیدم!",customClass:{confirmButton:"btn btn-primary"}}).then((function(n){n.value&&(window.location=t.getAttribute("data-kt-redirect"))})):"cancel"===n.dismiss&&Swal.fire({text:"Contact has not been deleted!.",icon:"error",buttonsStyling:!1,confirmButtonText:"باشه فهمیدم!",customClass:{confirmButton:"btn btn-primary"}})}))}))})()}};KTUtil.onDOMContentLoaded((function(){KTAppContactView.init()}));
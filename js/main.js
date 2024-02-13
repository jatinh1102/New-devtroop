$(document).ready(function () {
  $(window).scrollTop(0);
});

window.onscroll = () => {
  toggleTopButton();
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-up").classList.remove("d-none");
  } else {
    document.getElementById("back-to-up").classList.add("d-none");
  }
}

$(function () {
  $("#footer").load("Footer.html");
  $("#cta-modal").load("CTA-Modal.html");
  $("#Enqury").load("Succesfuly-Send-Enqury.html");
  $("#get-quote").load("Get-a-Quote-Modal.html");
  $("#header").load("header.html");
  $("#careers-form").load("Careers-form.html");
  $("#case-study-info").load("case-study-info.html");
  $("#developing-process").load("developing-process.html");
});

  // See More togglebox
  function togglebox(boxId) {
      var box = document.getElementById(boxId);
      if (box.style.display === 'none') {
          box.style.display = 'block'; // Show the box
      } else {
          box.style.display = 'none'; // Hide the box
      }
  }

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#navbar-top").addClass("fixed-top");
  } else {
    $("#navbar-top").removeClass("fixed-top");
  }
});

const areas = document.querySelectorAll(".text-area");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);

    const id = entry.target.getAttribute("id");

    if (entry.isIntersecting) {
      document
        .querySelector('a[href="#' + id + '"]')
        .classList.toggle("active-link");
    } else {
      document
        .querySelector('a[href="#' + id + '"]')
        .classList.remove("active-link");
    }
  });
});

areas.forEach((area) => {
  observer.observe(area);
});

$(document).ready(function(){
  $('.cookie-bar').on('click', function(){
  $(this).removeClass('d-none').addClass('d-none');
  $('.cookie-bar').fadeOut();
        createCookie("cookie_accepted", 1, 365);
  });
  });



function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

$(document).ready(function() {
    var advMedium = getParameterByName('advm');
    if (advMedium != null) {
        $('input[name=advm]').val(advMedium);
        createCookie('advm', advMedium, 1);
    } else {
        advMedium = readCookie('advm');
        $('input[name=advm]').val(advMedium);
    }
    var nodeCount = document.getElementsByName('ft').length;
    for (count = 0; count < nodeCount; count++) {
        document.getElementsByName('ft')[count].value = window.location.href;
    }
});

let items = document.querySelectorAll(".faq-main .faq-item");
items.forEach(function (t) {
	t.addEventListener("click", function (e) {
		items.forEach(function (e) {
			e !== t || e.classList.contains("faq-item-show")
				? e.classList.remove("faq-item-show")
				: e.classList.add("faq-item-show");
		});
	});
});

$("#loder").delay(500).hide(0);
let menuToggle = document.querySelector(".toggle");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
};

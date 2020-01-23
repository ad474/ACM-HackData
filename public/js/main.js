jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},0, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 0, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });

  // Buy tickets select the ticket type on click
  $('#buy-ticket-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var ticketType = button.data('ticket-type');
    var modal = $(this);
    modal.find('#ticket-type').val(ticketType);
  })

  /* custom code
  var kursorx = new kursor({
    type: 1,
    color: 'rgb(183,59,42)',
    removeDefaultCursor: true
  });
  */


  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800

        }


      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 250,
        "color": "fff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }

      }
    },
    "retina_detect": true

  });


  if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
  firebase.initializeApp({
    "projectId": "hackdata-3db9b",
    "appId": "1:405958797889:web:2b95d7d48fe59b2cdeb4c0",
    "databaseURL": "https://hackdata-3db9b.firebaseio.com",
    "storageBucket": "hackdata-3db9b.appspot.com",
    "locationId": "asia-northeast1",
    "apiKey": "AIzaSyAIk17fkMiY9nWF_2i5I1nyUiFo4acrkAA",
    "authDomain": "hackdata-3db9b.firebaseapp.com",
    "messagingSenderId": "405958797889"
  });

  const db=firebase.firestore();

  const form1 = document.getElementById("myform");


  $.validator.setDefaults ({
    errorClass: 'text-danger',
    highlight: function (element) {
      $(element)
          .closest('.form-control')
          .addClass('is-invalid');
    },
    unhighlight: function (element) {
      $(element)
          .closest('.form-control')
          .removeClass('is-invalid');
    }
  });


  $("#myform").validate({
    rules: {
      teamname:{
        required: true,
        minlength: 3,

      },
      name1:{
        required: true,
        minlength: 2,

      },
      name2:{
        required: true,
        minlength: 2,

      },
      name3:{
        required: true,
        minlength: 2,

      },
      college1:{
        required: true,
        minlength: 3,

      },
      college2:{
        required: true,
        minlength: 3,

      },
      college3:{
        required: true,
        minlength: 3,

      },

      email1:{
        required: true,
        email: true
      },
      email2:{
        required: true,
        email: true
      },
      email3:{
        required: true,
        email: true
      },
      number1:{
        required: true,
        minlength: 10,
        maxlength: 11
      },
      number2:{
        required: true,
        minlength: 10,
        maxlength: 11
      },
      number3:{
        required: true,
        minlength: 10,
        maxlength: 11
      },
      github1:{
        required: true
      },
      github2:{
        required: true
      },
      github3:{
        required: true
      }



    },
    messages: {
      teamname: {
        required: "Please enter a name",
        minlength: "Min length is 3"
      },
      name1: {
        required: "Please enter a name",
        minlength: "Please enter a valid name"
      },
      name2: {
        required: "Please enter a name",
        minlength: "Please enter a valid name"
      },
      name3: {
        required: "Please enter a name",
        minlength: "Please enter a valid name"
      },
      number1: {
        required: "Please enter a name",
        length: "Please enter a valid number",
        maxlength: "Please enter a valid number"
      },
      number2: {
        required: "Please enter a name",
        minlength: "Please enter a valid number",
        maxlength: "Please enter a valid number"
      },
      number3: {
        required: "Please enter a name",
        length: "Please enter a valid number",
        maxlength: "Please enter a valid number"
      },
      college1: {
        required: "Please enter a name",
        minlength: "Please enter a valid name"
      },
      college2: {
        required: "Please enter a name",
        minlength: "Please enter a valid name"
      },
      college3: {
        required: "Please enter a name",
        minlength: "Please enter a valid name"
      },
      email: {
        required: "Please enter an email",
        email: "Please enter a valid email"
      },
      pass: {
        required: "Please enter a password",
        minlength: "Password must be atleast 4 characters long"
      }

    },
    submitHandler: function(form) {
      //form.submit();
      //form.preventDefault();
      //upfile(form1.teamname.value + Date.now());
      //$('#btnPlaceOrder').attr("disabled", true);
      document.getElementById("btnPlaceOrder").innerHTML="Submit now!";
      verified();
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('btnPlaceOrder', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
          //upfile(form1.teamname.value + Date.now());
          triggerDiv();
          updateDb(form1.teamname.value);
          $('#btnPlaceOrder').attr("disabled", true);
          $("#btnPlaceOrder").css("pointer-events","none");
          console.log(response);
          document.getElementById("btnPlaceOrder").innerHTML="Verify Data?";
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
          console.log("exp recatcha");
          //alert("Captcha error: please refresh or try again using incognito.\nPlease contact us if this error persists")
        }

      });
      window.recaptchaVerifier.render();

    }

  });
  function verified() {
    alert("Data Verified & Locked\nPlease click Submit to proceed!");
    $("input").prop('disabled',true);
    $("select").prop('disabled',true);
  }
  /*
    //if (form1) {
      form1.addEventListener('submit', function (e) {

        e.preventDefault();
        upfile(form1.teamname.value + Date.now());
      });
    //}

   */

  /*
  var res1,res2,res3;
  $('#filename').on("change", function(event){

    res1 = event.target.files[0];
    var size1 = res1.size/(1024*1024);

    var fileName, fileExtension;
    fileName = res1.name;
    fileName = fileName.toLowerCase();
    fileExtension = fileName.substr((fileName.lastIndexOf('.') + 1));
    if (!((fileExtension.localeCompare('pdf')===0) || (fileExtension.localeCompare('doc')===0) || (fileExtension.localeCompare('docx')===0))){
      alert("Only doc/docx/pdf extensions are supported");
      $("#filename").val('');
    }
    else if (size1 > 2) {
      alert("File size should be less than 2MB");
      $("#filename").val('');
    }else {
      $('#filelabel').html(fileName);
    }
  });

  $('#filename2').on("change", function(event){
    res2 = event.target.files[0];
    var size2 = res2.size/(1024*1024);
    var fileName, fileExtension;
    fileName = res2.name;
    fileName = fileName.toLowerCase();
    fileExtension = fileName.substr((fileName.lastIndexOf('.') + 1));
    if (!((fileExtension.localeCompare('pdf')===0) || (fileExtension.localeCompare('doc')===0) || (fileExtension.localeCompare('docx')===0))){
      alert("Only doc/docx/pdf extensions are supported");
      $("#filename2").val('');
    }
    else if (size2 > 2) {
      alert("File size should be less than 2MB");
      $("#filename2").val('');
    }else {
      $('#filelabel2').html(fileName);
    }

  });

  $('#filename3').on("change", function(event){
    res3 = event.target.files[0];
    var size3 = res3.size/(1024*1024);

    var fileName, fileExtension;
    fileName = res3.name;
    fileName = fileName.toLowerCase();
    fileExtension = fileName.substr((fileName.lastIndexOf('.') + 1));
    if (!((fileExtension.localeCompare('pdf')===0) || (fileExtension.localeCompare('doc')===0) || (fileExtension.localeCompare('docx')===0))){
      alert("Only doc/docx/pdf extensions are supported");
      $("#filename3").val('');
    }
    else if (size3 > 2) {
      alert("File size should be less than 2MB");
      $("#filename3").val('');
    }else {
      $('#filelabel3').html(fileName);
    }
  });

   */
  function triggerDiv() {
    var div = document.getElementById("confirmation");
    document.getElementById("confirm1").innerHTML="Please Wait!";
    div.style.display="block";
    // div.style.display = div.style.display == "none" ? "block" : "none";
    //alert("Upload resumes of team members");
    // document.getElementById('itemm').scrollIntoView();
  }
  function disappear(){
    var div = document.getElementById("confirmation");
    div.style.display="none";
  }
  function checkfiles() {



  }
  /*
  function upfile(teamname){
    triggerDiv();
    document.getElementById("btnPlaceOrder").disabled = true;
    document.getElementById("btnPlaceOrder").style.background = "grey";
    var filename = res1.name;
    var storageRef  = firebase.storage().ref('/resumes/'+teamname+'/' + Date.now()+'1'+ filename);
    var uploadTask  = storageRef.put(res1);
    // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      document.getElementById("confirm1").innerHTML="Uploading resume 1: "+Math.round(progress * 100) / 100+"% done";
      document.getElementById("confirm2").innerHTML="Please do not close the tab";
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
      //alert("ERROR: 'Resume 1' Either the file exceeds 2MB or the file type is not supported(only doc/docx/pdf are supported)");
      document.getElementById("confirm1").innerHTML="Either the file exceeds 2MB or the file type is not supported";
      document.getElementById("confirm2").innerHTML="Please try again";
      //console.log(error);
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...


      upfile2(teamname);
    });

  }

  function upfile2(teamname){
    var filename2 = res2.name;
    var storageRef2 = firebase.storage().ref('/resumes/'+teamname+'/' + Date.now()+'2' + filename2);
    var uploadTask2 = storageRef2.put(res2);

    uploadTask2.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      document.getElementById("confirm1").innerHTML="Uploading Resume 2: "+Math.round(progress * 100) / 100+"% done";
      document.getElementById("confirm2").innerHTML="Please do not close the tab";
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
      //alert("ERROR: 'Resume 2' Either the file exceeds 2MB or the file type is not supported(only doc/docx/pdf are supported)");
      document.getElementById("confirm1").innerHTML="Either the file exceeds 2MB or the file type is not supported";
      document.getElementById("confirm2").innerHTML="Please try again";
      //console.log(error)
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...

      upfile3(teamname);
    });

  }

  var n3;
  var e3;
  var p3;
  var c3;
  var nu3;

  function upfile3(teamname){
    var filename3;
    var storageRef3;
    var uploadTask3;
    if(res3){
      filename3 = res3.name;
      storageRef3 = firebase.storage().ref('/resumes/'+teamname+'/' + Date.now()+'3' + filename3);
      uploadTask3 = storageRef3.put(res3);
      n3=form1.name3.value;
      c3=form1.college3.value;
      nu3=form1.number3.value;
      e3=form1.email3.value;
    }
    else{
      filename3 = res1.name;
      storageRef3 = firebase.storage().ref('/resumes/'+teamname+'/' + Date.now()+'3' + filename3);
      uploadTask3 = storageRef3.put(res1);
      n3="NA";
      c3="NA";
      nu3="NA";
      e3="NA";
    }


    uploadTask3.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Finalizing is ' + progress + '% done');
      //if(e3.localeCompare("NA") != 0)
      document.getElementById("confirm1").innerHTML="Just a few more moments"+Math.round(progress * 100) / 100+"% done";
      //else
      //document.getElementById("confirm1").innerHTML="Finishing Registration"+Math.round(progress * 100) / 100+"% done";
      document.getElementById("confirm2").innerHTML="Please do not close the tab";
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
      //alert("ERROR: 'Resume 3' Either the file exceeds 2MB or the file type is not supported(only doc/docx/pdf are supported)");
      document.getElementById("confirm1").innerHTML="Either the file exceeds 2MB or the file type is not supported";
      document.getElementById("confirm2").innerHTML="Please try again";
      //console.log(error);
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...

      updateDb(teamname);
    });
  }
  */


  function updateDb(uniqueid) {
    //console.log('written');

    db.collection('applicants').add({
      timestamp: Date.now(),
      uniqueid: uniqueid,
      teamname: form1.teamname.value,
      track:form1.track.value,
      name1:form1.name1.value,
      college1:form1.college1.value,
      number1:form1.number1.value,
      email1:form1.email1.value,
      name2:form1.name2.value,
      college2:form1.college2.value,
      number2:form1.number2.value,
      email2:form1.email2.value,
      name3:form1.name3.value,
      college3:form1.college3.value,
      number3:form1.number3.value,
      email3:form1.email3.value,
      github1:form1.github1.value,
      github2:form1.github2.value,
      github3:form1.github3.value,

    }).then(function() {

      console.log("Document successfully written!");
      document.getElementById("confirm1").innerHTML="Registration successful!";
      document.getElementById("confirm2").innerHTML="You will receive a mail in a few days if qualified";
      document.getElementById("dbcooper").style.display="inline";
      document.getElementById("confirmation").style.height="230px";
      document.getElementById("btnPlaceOrder").innerHTML="Successfully submitted";

    })
        .catch(function(error) {
          //console.error("Error writing document: ", error);
          //alert("ERROR: Error in creating a new entry!\nPlease screenshot this and mail us at acm@snu.edu.in");
          document.getElementById("confirm1").innerHTML="Some error occurred while registration";
          document.getElementById("confirm2").innerHTML="Screenshot this and send us a mail at acm@snu.edu.in";
          alert("ERROR: "+ error);
          document.getElementById("btnPlaceOrder").innerHTML="Error, Please refresh!";
          //$('#btnPlaceOrder').attr("disabled", false);
        });
  }
});

function disappear(){
  var div = document.getElementById("confirmation");
  div.style.display="none";

  //$("myform").get(0).reset();
  //document.getElementById("subject").value="";
  //document.getElementById("name1").value="";
  //document.getElementById("college1").value="";
  //document.getElementById("number1").value="";
  //document.getElementById("email1").value="";
  $("filename").val('');
  //document.getElementById("filelabel").innerHTML = "Resume of 1<sup>st</sup> Member";
  //document.getElementById("filelabel2").innerHTML = "Resume of 2<sup>nd</sup> Member";
  //document.getElementById("filelabel3").innerHTML = "Resume of 3<sup>rd</sup> Member";

  //document.getElementById("name2").value="";
  //document.getElementById("college2").value="";
  //document.getElementById("number2").value="";
  //document.getElementById("email2").value="";
  $("filename2").val('');
  //document.getElementById("name3").value="";
  //document.getElementById("college3").value="";
  //document.getElementById("number3").value="";
  //document.getElementById("email3").value="";
  $("filename3").val('');
}


// FORM

// <form class="contactForm" id="myform">
// <!-- <form
// action="https://formspree.io/xpzqzjpw"
// method="POST"
// enctype="multipart/form-data"
// > -->
//     <div class="form-group">
//       <label for="sel">Number of team members</label>
//         <select id="sel" class="form-control">
//             <option value="two">Two</option>
//             <option value="three">Three</option>
//         </select>
//     </div>
//
//     <div class="form-group">
//       <input type="text" class="form-control" name="teamname" id="subject" placeholder="Team Name" data-rule="minlen:1" data-msg="Please enter a team name" required/>
//       <!-- <div class="validation"></div> -->
//     </div>
//     <div class="form-group">
//       <label>Select track</label>
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="track" id="exampleRadios1" value="Energy" checked>
//         <label class="form-check-label" for="exampleRadios1">
//           Energy
//         </label>
//       </div>
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="track" id="exampleRadios2" value="Education">
//         <label class="form-check-label" for="exampleRadios2">
//           Education
//         </label>
//       </div>
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="track" id="exampleRadios3" value="Security and Resilience">
//         <label class="form-check-label" for="exampleRadios3">
//           Security and Resilience
//         </label>
//       </div>
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="track" id="exampleRadios4" value="Economic Development and Entrepreneurship">
//         <label class="form-check-label" for="exampleRadios4">
//           Economic Development and Entrepreneurship
//         </label>
//       </div>
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="track" id="exampleRadios5" value="Smart City Solutions">
//         <label class="form-check-label" for="exampleRadios5">
//           Smart City Solutions
//         </label>
//       </div>
//     </div>
//     <br />
//     <label>Details of team member 1</label>
//     <div class="form-row">
//       <div class="form-group col-md-6">
//         <input type="text" name="name1" class="form-control" id="name1" placeholder="Name" data-rule="minlen:1" data-msg="Please enter name" required/>
//         <!-- <div class="validation"></div> -->
//       </div>
//       <div class="form-group col-md-6">
//         <input type="text" class="form-control" name="college1" id="college1" placeholder="College name" data-rule="minlen:1" data-msg="Please enter college name" required/>
//         <!-- <div class="validation"></div> -->
//       </div>
//     </div>
//     <div class="form-row">
//       <div class="form-group col-md-6">
//         <input type="text" name="number1" class="form-control" id="number1" placeholder="Phone number" data-rule="minlen:10" data-msg="Please enter a valid phone number" required/>
//         <!-- <div class="validation"></div> -->
//       </div>
//       <div class="form-group col-md-6">
//         <input type="email" class="form-control" name="email1" id="email1" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
//         <!-- <div class="validation"></div> -->
//       </div>
//     </div>
//     <div class="form-group col-md-12">
//       <input type="text" name="github1" class="form-control" id="github1" placeholder="GitHub profile of member 1" data-rule="minlen:1" data-msg="Please enter GitHub profile" required/>
//     </div>
//     <!-- <div class="custom-file col-md-12">
//
//       <input id="filename" type="file" name="filename"  class="custom-file-input" required/>
//       <label id="filelabel" for="filename" class="custom-file-label">Resume of 1<sup>st</sup> Member</label>
//     </div>
//     <small class="text-muted">
//       Must be less than 2MB & of type pdf,doc or docx only!
//     </small> -->
//     <div class="m-3"></div>
//     <!-- <div class="form-group col-md-6">
//       <label>Resume of member 1</label>
//       <input type="file" name="cv1" class="form-control" id="cv1" required />
//       <div class="validation"></div>
//     </div> -->
//     <br />
//     <label>Details of team member 2</label>
//     <div class="form-row">
//       <div class="form-group col-md-6">
//         <input type="text" name="name2" class="form-control" id="name2" placeholder="Name" data-rule="minlen:1" data-msg="Please enter name" required />
//         <!-- <div class="validation"></div> -->
//       </div>
//       <div class="form-group col-md-6">
//         <input type="text" class="form-control" name="college2" id="college2" placeholder="College name" data-rule="minlen:1" data-msg="Please enter college name" required/>
//         <!-- <div class="validation"></div> -->
//       </div>
//     </div>
//     <div class="form-row">
//       <div class="form-group col-md-6">
//         <input type="text" name="number2" class="form-control" id="number2" placeholder="Phone number" data-rule="minlen:10" data-msg="Please enter a valid phone number" required/>
//         <!-- <div class="validation"></div> -->
//       </div>
//       <div class="form-group col-md-6">
//         <input type="email" class="form-control" name="email2" id="email2" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
//         <!-- <div class="validation"></div> -->
//       </div>
//     </div>
//     <div class="form-group col-md-12">
//       <input type="text" name="github2" class="form-control" id="github2" placeholder="GitHub profile of member 2" data-rule="minlen:1" data-msg="Please enter GitHub profile" required/>
//     </div>
//     <!-- <div class="custom-file col-md-12">
//
//       <input id="filename2" type="file" name="filename2"  class="custom-file-input" required />
//
//       <label id="filelabel2" for="filename2" class="custom-file-label">Resume of 2<sup>nd</sup> Member</label>
//     </div>
//     <small id="" class="text-muted">
//       Must be less than 2MB & of type pdf,doc or docx only!
//     </small> -->
//     <div class="m-3"></div>
//     <!-- <div class="form-group col-md-6">
//       <label>Resume of member 2</label>
//       <input type="file" name="cv2" class="form-control" id="cv2" required />
//       <div class="validation"></div>
//     </div> -->
//     <br />
//     <div class="two box">
//       <!-- <div class="form-row">
//         <div class="form-group col-md-6">
//           <input type="hidden" name="name3" value="NA" class="form-control" id="name3" placeholder="Name" data-rule="minlen:1" data-msg="Please enter name" />
//         </div>
//         <div class="form-group col-md-6">
//           <input type="hidden" class="form-control" name="college3" value="NA" id="college3" placeholder="College name" data-rule="minlen:1" data-msg="Please enter college name"/>
//         </div>
//       </div>
//       <div class="form-row">
//         <div class="form-group col-md-6">
//           <input type="hidden" name="number3" value="NA" class="form-control" id="number3" placeholder="Phone number" data-rule="minlen:10" data-msg="Please enter a valid phone number" />
//         </div>
//         <div class="form-group col-md-6">
//           <input type="hidden" class="form-control" name="email3" value="NA" id="email3" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
//         </div>
//
//       </div>
//       <div class="custom-file col-md-12">
//
//         <input id="filename3" type="file" name="filename3"  class="custom-file-input"/>
//       </div> -->
//     </div>
//     <div class="three box">
//       <label>Details of team member 3</label>
//       <div class="form-row">
//         <div class="form-group col-md-6">
//           <input type="text" name="name3" class="form-control" id="name3" placeholder="Name" data-rule="minlen:1" data-msg="Please enter name" required/>
//           <!-- <div class="validation"></div> -->
//         </div>
//         <div class="form-group col-md-6">
//           <input type="text" class="form-control" name="college3" id="college3" placeholder="College name" data-rule="minlen:1" data-msg="Please enter college name" required/>
//           <!-- <div class="validation"></div> -->
//         </div>
//       </div>
//       <div class="form-row">
//         <div class="form-group col-md-6">
//           <input type="text" name="number3" class="form-control" id="number3" placeholder="Phone number" data-rule="minlen:10" data-msg="Please enter a valid phone number" required/>
//           <!-- <div class="validation"></div> -->
//         </div>
//         <div class="form-group col-md-6">
//           <input type="email" class="form-control" name="email3" id="email3" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
//           <!-- <div class="validation"></div> -->
//         </div>
//
//       </div>
//       <div class="form-group col-md-12">
//         <input type="text" name="github3" class="form-control" id="github3" placeholder="GitHub profile of member 3" data-rule="minlen:1" data-msg="Please enter GitHub profile" required/>
//       </div>
//       <!-- <div class="custom-file col-md-12">
//
//         <input id="filename3" type="file" name="filename3"  class="custom-file-input" required/>
//
//         <label id="filelabel3" for="filename3" class="custom-file-label">Resume of 3<sup>rd</sup> Member</label>
//       </div>
//       <small class="text-muted">
//         Must be less than 2MB & of type pdf,doc or docx only!
//       </small> -->
//       <div class="m-3"></div>
//     </div>
//
//
//     <!-- <div class="red box">You have selected <strong>red option</strong> so i am here</div>
//     <div class="green box">You have selected <strong>green option</strong> so i am here</div>
//     <div class="blue box">You have selected <strong>blue option</strong> so i am here</div> -->
//
//
//
//
//   <!-- <div class="form-group col-md-6">
//     <label>Resume of member 3</label>
//     <input type="file" name="cv3" class="form-control" id="cv3" required />
//     <div class="validation"></div>
//   </div> -->
//   <br />
//   <!-- <div class="form-group">
//     <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
//     <div class="validation"></div>
//   </div>
//   <div class="form-group">
//     <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
//     <div class="validation"></div>
//   </div> -->
//
//   <div class="text-center">
//     <button type="submit" value="upload" id="btnPlaceOrder">Verify Data?</button></div>
//   <!-- <input type="submit" value="upload" /> -->
// </form>

 // Close intro window 
 function closebutton() {
     document.getElementById("intro").style.display = "none";
 }
 // Turn on background sound
 function soundon() {
     let mysound = document.getElementById("backgroundsound");
     mysound.setAttribute("sound", "src: url(sound/background_sound_1.mp3); loop:true");
     mysound.components.sound.playSound();
 }
 // Turnoff background sound
 function soundoff() {
     document.getElementById("backgroundsound").components.sound.stopSound();
 }
 // Turn on/off almamater song
 var myAudio = document.getElementById("cutlersound");
 function almamater() {
     return cutlersound.paused ? cutlersound.play() : cutlersound.pause();
 };


 // Templeton 1
 function templeton1() {
     document.getElementById('photobackground').setAttribute('src', "img/templeton1.jpg");
     document.getElementById("scene0tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft2").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toright").setAttribute("scale", "0 0 0");
     document.getElementById("scene0tosouth").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("templeton1toscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("templeton1to3").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("templeton1to2").setAttribute("scale", "0.2 0.2 0.2");


     }, 200);
 }
 // Templeton 1 to Scene 0
 function templeton1to0() {
     document.getElementById('photobackground').setAttribute('src', "img/1.jpg");
     document.getElementById("templeton1toscene0").setAttribute("scale", "0 0 0");
     document.getElementById("templeton1to3").setAttribute("scale", "0 0 0");
     document.getElementById("templeton1to2").setAttribute("scale", "0 0 0");


     setTimeout(function () {
         document.getElementById("scene0tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft2").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toright").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0tosouth").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Load Templeton2
 function templeton2() {
     document.getElementById('photobackground').setAttribute('src', "img/templeton2.jpg")
     document.getElementById("templeton1to3").setAttribute("scale", "0 0 0");
     document.getElementById("templeton1toscene0").setAttribute("scale", "0 0 0");
     document.getElementById("templeton1to2").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("templeton2to1").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("templetonicon").style.display = "block";
     }, 200);
 }
 // From Templeton2 to Templeton 1
 function templeton2to1() {
     document.getElementById('photobackground').setAttribute('src', "img/templeton1.jpg");
     document.getElementById("templeton2to1").setAttribute("scale", "0 0 0");
     document.getElementById("templetonicon").style.display = "none";
     setTimeout(function () {
         document.getElementById("templeton1to3").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("templeton1toscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("templeton1to2").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Load Templeton3
 function templeton3() {
     document.getElementById('photobackground').setAttribute('src', "img/templeton3.jpg");
     document.getElementById("templeton1to3").setAttribute("scale", "0 0 0");
     document.getElementById("templeton1toscene0").setAttribute("scale", "0 0 0");
     document.getElementById("templeton1to2").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("templeton3to1").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Templeton 3 to Templeton 1
 function templeton3to1() {
     document.getElementById('photobackground').setAttribute('src', "img/templeton1.jpg");
     document.getElementById("templeton3to1").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("templeton1to3").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("templeton1toscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("templeton1to2").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Load Scene Class gateway
 function classgateway() {
     document.getElementById('photobackground').setAttribute('src', "img/classgateway.jpg");
     document.getElementById("scene0tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toright").setAttribute("scale", "0 0 0");
     document.getElementById("scene0tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft2").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("classgatewaytoscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("classicon").style.display = "block";
     }, 200);
 }
 // Load from Class gateway to Scene 0
 function classgatewayto0() {
     document.getElementById('photobackground').setAttribute('src', "img/1.jpg");
     document.getElementById("classgatewaytoscene0").setAttribute("scale", "0 0 0");
     document.getElementById("classicon").style.display = "none";

     setTimeout(function () {
         document.getElementById("scene0tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toright").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft2").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }


 // Load scene 1
 function fromscene0to1() {
     document.getElementById('photobackground').setAttribute('src', "img/2.jpg");
     document.getElementById("scene0tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toright").setAttribute("scale", "0 0 0");
     document.getElementById("scene0tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft2").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("scene1tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1toright").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Load from Scene 1 to Scene 0 
 function fromscene1to0() {
     document.getElementById('photobackground').setAttribute('src', "img/1.jpg")
     document.getElementById("scene1tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene1tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("scene1toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene1toright").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("scene0tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toright").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft2").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);

 }




 // Load Scene Chapel
 function chapel() {
     document.getElementById('photobackground').setAttribute('src', "img/chapel.jpg");
     document.getElementById("scene0tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toright").setAttribute("scale", "0 0 0");
     document.getElementById("scene0tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft2").setAttribute("scale", "0 0 0");
     setTimeout(function () {
         document.getElementById("chapeltoscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("chapelicon").style.display = "block";
     }, 200);

 }

 // Load from Chaptel to Scene 0   
 function fromchapeltoscene0() {
     document.getElementById('photobackground').setAttribute('src', "img/1.jpg");
     document.getElementById("chapelicon").style.display = "none";
     document.getElementById("chapeltoscene0").setAttribute("scale", "0 0 0");;

     setTimeout(function () {
         document.getElementById("scene0toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toright").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft2").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }



 // Load scene Wilson
 function wilson() {
     document.getElementById('photobackground').setAttribute('src', "img/wilson.jpg");
     document.getElementById("scene1tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene1tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("scene1toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene1toright").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("wilsontoscene1").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("willsonicon").style.display = "block";
     }, 200);
 }

 // Load scene from Wilson to Scene 1
 function fromwilsontoscene1() {
     document.getElementById('photobackground').setAttribute('src', "img/2.jpg");
     document.getElementById("wilsontoscene1").setAttribute("scale", "0 0 0");
     document.getElementById("willsonicon").style.display = "none";

     setTimeout(function () {
         document.getElementById("scene1tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1toright").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Load Scene McGuffey
 function mcguffey() {
     document.getElementById('photobackground').setAttribute('src', "img/mcguffey.jpg");
     document.getElementById("scene1tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene1tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("scene1toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene1toright").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("mcguffeytoscene1").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("mcguffeyicon").style.display = "block";
     }, 200);
 }

 // Load scene from McGuffey to Scene 1
 function frommcguffeytoscene1() {
     document.getElementById('photobackground').setAttribute('src', "img/2.jpg");
     document.getElementById("mcguffeytoscene1").setAttribute("scale", "0 0 0");
     document.getElementById("mcguffeyicon").style.display = "none";
     setTimeout(function () {
         document.getElementById("scene1tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1toright").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }


 // Load scene 2 
 function scene2() {
     document.getElementById('photobackground').setAttribute('src',
         "img/3.jpg");
     document.getElementById("scene1tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene1tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("scene1toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene1toright").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("scene2tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene2tosouth").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // From scene 2 to scene 1 
 function fromscene2toscene1() {
     document.getElementById('photobackground').setAttribute('src',
         "img/2.jpg");
     document.getElementById("scene2tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene2tosouth").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("scene1tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene1toright").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);

 }


 function scene3() {
     document.getElementById('photobackground').setAttribute('src',
         "img/4.jpg"); // insert source to the element with id="photobackground"
     document.getElementById("scene2tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene2tosouth").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("scene3tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("cutlericon").style.display = "block";

     }, 200);
 }

 function fromscene3toscene2() {
     document.getElementById('photobackground').setAttribute('src',
         "img/3.jpg"); // insert source to the element with id="photobackground"
     document.getElementById("scene3tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("cutlericon").style.display = "none";
     setTimeout(function () {
         document.getElementById("scene2tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene2tosouth").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Load Scene 4
 function scene0toscene4() {
     document.getElementById('photobackground').setAttribute('src', "img/scene4.jpg");
     /*setTimeout(function () {
       document.getElementById('photobackground').setAttribute('rotation', "-3 180 0");
     }, 100);*/
     document.getElementById("scene0tonorth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toright").setAttribute("scale", "0 0 0");
     document.getElementById("scene0tosouth").setAttribute("scale", "0 0 0");
     document.getElementById("scene0toleft2").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("scene4toscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("tochubb").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("tomonument1").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("togateway1").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("tomonument1").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }


 // Load From Scene 4 to Scene 0
 function scene4toscene0() {
     document.getElementById('photobackground').setAttribute('src', "img/1.jpg");
     document.getElementById("scene4toscene0").setAttribute("scale", "0 0 0");
     document.getElementById("tochubb").setAttribute("scale", "0 0 0");
     document.getElementById("tomonument1").setAttribute("scale", "0 0 0");
     document.getElementById("togateway1").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("scene0tonorth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toright").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0tosouth").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene0toleft2").setAttribute("scale", "0.2 0.2 0.2");

     }, 200);
 }


 // Load from Scene 4 to Civil War Monument 1
 function monument1() {
     document.getElementById('photobackground').setAttribute('src', "img/civilwarmonument1.jpg");
     document.getElementById("tochubb").setAttribute("scale", "0 0 0");
     document.getElementById("scene4toscene0").setAttribute("scale", "0 0 0");
     document.getElementById("tomonument1").setAttribute("scale", "0 0 0");
     document.getElementById("togateway1").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("monument1toscene4").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("civilicon").style.display = "block";
     }, 200);
 }
 // Load from Civil War Monument 1 to Scene 4
 function frommonument1() {
     document.getElementById('photobackground').setAttribute('src', "img/scene4.jpg");
     document.getElementById("monument1toscene4").setAttribute("scale", "0 0 0");
     document.getElementById("civilicon").style.display = "none";
     setTimeout(function () {
         document.getElementById("tochubb").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene4toscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("tomonument1").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("togateway1").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }
 // Load from Scene 4 to Alumni Gateway 1
 function gateway1() {
     document.getElementById('photobackground').setAttribute('src', "img/alumnigateway1.jpg");
     document.getElementById("tochubb").setAttribute("scale", "0 0 0");
     document.getElementById("scene4toscene0").setAttribute("scale", "0 0 0");
     document.getElementById("tomonument1").setAttribute("scale", "0 0 0");
     document.getElementById("togateway1").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("gateway1toscene4").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("togateway2").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("alumniicon").style.display = "block";
     }, 200);
 }

 // Load from Alumni Gateway 1 to Scene 4 
 function fromgateway1() {
     document.getElementById('photobackground').setAttribute('src', "img/scene4.jpg");
     document.getElementById("gateway1toscene4").setAttribute("scale", "0 0 0");
     document.getElementById("togateway2").setAttribute("scale", "0 0 0");
     document.getElementById("alumniicon").style.display = "none";
     setTimeout(function () {
         document.getElementById("tochubb").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene4toscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("tomonument1").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("togateway1").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Load from Alumni Gateway 1 to Alumni Gateway 2
 function gateway2() {
     document.getElementById('photobackground').setAttribute('src', "img/alumnigateway2.jpg");
     document.getElementById("gateway1toscene4").setAttribute("scale", "0 0 0");
     document.getElementById("togateway2").setAttribute("scale", "0 0 0");
     document.getElementById("alumniicon").style.display = "none";
     setTimeout(function () {
         document.getElementById("fromgateway2to1").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }

 // Load from Alumni Gateway 2 to Alumni Gateway 1
 function fromgateway2() {
     document.getElementById('photobackground').setAttribute('src', "img/alumnigateway1.jpg");
     document.getElementById("fromgateway2to1").setAttribute("scale", "0 0 0");

     setTimeout(function () {
         document.getElementById("gateway1toscene4").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("togateway2").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("alumniicon").style.display = "block";
     }, 200);
 }

 // Load from Scene 4 to Chubb
 function chubb() {
     document.getElementById('photobackground').setAttribute('src', "img/chubb.jpg");
     document.getElementById("tochubb").setAttribute("scale", "0 0 0");
     document.getElementById("scene4toscene0").setAttribute("scale", "0 0 0");
     document.getElementById("tomonument1").setAttribute("scale", "0 0 0");
     document.getElementById("togateway1").setAttribute("scale", "0 0 0");
     setTimeout(function () {
         document.getElementById("toscene4").setAttribute("scale", "0.2 0.2 0.2");

         document.getElementById("chubbicon").style.display = "block";
     }, 200);
 }

 // Load From Chubb to Scene 4
 function fromchubb() {
     document.getElementById('photobackground').setAttribute('src', "img/scene4.jpg");
     document.getElementById("toscene4").setAttribute("scale", "0 0 0");
     document.getElementById("chubbicon").style.display = "none";
     setTimeout(function () {
         document.getElementById("tochubb").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("scene4toscene0").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("tomonument1").setAttribute("scale", "0.2 0.2 0.2");
         document.getElementById("togateway1").setAttribute("scale", "0.2 0.2 0.2");
     }, 200);
 }




 // Cutlericon
 function cutleropen() {
     document.getElementById("cutlericon").style.display = "none";
     document.getElementById("cutlercontent").style.display = "block";
     document.getElementById("cutlerclose").style.display = "block";
 }

 function cutlerclose() {
     document.getElementById("cutlericon").style.display = "block";
     document.getElementById("cutlercontent").style.display = "none";
     document.getElementById("cutlerclose").style.display = "none";
 }

 // Chapelicon
 function chapelopen() {
     document.getElementById("chapelicon").style.display = "none";
     document.getElementById("chapelcontent").style.display = "block";
     document.getElementById("chapelclose").style.display = "block";
 }

 function chapelclose() {
     document.getElementById("chapelicon").style.display = "block";
     document.getElementById("chapelcontent").style.display = "none";
     document.getElementById("chapelclose").style.display = "none";
 }

 // Willsonicon
 function willsonopen() {
     document.getElementById("willsonicon").style.display = "none";
     document.getElementById("willsoncontent").style.display = "block";
     document.getElementById("willsonclose").style.display = "block";
 }

 function willsonclose() {
     document.getElementById("willsonicon").style.display = "block";
     document.getElementById("willsoncontent").style.display = "none";
     document.getElementById("willsonclose").style.display = "none";
 }

 // McGuffeyicon
 function mcguffeyopen() {
     document.getElementById("mcguffeyicon").style.display = "none";
     document.getElementById("mcguffeycontent").style.display = "block";
     document.getElementById("mcguffeyclose").style.display = "block";
 }

 function mcguffeyclose() {
     document.getElementById("mcguffeyicon").style.display = "block";
     document.getElementById("mcguffeycontent").style.display = "none";
     document.getElementById("mcguffeyclose").style.display = "none";
 }

 // Chubbicon
 function chubbopen() {
     document.getElementById("chubbicon").style.display = "none";
     document.getElementById("chubbcontent").style.display = "block";
     document.getElementById("chubbclose").style.display = "block";
 }

 function chubbclose() {
     document.getElementById("chubbicon").style.display = "block";
     document.getElementById("chubbcontent").style.display = "none";
     document.getElementById("chubbclose").style.display = "none";
 }

 // Class Gateway
 function classopen() {
     document.getElementById("classicon").style.display = "none";
     document.getElementById("classcontent").style.display = "block";
     document.getElementById("classclose").style.display = "block";
 }

 function classclose() {
     document.getElementById("classicon").style.display = "block";
     document.getElementById("classcontent").style.display = "none";
     document.getElementById("classclose").style.display = "none";
 }

 // Class Gateway
 function templetonopen() {
     document.getElementById("templetonicon").style.display = "none";
     document.getElementById("templetoncontent").style.display = "block";
     document.getElementById("templetonclose").style.display = "block";
 }

 function templetonclose() {
     document.getElementById("templetonicon").style.display = "block";
     document.getElementById("templetoncontent").style.display = "none";
     document.getElementById("templetonclose").style.display = "none";
 }

 // Civil War Monument
 function civilopen() {
     document.getElementById("civilicon").style.display = "none";
     document.getElementById("civilcontent").style.display = "block";
     document.getElementById("civilclose").style.display = "block";
 }

 function civilclose() {
     document.getElementById("civilicon").style.display = "block";
     document.getElementById("civilcontent").style.display = "none";
     document.getElementById("civilclose").style.display = "none";
 }

 // Alumni Gateway
 function alumniopen() {
     document.getElementById("alumniicon").style.display = "none";
     document.getElementById("alumnicontent").style.display = "block";
     document.getElementById("alumniclose").style.display = "block";
 }

 function alumniclose() {
     document.getElementById("alumniicon").style.display = "block";
     document.getElementById("alumnicontent").style.display = "none";
     document.getElementById("alumniclose").style.display = "none";
 }
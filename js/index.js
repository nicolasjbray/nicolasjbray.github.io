console.clear();
var _data = JSON.parse(`
   {"lyrics":[{"line":"","time":-1},
   {"line":"When I was back there in seminary school","note":"[Intro]","time":309},
   {"line":"There was a person there","time":4757},
   {"line":"Who put forth the proposition","time":6258},
   {"line":"That you can petition the Lord with prayer","time":9823},
   {"line":"Petition the lord with prayer","time":15846},
   {"line":"Petition the lord with prayer","time":21540},
   {"line":"You cannot petition the lord with prayer!","time":28750},


   {"line":"","time":35900},


   {"line":"Can you give me sanctuary","note":"[Part One]","time":43212},
   {"line":"I must find a place to hide","time":50231},
   {"line":"A place for me to hide","time":55865},

   {"line":"","time":60500},

   {"line":"Can you find me soft asylum","time":72202},
   {"line":"I can't make it anymore","time":78056},
   {"line":"The Man is at the door","time":84513},

   {"line":"","time":91500},

   {"line":"Peppermint, miniskirts, chocolate candy","note":"[Part Two]","time":99500},
   {"line":"Champion sax and a girl named Sandy","time":107000},
   {"line":"There's only four ways to get unraveled","time":122500},
   {"line":"One is to sleep and the other is travel, da da","time":126500},
   {"line":"One is a bandit up in the hills","time":132500},
   {"line":"One is to love your neighbor 'till","time":136000},
   {"line":"His wife gets home","time":140000},


   {"line":"","time":142500},


  
   {"line":"Catacombs","note":"[Part Three]","time":150500},
   {"line":"Nursery bones","time":152000},
   {"line":"Winter women","time":154000},
   {"line":"Growing stones","time":156000},
   {"line":"Carrying babies","time":159000},
   {"line":"To the river","time":160000},

   {"line":"","time":161000},

   {"line":"Streets and shoes","time":166000},
   {"line":"Avenues","time":168000},
   {"line":"Leather riders","time":170000},
   {"line":"Selling news","time":172000},
   {"line":"The monk bought lunch","time":182000},

   {"line":"","time":184000},

   {"line":"Ha ha, he bought a little","note":"[Part Four]","time":185500},
   {"line":"Yes, he did","time":187000},
   {"line":"Woo!","time":188500},
   {"line":"This is the best part of the trip","time":190000},
   {"line":"This is the trip, the best part","time":192000},
   {"line":"I really like","time":195000},
   {"line":"What'd he say?","time":196500},
   {"line":"Yeah!","time":203000},
   {"line":"Yeah, right!","time":213500},
   {"line":"Pretty good, huh","time":219000},
   {"line":"Huh!","time":222500},
   {"line":"Yeah, I'm proud to be a part of this number","time":235500},

   {"line":"","time":239500},

   {"line":"Successful hills are here to stay","note":"[Part Five]","time":243900},
   {"line":"Everything must be this way","time":248500},
   {"line":"Gentle streets where people play","time":253500},
   {"line":"Welcome to the Soft Parade","time":258000},

   {"line":"","time":261000},

   {"line":"All our lives we sweat and save","time":262500},
   {"line":"Building for a shallow grave","time":267500},
   {"line":"Must be something else we say","time":272000},
   {"line":"Somehow to defend this place","time":277000},
   {"line":"Everything must be this way","time":281500},
   {"line":"Everything must be this way, yeah","time":286000},

   {"line":"","time":290000},

   {"line":"The Soft Parade has now begun","note":"[Part Six]","time":319000},
   {"line":"Listen to the engines hum","time":324000},
   {"line":"People out to have some fun","time":328500},
   {"line":"A cobra on my left","time":333000},
   {"line":"Leopard on my right, yeah","time":335500},

    {"line":"","time":339000},

   {"line":"The deer woman in a silk dress","time":342000},
   {"line":"Girls with beads around their necks","time":347000},
   {"line":"Kiss the hunter of the green vest","time":352000},
   {"line":"Who has wrestled before","time":355500},
   {"line":"With lions in the night","time":359000},

    {"line":"","time":361000},

   {"line":"Out of sight!","time":366000},
   {"line":"The lights are getting brighter","time":370000},
   {"line":"The radio is moaning","time":379500},
   {"line":"Calling to the dogs","time":385000},
   {"line":"There are still a few animals","time":388000},
   {"line":"Left out in the yard","time":393500},
   {"line":"But it's getting harder ","time":397000},
   {"line":"To describe sailors","time":403500},
   {"line":"To the underfed","time":412000},

   {"line":"","time":415000},

   {"line":"Tropic corridor","time":422500},
   {"line":"Tropic treasure","time":425000},
   {"line":"What got us this far","time":427000},
   {"line":"To this mild equator?","time":429000},

   {"line":"","time":432000},

   {"line":"We need someone or something new","time":432000},
   {"line":"Something else to get us through, yeah, c'mon","time":437000},

   {"line":"","time":441000},

   {"line":"Callin' on the dogs","time":444000},
   {"line":"Callin' on the dogs","time":446500},
   {"line":"Oh, it's gettin' harder","time":449000},
   {"line":"Callin' on the dogs","time":450500},
   {"line":"Callin' in the dogs ","time":451000},
   {"line":"Callin' all the dogs","time":453500},
   {"line":"Callin' on the gods","time":456000},

   {"line":"","time":458500},

   {"line":"You gotta meet me","time":459000},
   {"line":"Too late, baby","time":460000},
   {"line":"Slay a few animals","time":461000},
   {"line":"At the crossroads","time":464000},
   {"line":"Too late","time":465000},
   {"line":"All in the yard","time":466000},
   {"line":"But it's gettin' harder","time":467000},
   {"line":"By the crossroads","time":469000},
   {"line":"You gotta meet me","time":469500},
   {"line":"Oh, we're goin', we're goin great","time":471000},
   {"line":"At the edge of town","time":473000},
   {"line":"Tropic corridor","time":474000},
   {"line":"Tropic treasure","time":476000},
   {"line":"Havin' a good time","time":476200},
   {"line":"Got to come along","time":477000},
   {"line":"What got us this far","time":479000},
   {"line":"To this mild equator?","time":479300},
   {"line":"Outskirts of the city","time":479600},
   {"line":"You and I","time":482000},
   {"line":"We need someone new","time":483500},
   {"line":"Somethin' new","time":485000},
   {"line":"Somethin' else to get us through","time":486000},
   {"line":"Better bring your gun","time":487000},
   {"line":"Better bring your gun","time":488000},
   {"line":"Tropic corridor","time":488200},
   {"line":"Tropic treasure","time":490000},
   {"line":"We're gonna ride and have some fun","time":491000},

   {"line":"","time":492400},

   {"line":"When all else fails","time":492500},
   {"line":"We can whip the horse's eyes","time":495000},
   {"line":"And make them sleep","time":499000},
   {"line":"And cry","time":502000},

   {"line":"","time":505000}]}`);

var currentLine = "";

function align() {
   var a = $(".highlighted").height();
   var c = $(".content").height();
   var d = $(".highlighted").offset().top - $(".highlighted").parent().offset().top;
   var e = d + (a/2) - (c/2);
   $(".content").animate(
       {scrollTop: e + "px"}, {easing: "swing", duration: 250}
   );
}

var lyricHeight = $(".lyrics").height();
$(window).on("resize", function() {
   if ($(".lyrics").height() != lyricHeight) { //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
      lyricHeight = $(".lyrics").height();
      align();
   }
});

$(document).ready(function(){
   $("video").on('timeupdate', function(e){
      var time = this.currentTime*1000;
      var past = _data["lyrics"].filter(function (item) {
         return item.time < time;
      });
      if (_data["lyrics"][past.length] != currentLine) {
         currentLine = _data["lyrics"][past.length];
         $(".lyrics div").removeClass("highlighted");
         $(`.lyrics div:nth-child(${past.length})`).addClass("highlighted"); //Text might take up more lines, do before realigning
         align();
      }
   });
});

generate();

function generate() {
   var html = "";
   for(var i = 0; i < _data["lyrics"].length; i++) {
      html += "<div";
      if(i == 0) {
         html+=` class="highlighted"`;
         currentLine = 0;
      }
      if(_data["lyrics"][i]["note"]) {
         html += ` note="${_data["lyrics"][i]["note"]}"`;
      }
      html += ">";
      html += _data["lyrics"][i]["line"] == "" ? "•" : _data["lyrics"][i]["line"];
      html += "</div>"
   }
   $(".lyrics").html(html);
   align();
}


$('.menu-btn-1').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('menu-btn-active-1');
  $('.menu').toggleClass('menu_active');
});



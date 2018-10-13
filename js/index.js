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
   {"line":"Huh!","time":223500},
   {"line":"Yeah, I'm proud to be a part of this number","time":235500},

   {"line":"","time":239500},

   {"line":"Successful hills are here to stay","time":243900},
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

   {"line":"","time":800000}]}`);

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



console.log('Hello World!');
let previous = document.querySelector('#pre');

let play = document.querySelector('#play');

let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;


let track = document.createElement('audio');


let All_song = [
   {
     name: "Nayan-Dhvani Bhanushali, Jubin Nautiyal, and Lijo George",
     path: "song1.mp3",
     img: "img1.jpg",
singer: "Haan Aan, Haan Aan...   Meri Na Sune Yeh Dil Mera  Tere Piche Paagal Hai   Roke Na Ruke Yeh Dil Mera  Jaane Kaisi Hulchal Hai Ki Meri Saanson Mein Tu  Ehsaason Mein Tu  Har Hansi Mein Mere Bas Hai Tu  Nayan Ne Bandh Rakhine Mein Jyara  Tamne Joya Che  Nayan Ne Bandh Rakhine Mein Jyara  Tamne Joya Che  Tum Hi Tum Ho Meri Saanson Mein Aur Ho Khayalon Mein Nayan Ne Bandh Rakhine Mein Jyara  Tamne Joya Che. For full lyrics visit our official website"
  },
   {
     name: "Song by Dhvani Bhanushali, Guru Randhawa, and Vee",
     path: "song2.mp3",
     img: "img2.jpg",
     singer: "Baby girl  Baby girl Baby girl  Baby girl  Hoke ni taiyar  Kithe chali ghar ton baahar Tainu kihda intezar  Baby girl baby girl  Hoke ni taiyar  Kithe chali ghar ton baahar  Tainu kihda intezar  Baby girl baby girl  Kanna layi jhumki lai de ve  Hathan layi kangan lai de ve Jehdi gall sunan nu dil kare Mainu I love you vi keh de ve Kanna layi jhumki lai dunga  Hathan layi kangan lai dunga  je tu zindagi mere naam kare  Tainu I love you vi keh dunga Baby   High rated tera yaar  Tu lagdi ae Lambo car  Tere wargi na mutiyaar Baby girl baby girl"


     
     
   },
   {
     name: "Song by Dhvani Bhanushali and Nikhil D'Souza",
     path: "song3.mp3",
     img: "img3.jpg",
     singer: "Vaaste Jaan Bhi Du Main Gawah Emaan Bhi Du  Kismato Ka Likha Mod Du  Badle Mein Main Tere  Jo Khuda Khud Bhi De  Jannate Sach Kahu Chhod Du  Tumse Zaada Main Na Jaanu  Tumse Khud Ko Main Pehchanu  Tumko Bas Main Apna Maanu Mahiya  Vaaste Jaan Bhi Du  Main Gawah Emaan Bhi Du  Kismato Ka Likha Mod Du Tere Alava Koi Bhi Khawish  Nahi Hai Baaki Dil Mein  Kadam Uthau Jaha Bhi Jaau  Tujhi Se Jaau Millne  Tere Liye Mera Safar  Tere Bina Main Jaau Kidhar  Tumse Zaada Main Na Jaanu  Tumse Khud Ko Main Pehchanu  Tumko Bas Main Apna Maanu Mahiya  Vaste Jaan Bhi Du Main Gawah Emaan Bhi Du  Kismato Ka Likha Mod Du  Badle Mein Main Tere"


   },
   {
     name: "Song by Dhvani Bhanushali",
     path: "song4.mp3",
     img: "img4.jpg",
     singer: "You want me You gotta know me If you love me You gotta show me  Leja leja leja le ja Leja leja re Mujhse door kahin na jaa Bas yahin kahin reh ja Main teri deewani re Afsos tujhe hai kya Mujhse door kahin na jaa Bas yahin kahin reh ja Main teri deewani re Afsos tujhe hai kya Teri meri kahani nayi ban gayi Tu mera ho gaya, main teri ho gayi Jahan jaaye tu sang mujhe leja"
   },
   {
     name: "Ishare Tere",
     path: "song5.mp3",
     img: "img5.jpg",
     singer: "  Let it be, let it be aside Let me know, let me know your mind Would you give me a little love tonight Let it be, let it be aside Let me know, let me know your mind Would you give me a little love tonight Ishare tere kangne de Tareeke dil mangne de Mera vi dil chori keeta Fan tera ban gaya yeh Ishare tere kangne de Tareeke dil mangne de Mera vi dil chori keeta Fan tera ban gaya yeh Saiyan teri har gal jhooti aa Tere hath vich kis di angoothi aa Har kudi naal ve tu gal karda Ja ja ve main tere naal roothi aan"
   },
      {
        name: "Duniyaa",
     path: "song6.mp3",
     img: "img6.jpg",
     singer: "Bulave tujhe yaar aaj meri galiyan Basaun tere sang main alag duniya Bulave tujhe yaar aaj meri galiyan Basaun tere sang main alag duniyaa Na aayein kabhi dono mein zara bhi faasle Bas ek tu ho, ek main hoon aur koyi na Hai mera sab kuch tera tu samajh le Tu chaahe mere hakk ki zameen rakh le Tu saanson pe bhi naam tera likh da Main jiyu jab jab tera dil dhadke Tujhse mera yeh jee nahi bharta Kuch bhi nahi asar ab karta Meri raah tujhse Meri chaah tujhse Mujhe bas yahin reh jana Lagi hain teri aadatein mujhse jab se Hai tere bin pal bhi baras lagte Bulave tujhe yaar aaj meri galiyan Basaun tere sang main alag duniyaa Jo hove tu udaas mujhe dekhe hass ke Tu chaahe mere hakk ki zameen rakh le Tu saanson pe bhi naam tera likh de Main jiyu jab jab tera dil dhadke"
},
{
  
 name:"Psycho Saiyaan" ,
 path:"song7.mp3",
 img:"img7.jpg",
 singer:
 "Tera main, tera main Tera main dummy dummy dumma dum Tera main, tera main Tera main dummy dummy dumma dum Pehle tu neeli akhiyaan ladayi gayi Raaton ki meri needein udaayi gayi Nashe mein tere mujhko dubayi gayi Aise mujhe ghoore tu kaayko, kaayko.Ke jhoothe vaade karke banayi gayi Na jaane kitno ko rulayi gayi Oh thumko se dil ko churayi gayi Aaja tujhe leke chale chai ko, chai kj Oh saiyaan saiyaan ve Oh sa sa saiyaan ve Naa chhod kalaiyan Mod ke bahiyan jaldi se side ho, side ho Aaya mora saiyaan psycho Aaya mora saiyaan psycho Tera main, tera main Tera main dummy dummy dumma dum Tera main, tera main Tera main dummy dummy dumma dum Main ladki seedhi-saadi si Bottle pee li hai aadhi si Main ladki seedhi-saadi si Bottle pee li hai aadhi si Haan teri yeh jo gravity Mujhe kheenche teri ore"
},
{
naam:"Jeetenge Hum",

singer:"Jab andhere mein hamne Umeed ki lau jalana seekha hai Raftar se aage badhkar Apno ko jitana seekha hai To ab thamm kar bhi ek dusre ke sang Har jung jeetenge hum Bade badon ne zor lagaya Zor lagaya sara hum uss desh ke vaasi hain Jo desh kabhi na hara Bade badon ne zor lagaya Zor lagaya sara Hum uss desh ke vaasi hain Jo desh kabhi na hara Haan bol meri awaz mein tu Awaz mila ke yara",

path:"Jeetenge Hum - Dhvani Bhanushali.mp3",
img:"143793-jeetenge-hum-dhvani-bhanushali-mp3-song-300.jpg"





},
]




function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mut
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }



 function reset_slider(){
 	slider.value = 0;
 }


function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}


function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}



function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}



function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}



function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}


function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
       
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
      
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }

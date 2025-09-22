//alert("Welcome To The Website Created For CBSE Skill-Expo 2025")
Array.from(document.getElementsByTagName("input")).forEach((e,i)=>{
    e.addEventListener("keyup",(el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName('bi bi-caret-down-fill')[i].style.transform="rotate(180deg)";     //To rotate the arrow prent in enter your destiny
         } else {
            document.getElementsByClassName('bi bi-caret-down-fill')[i].style.transform="rotate(0deg)";
        }
    })
})




//Making the background change after regular interval

  // Array of background image URLs
  //const backgrounds = [
//    'url("img/Testing1.jpg")',
//    'url("img/Testing2.jpg")',
//    'url("img/Testing3.jpg")',
//    'url("img/Testing4.jpg")'
//  ];
//
//  let current = 0;
//  const banner = document.getElementById('top-banner');
//
//  function changeBackground() {
//    banner.style.backgroundImage = backgrounds[current];
//    current = (current + 1) % backgrounds.length;
//  }
//
//  // Initial background
//  changeBackground();
//
//  // Change every 5 seconds (5000 ms)
//  setInterval(changeBackground, 5000);





  const searchInput = document.getElementById("search-destination");
  const exploreBtn = document.getElementById("explore-btn");

  exploreBtn.addEventListener("click", function () {
    let query = searchInput.value.toLowerCase().trim();
    const sections = document.querySelectorAll("section");

    if (query === "") {
      // If nothing typed → show all
      sections.forEach(sec => sec.style.display = "block");
      return;
    }

    let found = false;
    sections.forEach(sec => {
      let heading = sec.querySelector("h2, h3"); 
      if (heading && heading.textContent.toLowerCase().includes(query)) {
        sec.style.display = "block";  
        found = true;
      } else {
        sec.style.display = "none";   
      }
    });

    if (!found) {
      alert("No matching destination found 🚫");
    }
  });


//Register Tab POP-UP
  function openRegister(event) {
    event.preventDefault(); // stops default <a> behavior
    document.getElementById("registerContainer").style.display = "block";
  }

  function closeRegister() {
    document.getElementById("registerContainer").style.display = "none";
  }












function updateHotelMap(selectElem) {
  const value = selectElem.value;

  const templeSection = selectElem.closest('.hotel-card'); // parent container
  const iframe = templeSection.querySelector('.hotel-map');
  const button = templeSection.querySelector('.hotel-btn a');

  
  let mapSrc = "#";
  let buttonLink = "#";
  let buttonText = "View More";

  if (value === "mahabodhi") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115993.459418751!2d84.83781769726563!3d24.699552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32c8f9df11865%3A0xc6b74e568e427e3f!2sMahabodhi%20Hotel%2CResort%20And%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1758362443670!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotels+near+bodhgaya/";
    buttonText = "View More Hotels near Mahabodhi Temple";
  } 
  else if (value === "bus") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.4477729712185!2d84.97869617558402!3d24.780116348467416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b659b0237c3%3A0xd42da9ac27451e93!2sHotel%20Gharana%20Tree%20%2F%20Best%20Hotel%20in%20Gaya!5e0!3m2!1sen!2sin!4v1758363898357!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+Sikaria+More,+Jail+Area,+Gaya,+Bihar/";
    buttonText = "View More Hotels near Bus Stand";
  } 
  else if (value === "rail") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.374748596407!2d84.98614330718065!3d24.79224527770248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b962e324ff3%3A0x7547ed6856a39ef8!2sHOTEL%20KUSUM%20PALACE!5e0!3m2!1sen!2sin!4v1758363652584!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+gaya+junctioon/";
    buttonText = "View More Hotels near Railway Station";
  } 
  else if (value === "airport") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.4477729712185!2d84.97869617558402!3d24.780116348467416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b659b0237c3%3A0xd42da9ac27451e93!2sHotel%20Gharana%20Tree%20%2F%20Best%20Hotel%20in%20Gaya!5e0!3m2!1sen!2sin!4v1758363898357!5m2!1sen!2sin";
    buttonLink = "https://www.booking.com/searchresults.html?landmark=gaya-airport";
    buttonText = "View More Hotels near Airport";
  }
  else if (value === "vishnupad") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57961.175267181505!2d84.93201074863278!3d24.77580990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bee20fc1709%3A0x37d4efaeaeea9862!2sSRI%20VISHNU%20VIEW%20HOTEL!5e0!3m2!1sen!2sin!4v1758366818088!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+vishnupad+mandir+gaya/";
    buttonText = "View More Hotels near Vishnu Pad Temple";
  }
  else if (value === "mangla") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1811.2848098339657!2d85.00095499839475!3d24.775941300000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bc7027cdddd%3A0xf06333b221a5a0d0!2sOYO%2068904%20Shri%20Vishnu%20Guest%20House!5e0!3m2!1sen!2sin!4v1758413548809!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/place/OYO+68904+Shri+Vishnu+Guest+House";
    buttonText = "View More Hotels near Mangla Gauri Temple";
  }
  else if (value === "sher") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28941.671041563168!2d83.99245494409895!3d24.941985497355127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db74a1923de8b%3A0x5ade5376ae2ebc5!2sHotel%20Maurya%20Royal!5e0!3m2!1sen!2sin!4v1758414304725!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotl+sher+shah+suri+tomb/";
    buttonText = "View More Hotels near Sher Shah Suri Tomb";
  }
  else if (value === "bus-sher") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1811.2848098339657!2d85.00095499839475!3d24.775941300000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bc7027cdddd%3A0xf06333b221a5a0d0!2sOYO%2068904%20Shri%20Vishnu%20Guest%20House!5e0!3m2!1sen!2sin!4v1758413548809!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+aher+shah+suri+timb+bus+stand/";
    buttonText = "View More Hotels near Bus Stand";
  }
  else if (value === "rail-sher") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.920730036009!2d84.01357439678956!3d24.968811499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db1006d26823f%3A0x851419f417044786!2sAKS%20INTERNATIONAL%20HOTEL%20AND%20RESORT!5e0!3m2!1sen!2sin!4v1758414730265!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+sasaram+junction/";
    buttonText = "View More Hotels near Railway Sation";
  }
  else if (value === "airport-sher") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.671123253282!2d84.00584957272484!3d24.96891183104504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db74b24cbc597%3A0x92d5635c21117ca6!2sHotel%20BNS%20International!5e0!3m2!1sen!2sin!4v1758414879432!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+sasaram+airstrip/";
    buttonText = "View More Hotels near Aiport";
  }
  else if (value === "gol") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14250.894949652047!2d83.37279340802607!3d26.753190688700734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144978433b3e3%3A0x69e44af392dba0b0!2sRadisson%20Blu%20Hotel%2C%20Gorakhpur!5e0!3m2!1sen!2sin!4v1758415075340!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+golghar/";
    buttonText = "View More Hotels near Golghar";
  }
  else if (value === "bus-gol") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14245.84778287806!2d83.3367865871582!3d26.79341600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145549077ca6b%3A0x2bb0556b292223ee!2sRamada%20by%20Wyndham%20Gorakhpur%20Gorakhnath%20Mandir%20Road!5e0!3m2!1sen!2sin!4v1758415617007!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/place/Ramada+by+Wyndham+Gorakhpur+Gorakhnath+Mandir+Road/";
    buttonText = "View More Hotels near Bus Stand";
  }
  else if (value === "rail-gol") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461787.74461836787!2d84.2366195706885!3d25.280111994480382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59fcfff1c00b%3A0xfc3e29d64033b3cf!2sHotel%20Gargee%20Grand%20%7C%20Best%20Hotel%20in%20Patna%20Bihar!5e0!3m2!1sen!2sin!4v1758415733812!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Hotel+Patna+Junction/";
    buttonText = "View More Hotels near Railway Staion";
  }
  else if (value === "airport-gol") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14391.486540200332!2d85.04186668715818!3d25.609181399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57b4f16200b9%3A0xb77fdf97c5e16b6f!2sHotel%20keptown!5e0!3m2!1sen!2sin!4v1758415888598!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Hotel+Jay+Prakash+Narayan+International+Airport/";
    buttonText = "View More Hotels near Airport";
  }
  else if (value === "kesariya") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927791.1742195586!2d83.21986880845044!3d24.72055315837166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ce30fca9e7063%3A0x7ffa6450b77b44d7!2sBuddha%20Resort%20hotel%20%26%20restaurant!5e0!3m2!1sen!2sin!4v1758416174685!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Hotel+Near+Kesariya+Stupa/";
    buttonText = "View More Hotels near Golghar";
  }
  else if (value === "bus-kesariya") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14245.84778287806!2d83.3367865871582!3d26.79341600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145549077ca6b%3A0x2bb0556b292223ee!2sRamada%20by%20Wyndham%20Gorakhpur%20Gorakhnath%20Mandir%20Road!5e0!3m2!1sen!2sin!4v1758415617007!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/place/Ramada+by+Wyndham+Gorakhpur+Gorakhnath+Mandir+Road/";
    buttonText = "View More Hotels near Bus Stand";
  }
  else if (value === "rail-kesariya") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228217.81999785034!2d84.60450559453128!3d26.651574000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39933571246b6885%3A0x737a5297b0c1c168!2sHotel%20Anamika%20Residential!5e0!3m2!1sen!2sin!4v1758416391807!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/place/Hotel+Anamika+Residential/";
    buttonText = "View More Hotels near Railway Staion";
  }
  else if (value === "airport-kesariya") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114361.97946706352!2d84.21197126955794!3d26.397265337104585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399301b2c5e70eb3%3A0xa6e6493945cc597a!2sUSHA%20GUEST%20HOUSE!5e0!3m2!1sen!2sin!4v1758416546394!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Hotel+Jay+Prakash+Narayan+International+Airport/";
    buttonText = "View More Hotels near Airport";
  }
  else if (value === "nalanda") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115693.8405233749!2d85.28675534977064!3d25.019391922126314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f273c6f4e30d%3A0x46f225d91e5bf707!2sHotel%20Nalanda%20Guest%20House!5e0!3m2!1sen!2sin!4v1758420557535!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Hotel+Near+Nalanda+Bus+Stand/";
    buttonText = "View More Hotels near Nalanda University";
  }
  else if (value === "bus-nalanda") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115693.8405233749!2d85.28675534977064!3d25.019391922126314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f273c6f4e30d%3A0x46f225d91e5bf707!2sHotel%20Nalanda%20Guest%20House!5e0!3m2!1sen!2sin!4v1758420557535!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Hotel+Near+Nalanda+Bus+Stand/";
    buttonText = "View More Hotels near Bus Stand";
  }
  else if (value === "rail-nalanda") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.997329077725!2d85.44648349357912!3d25.118826600000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f103a656545b%3A0x8e561c708c2d2bc1!2sHotel%20Nalanda%20City!5e0!3m2!1sen!2sin!4v1758420810654!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Hotel+Near+Nalanda+Railway+Station/";
    buttonText = "View More Hotels near Railway Staion";
  }
  else if (value === "airport-nalanda") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.997329077725!2d85.44648349357912!3d25.118826600000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f103a656545b%3A0x8e561c708c2d2bc1!2sHotel%20Nalanda%20City!5e0!3m2!1sen!2sin!4v1758420810654!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Hotel+Near+Nalanda+Railway+Station/";
    buttonText = "View More Hotels near Airport";
  }
  if (value === "sujata") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14497.15014098952!2d84.97856658715821!3d24.717007000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32d9e72cb7943%3A0x2c64f62595b281eb!2sMarasa%20Sarovar%20Premiere%2C%20Bodhgaya!5e0!3m2!1sen!2sin!4v1758435490168!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/Sujata+Hotel/";
    buttonText = "View More Hotels near Mahabodhi Temple";
  } 
  else if (value === "bus-sujata") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.4477729712185!2d84.97869617558402!3d24.780116348467416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b659b0237c3%3A0xd42da9ac27451e93!2sHotel%20Gharana%20Tree%20%2F%20Best%20Hotel%20in%20Gaya!5e0!3m2!1sen!2sin!4v1758363898357!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+Sikaria+More,+Jail+Area,+Gaya,+Bihar/";
    buttonText = "View More Hotels near Bus Stand";
  } 
  else if (value === "rail-sujata") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.374748596407!2d84.98614330718065!3d24.79224527770248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b962e324ff3%3A0x7547ed6856a39ef8!2sHOTEL%20KUSUM%20PALACE!5e0!3m2!1sen!2sin!4v1758363652584!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+gaya+junctioon/";
    buttonText = "View More Hotels near Railway Station";
  } 
  else if (value === "airport-sujata") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.4477729712185!2d84.97869617558402!3d24.780116348467416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b659b0237c3%3A0xd42da9ac27451e93!2sHotel%20Gharana%20Tree%20%2F%20Best%20Hotel%20in%20Gaya!5e0!3m2!1sen!2sin!4v1758363898357!5m2!1sen!2sin";
    buttonLink = "https://www.booking.com/searchresults.html?landmark=gaya-airport";
    buttonText = "View More Hotels near Airport";
  }
  if (value === "barabar") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14495.272058716357!2d84.9558959871582!3d24.733127300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32d1e1ca66607%3A0x3ac6d719d27c258!2sNirvana%20Grand%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sin!4v1758526783612!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+barabar+caves+jehanabad/";
    buttonText = "View More Hotels near Mahabodhi Temple";
  } 
  else if (value === "bus-barabar") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57754.636733024694!2d84.93241328187216!3d25.214524400000027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2b525c2f947c7%3A0xb7b8168f4c7766bb!2sHotel%20Shalimar%20palace!5e0!3m2!1sen!2sin!4v1758526907550!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/place/Hotel+Shalimar+palace/";
    buttonText = "View More Hotels near Bus Stand";
  } 
  else if (value === "rail-barabar") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.191612647875!2d84.98036360735485!3d25.21003705723482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2b54c74dbc521%3A0x36952040e9e7665!2sOYO%2083090%20Hotel%20Palash%20Inn!5e0!3m2!1sen!2sin!4v1758527018572!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+jehanabad+railway+station/";
    buttonText = "View More Hotels near Railway Station";
  } 
  else if (value === "airport-barabar") {
    mapSrc = "";
    buttonLink = "";
    buttonText = "Sorry No Airport Nearby";
  }
  if (value === "rajgir-hills") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57843.70430206791!2d85.376014666449!3d25.026215959080552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2eff5aa5a018d%3A0x57b7ce4612246b8e!2sHotel%20Rajgir!5e0!3m2!1sen!2sin!4v1758529073287!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel++near+rajgir+/";
    buttonText = "View More Hotels near Mahabodhi Temple";
  } 
  else if (value === "bus-rajgir-hills") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.54747865858!2d85.4139445436683!3d25.024782682983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2eff5aa5a018d%3A0x57b7ce4612246b8e!2sHotel%20Rajgir!5e0!3m2!1sen!2sin!4v1758529191254!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel++near+rajgir+/";
    buttonText = "View More Hotels near Bus Stand";
  } 
  else if (value === "rail-rajgir-hills") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.433859781833!2d85.40623209357908!3d25.026711199999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2efa3ed2390f9%3A0x4e8a43c17ff02179!2sHotel%20Sagar%20Inn!5e0!3m2!1sen!2sin!4v1758529219738!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel++near+rajgir+/";
    buttonText = "View More Hotels near Railway Station";
  } 
  else if (value === "airport-rajgir-hills") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.431589621375!2d85.40623209217242!3d25.0267497312919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2efc985095c75%3A0x7b2783c00a9bb019!2sGalaxy%20In%20Hotel%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1758529303788!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel++near+rajgir+/";
    buttonText = "View More Hotels near Airport";
  }
  if (value === "kakolat") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115754.53739640438!2d85.40624957854746!3d24.95490872694945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2ff1659e81157%3A0xf639c36ac5317274!2sHOTEL%20VIDHATA%20PALACE!5e0!3m2!1sen!2sin!4v1758531549133!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+nawada/";
    buttonText = "View More Hotels near Mahabodhi Temple";
  } 
  else if (value === "bus-kakolat") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115754.28736077638!2d85.4062493983612!3d24.95517467984364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f257004d87342f%3A0xaf2690940e0616cf!2sSPOT%20ON%20Devaatithya%20Utsav%20Mandapam%20%26%20Vishraam%20Grih!5e0!3m2!1sen!2sin!4v1758531624543!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+nawada+bus+stand/";
    buttonText = "View More Hotels near Bus Stand";
  } 
  else if (value === "rail-kakolat") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115754.0373236197!2d85.40624921817535!3d24.9554406317112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f257e1b39cf7fb%3A0xa638b6e5476fcfbf!2sHotel%20Surya!5e0!3m2!1sen!2sin!4v1758531694758!5m2!1sen!2sin";
    buttonLink = "https://www.google.com/maps/search/hotel+near+nawada+station/";
    buttonText = "View More Hotels near Railway Station";
  } 


  iframe.src = mapSrc;
  button.href = buttonLink;
  button.textContent = buttonText;



  }
  

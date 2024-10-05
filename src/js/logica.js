const titleCard = document.querySelectorAll(".titleCard");
const periodEstad = document.querySelectorAll(".periodEstad");
const histEstad = document.querySelectorAll(".histEstad");

const btnDaily = document.querySelector(".btnDaily");
const btnWeekly = document.querySelector(".btnWeekly");
const btnMontly = document.querySelector(".btnMonthly");

const darkMode = document.querySelector("#darkMode");
const metallicChic = document.querySelector("#metallicChic");
const containterColorScheme = document.querySelector(".containterColorScheme");

const btnDownArrow = document.querySelector("#downArrow");
const rbCardSchemeColor = document.querySelector(".rbCardSchemeColor");
const sectionDashBoard = document.querySelector(".dashBoard");

const copyRight = document.querySelector(".copyRight");

setDefaultColorsScheme = () => {
  // Detectamos si el usuario tiene habilitado el modo oscuro
  const getScheme = window.matchMedia("(prefers-color-scheme: dark)");

  //Con localStorage.setItem guardo el color scheme a aplicar y sea presistente.
  getScheme.matches === true
    ? localStorage.setItem("colorScheme", "darkMode")
    : localStorage.setItem("colorScheme", "metallicChic");

  //Preguntamos que color scheme tiene configurado el usuario dark o light
  const themeActive = localStorage.getItem("colorScheme");
  //Agregamos el color scheme al elemento html
  document.documentElement.classList.toggle(themeActive);
  document.body.classList.remove(document.body.classList[0]);

  getScheme.matches === true
    ? darkMode.setAttribute("checked", "true")
    : metallicChic.setAttribute("checked", "true");
};

setDefaultColorsScheme();

const selectedColorsScheme = (e) => {
  if (!e.target.matches(".containterColorScheme")) {
    if (e.target.matches(".rbDarkMode") || e.target.matches(".lblDarkMode")) {
      localStorage.setItem("colorScheme", "darkMode");
      document.documentElement.className = localStorage.getItem("colorScheme");
    } else if (
      e.target.matches(
        ".rbMetallicChic" || e.target.matches(".lblMetallicChic")
      )
    ) {
      localStorage.setItem("colorScheme", "metallicChic");
      document.documentElement.className = localStorage.getItem("colorScheme");
    } else if (
      e.target.matches(".rbMechanicalFloaty") ||
      e.target.matches(".lblMechanicalFloaty")
    ) {
      localStorage.setItem("colorScheme", "mechanicalFloaty");
      document.documentElement.className = localStorage.getItem("colorScheme");
    } else if (
      e.target.matches(".rbEarthySerene") ||
      e.target.matches(".lblEarthySerene")
    ) {
      localStorage.setItem("colorScheme", "earthySerene");
      document.documentElement.className = localStorage.getItem("colorScheme");
    }
  }
};

const getdata = async () => {
  const response = await fetch("data/data.json");
  const data = await response.json();
  data.forEach((element, index) => {
    titleCard[index].textContent = element.title;
    periodEstad[index].textContent = element.timeframes.daily.current + "hrs";
    histEstad[index].textContent =
      "Yesterday - " + element.timeframes.daily.previous + "hrs";
  });
};

getdata("Daily");

const dataDaily = async () => {
  const response = await fetch("data/data.json");
  const data = await response.json();
  data.forEach((element, index) => {
    titleCard[index].textContent = element.title;
    periodEstad[index].textContent = element.timeframes.daily.current + "hrs";
    histEstad[index].textContent =
      "Yesterday - " + element.timeframes.daily.previous + "hrs";
  });
  btnWeekly.classList.remove("toggleTextColor");
  btnMontly.classList.remove("toggleTextColor");
  btnDaily.classList.toggle("toggleTextColor");
};

const dataWeekly = async () => {
  const response = await fetch("data/data.json");
  const data = await response.json();
  data.forEach((element, index) => {
    titleCard[index].textContent = element.title;
    periodEstad[index].textContent = element.timeframes.weekly.current + "hrs";
    histEstad[index].textContent =
      "Last Week - " + element.timeframes.weekly.previous + "hrs";
  });
  btnDaily.classList.remove("toggleTextColor");
  btnMontly.classList.remove("toggleTextColor");
  btnWeekly.classList.toggle("toggleTextColor");
};

const dataMonthly = async () => {
  const response = await fetch("data/data.json");
  const data = await response.json();
  data.forEach((element, index) => {
    titleCard[index].textContent = element.title;
    periodEstad[index].textContent = element.timeframes.monthly.current + "hrs";
    histEstad[index].textContent =
      "Last Month - " + element.timeframes.monthly.previous + "hrs";
  });
  btnWeekly.classList.remove("toggleTextColor");
  btnDaily.classList.remove("toggleTextColor");
  btnMontly.classList.toggle("toggleTextColor");
};

const showCardColorScheme = (e) => {
  if (e.target.matches(".downArrow")) {
    rbCardSchemeColor.classList.remove("cardColorSchemeHide");
    rbCardSchemeColor.classList.remove("cardHide");
    rbCardSchemeColor.classList.add("cardColorSchemeShow");

    sectionDashBoard.classList.remove("md:moveCardDesktopDashBoard2");
    sectionDashBoard.classList.add("md:moveCardDesktopDashBoard");
    sectionDashBoard.classList.add("md:cardPositionFinal");

    sectionDashBoard.classList.remove("cardDashBoardMobile2");
    sectionDashBoard.classList.add("cardDashBoardMobile");
    sectionDashBoard.classList.add("cardPositionFinal");

    copyRight.classList.remove("md:DownToUpCopyRight");
    copyRight.classList.remove("md:cardCopyRight");
    copyRight.classList.add("md:UpToDownCopyRight");
    copyRight.classList.add("md:cardCopyRightPositionFinal");

    // Coportamiento para la viewport mobile 
    copyRight.classList.remove("slideDownToUpCopyRightMobile");
    copyRight.classList.remove("cardCopyRightMobile");
    copyRight.classList.add("slideUpToDownCopyRightMobile");
    copyRight.classList.add("cardCopyRightPositionFinalMobile");
    
    btnDownArrow.classList.remove("downArrow");
    btnDownArrow.classList.add("upArrow");
    // btnDownArrow.setAttribute("src","/assets/images/up-arrow.svg");
    setTimeout(()=>{btnDownArrow.setAttribute("src","../assets/images/up-arrow.svg")},600);

  }else if(e.target.matches(".upArrow")){
    rbCardSchemeColor.classList.remove("cardColorSchemeShow");
    rbCardSchemeColor.classList.add("cardHide");
    rbCardSchemeColor.classList.add("cardColorSchemeHide");

    sectionDashBoard.classList.remove("md:moveCardDesktopDashBoard");
    sectionDashBoard.classList.remove("md:cardPositionFinal");
    sectionDashBoard.classList.add("md:moveCardDesktopDashBoard2");
    
    sectionDashBoard.classList.remove("cardDashBoardMobile");
    sectionDashBoard.classList.remove("cardPositionFinal");
    sectionDashBoard.classList.add("cardDashBoardMobile2");

    copyRight.classList.remove("md:UpToDownCopyRight");
    copyRight.classList.remove("md:cardCopyRightPositionFinal");
    copyRight.classList.add("md:DownToUpCopyRight");
    copyRight.classList.add("md:cardCopyRight");

    // Coportamiento para la viewport mobile
    copyRight.classList.remove("slideUpToDownCopyRightMobile");
    copyRight.classList.remove("cardCopyRightPositionFinalMobile");
    copyRight.classList.add("slideDownToUpCopyRightMobile");
    copyRight.classList.add("cardCopyRightMobile");

    btnDownArrow.classList.remove("upArrow");
    btnDownArrow.classList.add("downArrow");
    
    setTimeout(()=>{btnDownArrow.setAttribute("src","../assets/images/down-arrow.svg")},600);
  }
};

btnDaily.addEventListener("click", dataDaily);
btnWeekly.addEventListener("click", dataWeekly);
btnMontly.addEventListener("click", dataMonthly);

containterColorScheme.addEventListener("click", selectedColorsScheme);
btnDownArrow.addEventListener("click", showCardColorScheme);

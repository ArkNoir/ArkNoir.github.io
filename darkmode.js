let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
//Turn on the darkmode//
const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}
//Turn on darkmode//
//Turn off darkmode// 
const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)

}
//Turn off darkmode//
// able to switch between active to null//
if(darkmode === "active") enableDarkmode()
// able to switch between active to null & get the info from event listener//

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

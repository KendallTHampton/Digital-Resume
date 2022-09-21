const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')


function switchTheme(e)
{
    if (e.target.checked)
    {
        document.documentElement.setAttribute('html-theme', "dark")
        localStorage.setItem('theme', "dark")
    }
    else
    {
        document.documentElement.setAttribute('html-theme', "light")
        localStorage.setItem('theme', "light")
    }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

if (currentTheme)
{
    document.documentElement.setAttribute('html-theme', currentTheme)

    if (currentTheme === 'dark')
    {
        toggleSwitch.checked = true
    }


}

toggleSwitch.addEventListener('change', switchTheme, false)
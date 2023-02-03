let $burgerMenu = document.querySelector('#burger-menu')
let $modal = document.querySelector('.modal')
let $modalClose = document.querySelector('#span')
let $burgerImg = document.querySelector('#burger-img')
let $modalContent = document.querySelector('.modal-content')

console.log($modalContent.value);


let switchCount = 1

$burgerMenu.addEventListener('click', function () {
    if (switchCount) {
        $modal.style.transform = 'translateY(0%)'
        document.querySelector('body').style.overflow = "hidden"
        $burgerImg.classList.add('hidden')
        $modalClose.classList.remove('hidden')
        switchCount = 0
        $modalContent.style.padding = '10%'
    }   else{
        $modal.style.transform = 'translateY(-100%)'
        document.querySelector('body').style.overflow = "auto"
        $modalClose.classList.add('hidden')
        $burgerImg.classList.remove('hidden')
        switchCount = 1
        $modalContent.style.paddingTop = '100%'
    }
})

$modalClose.addEventListener('click', function () {
    $modal.style.transform = 'translate(100%)'
    document.querySelector('body').style.overflow = "auto"
})
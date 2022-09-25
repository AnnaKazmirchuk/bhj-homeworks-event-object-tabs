const tab = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tab__content');

const tabArray = Array.from(tab);
const contentArray = Array.from(tabContent);

for (const tabElement of tabArray) {
    tabElement.addEventListener('click', function() {
        tabElement.classList.add('tab_active');
        let index = tabArray.indexOf(tabElement);
        tabContent[index].classList.add('tab__content_active');

        for (const tabActive of tabArray) {
            if (tabActive !== tabElement) {
                tabActive.classList.remove('tab_active');
                let indexActive = tabArray.indexOf(tabActive);
                tabContent[indexActive].classList.remove('tab__content_active')
            }
        }
    }
    )
}
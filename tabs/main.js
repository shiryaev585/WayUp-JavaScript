const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const myTabs = document.getElementById('my-tabs');
const myContent = document.querySelectorAll('.my-content');

const changeClass = (el) => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
      }
  el.classList.add('active');
}

const changeMyTabsClass = (el) => {
    for(let i = 0; i < myTabs.children.length; i++) {
        myTabs.children[i].classList.remove('active')
    }
    el.classList.add('active');
}

tabs.addEventListener('click', (e) => {
  const currentTab = e.target.dataset.btn;
  changeClass(e.target);
  content.forEach((item) => {
    item.classList.remove('active');
    if (item.dataset.content === currentTab) {
      item.classList.add('active');
    }
  });
});

myTabs.addEventListener('click', (e) => {
    const currentTab = e.target.dataset.mybtn;
    changeMyTabsClass(e.target);
    myContent.forEach((item) => {
      item.classList.remove('active');
      if (item.dataset.content === currentTab) {
        item.classList.add('active');
      }
    });
  });

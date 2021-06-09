const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const myTabs = document.getElementById('my-tabs');

const changeCustomClass = (arr, el) => {
  for (let i = 0; i < arr.children.length; i++) {
    arr.children[i].classList.remove('active');
  }
  el.classList.add('active');
}

const changeClass = (el) => {
  changeCustomClass(tabs, el)
  changeCustomClass(myTabs, el)
};

const bindContentWhithTabs = (currentTab) => {
  content.forEach((item) => {
    item.classList.remove('active');
    if (item.dataset.content === currentTab) {
      item.classList.add('active');
    }
  });
};

tabs.addEventListener('click', (e) => {
  const currentTab = e.target.dataset.btn;
  changeClass(e.target);
  bindContentWhithTabs(currentTab);
});

myTabs.addEventListener('click', (e) => {
  const currentTab = e.target.dataset.btn;
  changeClass(e.target);
  bindContentWhithTabs(currentTab);
});


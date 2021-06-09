const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const myTabs = document.getElementById('my-tabs');

const changeClass = (el) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active');
  }
  for (let i = 0; i < myTabs.children.length; i++) {
    myTabs.children[i].classList.remove('active');
  }
  el.classList.add('active');
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


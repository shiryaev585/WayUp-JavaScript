const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const myTabs = document.getElementById('my-tabs');

const changeClass = (arr, el) => {
  for (let i = 0; i < arr.children.length; i++) {
    arr.children[i].classList.remove('active');
  }
  el.classList.add('active');
}

// обёртка позволяющая избегать дублирование цикла, при появлении нового массива елементов, нуждающихся в смене класса
const changeClassContainer = (el) => {
  changeClass(tabs, el)
  changeClass(myTabs, el)
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
  changeClassContainer(e.target);
  bindContentWhithTabs(currentTab);
});

myTabs.addEventListener('click', (e) => {
  const currentTab = e.target.dataset.btn;
  changeClassContainer(e.target);
  bindContentWhithTabs(currentTab);
});


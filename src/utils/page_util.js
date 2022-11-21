function resizeHandler(curr, setTab, tabRef) {
  const handler = (e) => {
    e.preventDefault();
    const innHeight = window.innerHeight;
    const { scrollTop } = curr;
    if (scrollTop < innHeight * 0.5) {
      tabScrollIntoView(tabRef, setTab)(0)
    } else if (scrollTop < innHeight * 1.5 && scrollTop >= innHeight * 0.5) {
      tabScrollIntoView(tabRef, setTab)(1)
    } else if (scrollTop < innHeight * 2.5 && scrollTop >= innHeight * 1.5) {
      tabScrollIntoView(tabRef, setTab)(2)
    } else {
      tabScrollIntoView(tabRef, setTab)(3)
    }
  };
  return handler;
}

function onePageScrollHandler(curr, setTab, tabRef) {
  const handler = (e) => {
    e.preventDefault();
    const innHeight = window.innerHeight;
    const { deltaY } = e;
    const { scrollTop } = curr;
    
    if (deltaY > 0) {
      if (scrollTop < innHeight * 0.95) {
        tabScrollIntoView(tabRef, setTab)(1);
      } else if (scrollTop < innHeight * 1.9) {
        tabScrollIntoView(tabRef, setTab)(2);
      } else {
        tabScrollIntoView(tabRef, setTab)(3);
      }
    } else {
      if (scrollTop >= innHeight * 2.85) {
        tabScrollIntoView(tabRef, setTab)(2);
      } else if (scrollTop >= innHeight * 1.9) {
        tabScrollIntoView(tabRef, setTab)(1);
      } else {
        tabScrollIntoView(tabRef, setTab)(0);
      }
    }
  };

  return handler;
}

function tabScrollIntoView(tabRef, setTab) {
  const handler = (idx) => {
    tabRef.current[idx].scrollIntoView({ behavior: "smooth" });
    setTab(idx);
  };

  return handler;
}

export { tabScrollIntoView, resizeHandler, onePageScrollHandler };

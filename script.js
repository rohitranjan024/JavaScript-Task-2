var currentPage = 1;
    var pageNumberElement1 = document.getElementById('page-number1');
    var pageNumberElement2 = document.getElementById('page-number2');
    var pageNumberElement3 = document.getElementById('page-number3');
    var pagea1 = document.getElementById('page-a1');
    var pagea2 = document.getElementById('page-a2');
    var pagea3 = document.getElementById('page-a3');

    function previousPage() {
      if (currentPage > 1) {
        currentPage--;
        updatePageNumber();
        updatePageaPrev();
      }
    }

    function nextPage() {
      currentPage++;
      updatePageNumber();
      updatePageaNext();
    }

    function updatePageNumber() {
      pageNumberElement1.textContent = 'Page ' + currentPage;
      pageNumberElement2.textContent = 'Page ' + (currentPage+1);
      pageNumberElement3.textContent = 'Page ' + (currentPage+2);
    }

    function updatePageaNext(){
      pagea1.textContent = 'Page ' + (currentPage+1);
      pagea2.textContent = 'Page ' + (currentPage+2);
      pagea3.textContent = 'Page ' + (currentPage+1);
    }

    function updatePageaPrev(){
      pagea1.textContent = 'Page ' + (currentPage+1);
      pagea2.textContent = 'Page ' + (currentPage+2);
      pagea3.textContent = 'Page ' + (currentPage+1);
    }
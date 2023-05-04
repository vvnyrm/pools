let data = [];
function renderItems(collection) {
    console.log("Pools", collection);
    // data = collection
    collection.forEach(function(item) {

    });

collection.forEach(function(item) {

        const listItem = document.createElement('div');
        listItem.classList.add("pools");

        const name = document.createElement('h3');
        name.innerHTML = item.NAME;
        listItem.appendChild(name);

        const itemDetails = `
            <img src="${item.image}"/>
            <p>POOLTYPE: ${item.POOLTYPE}</p>
            <p>BOROUGH: ${item.BOROUGH}</p>
            <p>OBJECTID: ${item.OBJECTID}</p>
        `;
        listItem.insertAdjacentHTML('beforeend', itemDetails);
  
        // if (item.POOLTYPE == "Intermediate") {
        //   listItem.classList.add('intermediate');
        // }
    
        // if (item.POOLTYPE == "Mini") {
        //   listItem.classList.add('mini');
        // }
    
        // if (item.POOLTYPE == "Wading") {
        //   listItem.classList.add('wading');
        // }
    
        // if (item.POOLTYPE == "Diving") {
        //   listItem.classList.add('diving');
        // }
    
        // if (item.POOLTYPE == "Olympic") {
        //   listItem.classList.add('olympic');
        // }

        //trying adding data-POOLTYPE
        listItem.dataset.pooltype = item.POOLTYPE;

        var collectionList = document.querySelector('.collection');
        collectionList.appendChild(listItem);
    }) 
    };

    let filterBtns = document.querySelectorAll(".btn-filter").forEach((btn) => {
      btn.addEventListener("click", function (event) {
        console.log("weeeeee", event.target.id);

        let listofPools = document.querySelectorAll("div.pools");

        listofPools.forEach(function searchPoolsFilter(item) {
          if (item.dataset.pooltype.includes(event.target.dataset.pooltype)) {
            item.classList.remove('hidden')
            console.log(item);
          } else {
            item.classList.add('hidden')
          }
        })
      })
    })



fetch('pools.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(collection) {
        renderItems(collection.reverse());
    });

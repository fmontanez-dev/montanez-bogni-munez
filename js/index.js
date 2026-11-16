let phonesCategory = "https://dummyjson.com/products/category/smartphones";

let phoneSection = document.querySelector(".productos");

let phones = "";

fetch(phonesCategory)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let phoneList = data.products

        for (let i = 0; i < phoneList.length; i++) {
            phones += `

    
                <article>
                <img src="${phoneList[i].thumbnail}" alt="${phoneList[i].title}">
                <p> Model: ${ phoneList[i].title }</p>
                </article >
                
                `
        }
      
        phoneSection.innerHTML= phones

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


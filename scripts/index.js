const url ="https://api.adviceslip.com/advice";

 fetch(url)
   .then((response) => {
     return response.json();
   })
   .then((data) => {
     let quote = data;

    //console.log(quote["slip"].id, quote["slip"].advice);
    document.querySelector('.advice-id').innerHTML = `ADVICE #${quote["slip"].id}`;
    document.querySelector('.advice').innerHTML = `"${quote["slip"].advice}"`;

   })
   .catch((error) => {
     console.log(error);
   });




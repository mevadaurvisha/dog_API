let printlist = document.getElementById('printlist');
let dogImage = document.getElementById('images');
const dogAPI = () => {
      fetch('https://dog.ceo/api/breeds/list/all').then((res) => {
            return res.json();
      }).then((list) => {
            let breedlist = list.message;
            console.log(breedlist);

            for (const breed in breedlist) {
                  
                  if(breedlist[breed].length == 0){
                        
                        console.log('breed[key]',breedlist[breed]);

                        printlist.innerHTML += `<li onclick="return listImage('${breed}')" style="cursor:pointer">${breed}</li>`;

                  }else{

                        console.log(breedlist[breed]);

                        orderlist = '<ol>';

                        for (const subbreed in breedlist[breed]) {
                              orderlist += `<li onclick="return listImage('${breed}')" style="cursor:pointer">${breedlist[breed][subbreed]}</li>`
                        }

                        orderlist += '</ol>';

                        printlist.innerHTML += `<li>${breed} ${orderlist}</li>`


                  }
            }

      }).catch((err) => {

            console.log(err);

      })
}

dogAPI();

const listImage = (breed) => {

      console.log("clickkk");
      fetch(`https://dog.ceo/api/breed/${breed}/images`).then((res) => {

            return res.json();
      }).then((list) => {

            let breedImage = list.message;

            console.log('breed' ,breedImage);

            dogImage.innerHTML = " ";

            breedImage.forEach((img) => {
                  dogImage.innerHTML += ` <div class="col-3 p-2" style="height: 500px;>
                                                <img src="${img}" alt="img" class="h-100 object-fit-cover" />
                                          </div>`;
            })

      }).catch((err) => {

            console.log('err',err);
      })


}

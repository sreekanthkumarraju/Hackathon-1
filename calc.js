
//fetching https://cataas.com/api/cats using fetch  
document.getElementById("cats").innerText=getCats();
function getCats(){

    const url="https://cataas.com/api/cats";
     fetch(url)
       .then(function(response) {

         return  response.json();
        })

        .then(function (data)
         {
          console.log(data)
           displayData(data);  //calling  displayData function and passing data as argument
         })
           
         .catch(function (error) {
             console.log(error);
         });
       
   }


  //list the cats in https://cataas.com/api/cats  

  async function displayData(data) {

     try                                              //try and catch block to handle errors
       {
    
         let userDIv=document.querySelector("#results");
         userDIv.innerHTML="";

         let table=document.createElement("table");   //inserting data in a table 

         data.forEach(function (cats)  
           {
              let row=table.insertRow();              //creating  a row and inserting each cat details into it
      
              let n=cats.tags.length;
              for(var i=0;i<n;i++)
                 {
             
                    let id=row.insertCell();          
                    id.innerText=cats.tags[i];       // creating a column and inserting cat details
                  }
        

             });

          await userDIv.appendChild(table);          // appending cat details data into userDiv
       
        } 
        
      catch(err)
          {
              console.log(error)
           }
   }


   //code for filtering cats based on the searched keyword using this api https://cataas.com/api/cats?tags=cute.
  function filterCats()
    {

     try
      {
  
         var  input = document.getElementById("search_cat");
         var  entered_value=input.value;            //searched value is stored in entered_value variable
         console.log(entered_value);
         
          const url="https://cataas.com/api/cats?tags=cute";
        
          fetch(url)                                  //fetching catsAPI url using fetch 
              .then(function(response) {              //collecting  the response using---> then

               return  response.json();               //  getting the response in JSON format
            })

          .then( function (data)
               {
                 console.log(data);
                 

          
                 if(entered_value!=" ")
                   {                                 //upon clicking the button display image on a webpage
            
                        document.write(`<img src="https://cataas.com/cat/cute/says/${entered_value}" alt="cat" target="_blank" width=400px height=400px >`) 
                        
                    }  
        
                 
                   
              })        
       
      }

       catch(err) 
           {
               console.log(error);
           }

    }



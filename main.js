// // ELEMENT SELECTORS

// // Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));



// // MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// // ul.firstElementChild.textContent = 'Hello';
// // ul.firstElementChild.style.color = "green";

// // ul.children[1].innerText = 'Brad';
// // ul.children[1].style.background='yellow'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
//      btn.style.background = 'blue';

// // --------------------------------------------------------------------------------
// // EVENTS


// // Mouse Event
//      const btn = document.querySelector('.btn');
//      btn.addEventListener('click', e => {
//      e.preventDefault();
//      console.log(e.target.className);
//      document.getElementById('my-form').style.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
//      // const ul = document.querySelector('.items');
//      // ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//    });

// //    ------------------Mouseover---------------------
// // const btn = document.querySelector('.btn');
//      btn.addEventListener('mouseover', e => {
//      e.preventDefault();
//      console.log(e.target.className);
//      document.getElementById('my-form').style.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
//      const ul = document.querySelector('.items');
//      ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//    });

//    //    ------------------Mouseout---------------------
// // const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', e => {
//      e.preventDefault();
//      console.log(e.target.className);
//      document.getElementById('my-form').style.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
//      const ul = document.querySelector('.items');
//      ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//    });
   



//    // Keyboard Event
//    const nameInput = document.querySelector('#name');
//    nameInput.addEventListener('input', e => {
//      document.querySelector('.container').append(nameInput.value);
//    });
   
   
   // USER FORM SCRIPT
   
   // Put DOM elements into variables
   const myForm = document.querySelector('#my-form');
     const nameInput = document.querySelector('#name');
   const emailInput = document.querySelector('#email');
   const msg = document.querySelector('.msg');
   const userList = document.querySelector('#users');
   
   // Listen for form submit
   myForm.addEventListener('submit', onSubmit);
   
   function onSubmit(e) {
     e.preventDefault();
     
     if(nameInput.value === '' || emailInput.value === '') {
       // alert('Please enter all fields');
       msg.classList.add('error');
       msg.innerHTML = 'Please enter all fields';
   
       // Remove error after 3 seconds
       setTimeout(() => msg.remove(), 3000);
     } else {

      // -------Store the value in local storage----------
        const name = e.target.name.value;
        const email = e.target.email.value;
        
        let myobj={ name:name,
          email:email

        };
        
        localStorage.setItem("myobj",JSON.stringify(myobj));
        

        // localStorage.setItem('Name',name);
        // localStorage.setItem('Email',email);


       // Create new list item with user
       const li = document.createElement('li');

      // Add text node with input values
       li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
   
       // Add HTML
       // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
   
       // Append to ul
       
       userList.appendChild(li);
   
       // Clear fields
       nameInput.value = '';
       emailInput.value = '';
      
     }
   }

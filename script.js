// function myfun(){
//     document.getElementById
//      ('form-wrapper').classList.add
//       ('active');
//    }
  
//   function closer(){
//      document.getElementById('form-wrapper')
//     .classList.remove('active');
//   }

// const dialog = document.querySelector("dialog");
// const showButton = document.querySelector("dialog + button");
// const closeButton = document.querySelector("dialog button");

// // "Show the dialog" button opens the dialog modally
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// // "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });

const showDialogBtn = document.getElementById('showDialogBtn');
const favDialog = document.getElementById('favDialog');

showDialogBtn.addEventListener('click', () => favDialog.showModal());

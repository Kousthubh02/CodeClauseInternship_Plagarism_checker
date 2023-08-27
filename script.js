let fileInput = document.querySelector(".uploadbtn");

document.querySelector(".submitbtn").addEventListener("click", (e) => {
    e.preventDefault();
  const selectfile = fileInput.files[0];
  if (!selectfile) {
    console.log("no file selected");
    return;
  }
  const formData = new FormData();
  formData.append('language', 'en');
  formData.append('text', selectfile);

//   console.log(formData.get('file')); 


  fetch('https://cors-anywhere.herokuapp.com/https://plagiarismcheck.org/api/v1/text', {
      method: 'POST',
      body: formData,
      headers:{
        'X-API-TOKEN':'Sc9LR1hzjuGv0QxsVw23vuzxe-kC7Pab'
      }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
});






// {"success":true,"data":{"text":{"id":18050981,"filename":"file.odt","created_at":"1693073687000","updated_at":"1693073688000","submitted_at":"1693073688000","is_deleted":false,"deleted_at":null,"state":3,"language":"en","pages":1,"words":127,"group_id":null,"custom_author":null,"user_id":1011777,"report_id":null,"ai_report_id":null},"charged":0,"bonus_charged":1,"groupId":null}}

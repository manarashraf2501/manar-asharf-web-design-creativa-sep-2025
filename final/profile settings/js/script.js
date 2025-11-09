

  // كل أزرار التابات
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // نحذف التفعيل من الكل
      tabs.forEach(btn => btn.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      // نفعّل التاب اللي المستخدم ضغط عليها
      tab.classList.add("active");
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  })
 


function validateForm(event) {

    if (event) {
        event.preventDefault();
    }

    let isValid = true;
    const form = document.getElementById('myForm');
    

    let  fields = [
        { id: 'first-name', errorId: 'nameError', pattern: /^[A-Za-z]+$/ },
        { id: 'last-name', errorId: 'lastNameError', pattern: /^[A-Za-z]+$/ },
        { id: 'display-name', errorId: 'displayError', pattern: /^[A-Za-z0-9]+$/ },
        { id: 'designation', errorId: 'digoError', pattern: /^[A-Za-z\s]+$/ },
        { id: 'email', errorId: 'emailError', pattern: /^\S+@\S+\.\S+$/ },
      
        { id: 'phone', errorId: 'phoneError', pattern: /^\d{10,14}$/ } 
    ];

    let phoneErrorDiv = form.querySelector('input#phone').nextElementSibling;
    if (phoneErrorDiv && phoneErrorDiv.id === 'nameError') {
        phoneErrorDiv.id = 'phoneError';
    }


    let.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const errorElement = document.getElementById(field.errorId);
        
        errorElement.textContent = '';
        inputElement.classList.remove('is-invalid');

        if (inputElement.value.trim() === '') {
            errorElement.textContent = 'هذا الحقل مطلوب.';
            inputElement.classList.add('is-invalid');
            isValid = false;
            return; 
        }

        if (field.id === 'email' && !field.pattern.test(inputElement.value.trim())) {
            errorElement.textContent = 'يرجى إدخال بريد إلكتروني صحيح.';
            inputElement.classList.add('is-invalid');
            isValid = false;
            return;
        }

        if (field.id === 'phone' && !field.pattern.test(inputElement.value.trim())) {
            errorElement.textContent = 'رقم الهاتف يجب أن يتكون من 10 إلى 14 رقم.';
            inputElement.classList.add('is-invalid');
            isValid = false;
            return;
        }
    });

    let tagsContainer = document.getElementById('tagsInput');
    let existingTags = tagsContainer.querySelectorAll('.tag').length;
    let languagesLabel = document.querySelector('label.form-label.p-2');
    
    languagesLabel.classList.remove('text-danger'); 
    
    if (existingTags === 0) {
        languagesLabel.classList.add('text-danger', 'fw-bold'); 
        alert("يجب إضافة لغة واحدة على الأقل!");
        isValid = false;
    }


    if (isValid) {
        document.getElementById('result').textContent = 'تم إرسال البيانات بنجاح (للنموذج).';
    }
}
  

function removeMember (button){
   button.closest('.card').remove();
}







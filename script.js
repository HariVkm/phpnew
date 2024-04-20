
        function myFunction() {
         console.log("hello hai")
            const name=document.getElementById('name');
            const nameValue=name.value;
            const nameerror=document.getElementById('nameerror')
            if (nameValue === '') {
                nameerror.innerHTML = 'Name is requird';
                name.style.borderColor="red"
                return false;
            }
            else {
                return true;
            }


        }
        
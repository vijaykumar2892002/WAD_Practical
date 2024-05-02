
document.forms.formRegistration.addEventListener("submit",formSubmit);

function formSubmit(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let div=document.getElementById("div").value;

    

    // Validate phone number
    let phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(number)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    let formData={name,number,div};
   
    let arr=JSON.parse(localStorage.getItem('user')) || [];
    arr.unshift(formData);
    console.log(arr);
    localStorage.setItem('user',JSON.stringify(arr));
    DisplayData()

    document.getElementById("clearBtn").addEventListener("click", clearUserFromLocalStorage);

    function clearUserFromLocalStorage() {
        localStorage.removeItem('user');
        
    }

}
function DisplayData() {
    let users = JSON.parse(localStorage.getItem("user")) ||[];
    let html = ` <center>
    <table border='2px'>
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Phone-Number
                </th>
                <th>
                    Division
                </th>
            </tr>
        </thead>
        <tbody>
    `;
    users.forEach(element => {
        html += `
        <tr>
        <td>${element?.name}</td>
        <td>${element?.number}</td>
        <td>${element?.div || "11"}</td>
        </tr>
        `
    })

    html += '</tbody> </table></center>';

    const w = open()
    w.document.body.innerHTML = html;
}
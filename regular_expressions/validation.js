// const input= document.querySelectorAll(input)
// const patterns={
//     telephone: /^\d{11}$/
// };
// function validate(field,regex){
//     if(regex.test(field.value)){
//         field.className="valid"
//     }
//     else(regex.test(field.value)){
//         field.className="invalid"
//     }

// };
// input.forEach(input => {
//     input.addEventListener('keyup', (e) => {
//     //   console.log(e.target.attributes.name.value);
//     validate(e.target,patterns[e.target.attributes.name.value])
//     });
//   });
  const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^\d{10}$/,
    username:/^[a-zA-z\d]{5,12}$/,
    password: /^[\w@_$]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(field, regex) {
    console.log (regex.test(field.value));
    if (regex.test(field.value)) {
        field.classList.remove("invalid");
        field.classList.add("valid");
    } else {
        field.classList.remove("valid");
        field.classList.add("invalid");
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.getAttribute('name')]);
    });
});

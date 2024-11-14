
const generateRfc = () => {
  const name = document.getElementById("name").value.toUpperCase();
  const lastName1 = document.getElementById("lastName1").value.toUpperCase();
  const lastName2 = document.getElementById("lastName2").value.toUpperCase();

  const dataUser = document.getElementById("date").value;
  [year, month, day] = dataUser.split("-");
  let showRFC = document.getElementById("generador-rfc");

  dataUser,name,lastName1, lastName2
      ? (showRFC.innerHTML = `${lastName1.substring(0,2)}${lastName2.substring(0, 1)}${name.substring(0, 1)}${year.substring(2,4)}${month}${day}XX`)
      :  alert("Complete todos los campos.") 
};

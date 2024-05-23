function sum() {
  let firstNum = document.getElementById("firNum").value;
  let lastNum = document.getElementById("secNum").value;
  return (document.getElementById("para").innerText =
    Number(firstNum) + Number(lastNum));
}

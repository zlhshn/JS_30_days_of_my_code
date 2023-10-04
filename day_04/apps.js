

let month = prompt("enter amonth");

month = month.toLowerCase()

switch (month) {
  case "ocak":
  case "mart":
  case "mayıs":
  case "temmuz":
  case "agustos":
  case "ekim":
  case "aralik":
    console.log(`${month} has a 31 days`);
    break;
  case "nisan":
  case "haziran":
  case "eylül":
  case "kasim":
    console.log(`${month} has a 30 days`);
    break;

  case "subat":
    console.log(`${month} has a 29 days`);
    break;
  default:
    console.log("hatali giris yaptiniz");
    break;
}

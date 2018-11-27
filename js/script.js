function openTabs(Tabnya) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabnya");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  
  document.getElementById(Tabnya).style.display = "block";
}


document.getElementById("defaultOpen").click();



function konfirmasi () {

	var yakin = confirm("Apakah anda ingin menambahkan data?");

if (yakin ===true) {
	input();
} else {
	document.forms['biodata'].reset();
}

}

function input() {
	alert("Data berhasil ditambahkan");

	var A = document.forms['biodata']['Nama'].value;
	var B = document.forms['biodata']['NIP'].value;
	var C = document.forms['biodata']['KTP'].value;
	var D = document.forms['biodata']['Gelar'].value;
	var E = document.forms['biodata']['Tempat'].value;
	var F = document.forms['biodata']['Telepon'].value;
	var G = document.forms['biodata']['E-mail'].value;
	var H = document.forms['biodata']['Fakultas'].value;
	var I = document.forms['biodata']['jurusan'].value;

	var tabel = document.getElementById('output');
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	

	cell1.innerHTML = A;
	cell2.innerHTML = B;
	cell3.innerHTML = C;
	cell4.innerHTML = D;
	cell5.innerHTML = E;
	cell6.innerHTML = F;
	cell7.innerHTML = G;
	cell8.innerHTML = H;
	cell9.innerHTML = I;
}





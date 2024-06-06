document.getElementById('message-form').addEventListener('submit', function(event){
    event.preventDefault();

    changeName();
    validateForm();
    
});

function validateForm(){
    var nama = document.getElementById('nama').value;
    if(nama === ""){
        alert('nama harus diisi');
        return false;
    };
    
    var tanggal_lahir = document.getElementById('tanggal-lahir').value;
    if(tanggal_lahir === ""){
        alert('tanggal lahir harus diisi');
        return false;
    }

    var jenis_kelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
    if(jenis_kelamin === null){
        alert('jenis kelamin harus dipilih');
        return false;
    };

    var pesan = document.getElementById('pesan-pengguna').value;
    if(pesan === ""){
        alert('pesan harus diisi');
        return false;
    };

    var kolomdData = document.getElementById('kolom-data');

    var newData = document.createElement('div');
    newData.innerHTML = "Current time: " + new Date().toLocaleTimeString() + "<br>" + 
                            "Nama: " + nama + "<br>" + 
                            "Tanggal lahir: " + tanggal_lahir + "<br>" +
                            "Jenis kelamin: " + jenis_kelamin.value + "<br>" +
                            "Pesan: " + pesan + "<br>";

    kolomdData.innerHTML = "";


    kolomdData.appendChild(newData);
    alert('Halo ' + nama);
    document.getElementById('message-form').reset();

}

function changeName(){
    var newName = document.getElementById('nama').value;

    document.querySelector('#change-name').textContent = 'Halo ' + newName + ', Welcome to website';
}

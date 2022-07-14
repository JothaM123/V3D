function run(file) { 
    
    var model = file.files[0]
    var read = new FileReader()
    read.readAsDataURL(model)

    read.onload = function () { 
        document.getElementById("model").src = read.result
        document.getElementById("model").style.display = "block"
    }

    read.onerror = function () { 
        alert(read.error)
    }
}
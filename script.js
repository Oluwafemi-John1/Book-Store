function toast(message, colour = 'red') {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {

            background: colour
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

var allBooks = []
function addBook() {
    if (book.value == '') {
        // alert('Guy, fill in something')
        // errorMsg.style.display = 'block'
        toast('Kindly fill in the input')
    } else {
        errorMsg.style.display = 'none'
        allBooks.push(book.value)
        toast('Added succesfully', 'green')
        console.log(allBooks);
        // book.value = ''
        document.getElementById('book').value = ''
        displayOurBooks()
    }
}

function deleteAny() {
    if (allBooks.length < 1) {
        alert("Nothing to delete, shine your eyes")
    } else {
        var indexToDelete = Number(prompt('Enter which number to delete'))
        console.log(indexToDelete);
        if (indexToDelete > allBooks.length) {
            // alert('Invalid number entered')
            toast('Invalid number entered')
        } else {
            allBooks.splice(indexToDelete - 1, 1)
            displayOurBooks()
        }
    }
}

function displayOurBooks() {
    displayBooks.innerHTML = ""
    displayBooks.innerHTML = `
        <table class="table table-bordered" id="table">
            <th>S/N</th>
            <th>Books</th>
        </table>
        `
    for (var i = 0; i < allBooks.length; i++) {
        console.log(allBooks[i])
        table.innerHTML += `
            <td>${i + 1}</td>
            <td>${allBooks[i]}</td>
            `
    }
}
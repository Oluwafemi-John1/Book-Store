function toast(message = 'Welcome', colour = 'red', duration = 3000) {
    Toastify({
        text: message,
        duration: duration,
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
        toast('Kindly fill in the input','red',1500)
    } else {
        // errorMsg.style.display = 'none'
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
        toast("Nothing to delete, shine your eyes", "black")
    } else {
        var indexToDelete = Number(prompt('Enter which number to delete'))
        console.log(indexToDelete);
        if (indexToDelete > allBooks.length) {
            // alert('Invalid number entered')
            toast('Invalid number entered')
        } else {
            allBooks.splice(indexToDelete - 1, 1)
            toast('Deleted successfully!', 'blue')
            displayOurBooks()
        }
    }
}

function editAny() {
    if (allBooks.length < 1) {
        toast("Nothing to edit, shine your eyes", "black")
    } else {
        var indexToEdit = Number(prompt('Enter which number to edit'))
        console.log(indexToEdit);
        if (indexToEdit > allBooks.length) {
            // alert('Invalid number entered')
            toast('Invalid number entered')
        } else {
            var newBook = prompt('Enter the new book')
            allBooks.splice(indexToEdit - 1, 1, newBook)
            toast('Edited successfully!', 'green')
            displayOurBooks()
        }
    }
}

function displayOurBooks() {
    displayBooks.innerHTML = ""
    displayBooks.innerHTML = `
        <table class="table table-bordered table-striped table-dark" id="table">
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
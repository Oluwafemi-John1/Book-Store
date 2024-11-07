function toast(message = 'Welcome', colour = 'red', duration = 3000) {
    Toastify({
        text: message,
        duration: duration,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: colour
        },
        onClick: function () { }
    }).showToast();
}


var allBooks = []
function addBook() {
    if (book.value == '') {
        toast('Kindly fill in the input','red',1500)
    } else {
        allBooks.push(book.value)
        toast('Added succesfully', 'green')
        console.log(allBooks);
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
            toast('Invalid number entered')
        } else {
            var newBook = prompt('Enter the new book')
            allBooks.splice(indexToEdit - 1, 1, newBook)
            toast('Edited successfully!', 'green')
            displayOurBooks()
        }
    }
}

function deleteBook(index) {
    console.log(index);
    allBooks.splice(index, 1)
    displayOurBooks()
}

function displayOurBooks() {
    displayBooks.innerHTML = ""
    displayBooks.innerHTML = `
        <table class="table table-bordered table-striped table-hover table-dark" id="table">
            <tr>
                <th>S/N</th>
                <th>Books</th>
                <th>Actions</th>
            </tr>
        </table>
        `
    for (var i = 0; i < allBooks.length; i++) {
        console.log(allBooks[i])
        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${allBooks[i]}</td>
                <td>
                    <button class="btn btn-sm btn-warning">Edit</button>
                    <button onclick="deleteBook(${i})" class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
            `
    }
}
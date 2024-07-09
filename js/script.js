let proName = document.getElementById("proName");
let modalName = document.getElementById("modalName");
let price = document.getElementById("price");
let tbody = document.getElementById("data");

let isEdit = false;
let isId;

// get data
const getData = () => {

    let data = JSON.parse(localStorage.getItem("product"));
    if (data) {
        return data;
    } else {
        return [];
    }
};

let storage = getData();

const formSubmit = () => {
    event.preventDefault();
    console.log("Submit");

    productData = {
        id: isId ? isId : parseInt(Math.random() * 100 + 1),
        pname: proName.value,
        mname: modalName.value,
        proprice: price.value,
    };
    console.log(productData);

    if (isEdit) {
        let updateData = [...storage];  // Copy the array

        const updateRec = updateData.map((rec) => {
            if (rec.id === isId) {
                return productData; // Return the new product data
            } else {
                return rec;
            }
        });

        storage = updateRec;

        isId = undefined;
        isEdit = false;

    } else {
        storage = [...storage, productData];
    }

    proName.value = "";
    modalName.value = "";
    price.value = "";

    localStorage.setItem("product", JSON.stringify(storage));

    viewData();
};

// view data
const viewData = () => {
    tbody.innerHTML = "";

    storage.forEach((rec) => {
        tbody.innerHTML += `<tr class="text-center">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                        ${rec.id}
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                        ${rec.pname}
                                    </th>
                                    <td class="px-6 py-4">
                                        ${rec.mname}
                                    </td>
                                    <td class="px-6 py-4">
                                        ${rec.proprice}
                                    </td>
                                    <td class="px-6 py-4">
                                        <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onclick="return editRec(${rec.id})">
                                            <i class="bi bi-pencil-square"></i>
                                        </button>
                                    </td>
                                    <td class="px-6 py-4">
                                        <button class="font-medium text-red-600 dark:text-red-500 hover:underline" onclick="return deleteRec(${rec.id});">
                                        <i class="bi bi-trash3"></i>
                                        </button>
                                    </td>
                                    <td class="px-6 py-4">
                                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onclick="return addCart(${rec.id});">
                                        <i class="bi bi-cart3"></i>
                                        </button>
                                    </td>
                                </tr>`
    });
}
viewData();

// edit record
const editRec = (id) => {

    let record = [...storage];

    let editData = record.filter((rec) => {
        return rec.id == id;
    });

    proName.value = editData[0].pname;
    modalName.value = editData[0].mname;
    price.value = editData[0].proprice;

    isEdit = true;
    isId = id;
};

// delete record
const deleteRec = (id) => {
    let record = [...storage];

    let deleteData = record.filter((rec) => {
        return rec.id != id;
    })

    localStorage.setItem("product", JSON.stringify(deleteData));
    storage = getData();
    viewData();
}

// add to cart

const addCart = (id) => {

}

// view cart


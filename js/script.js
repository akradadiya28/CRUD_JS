let proName = document.getElementById("proName");
let modalName = document.getElementById("modalName");
let price = document.getElementById("price");
let tbody = document.getElementById("data")

const getData = () => {

    let data = JSON.parse(localStorage.getItem("product"));
    if (data) {
        return data;
    } else {
        return [];
    }
}
getData();

let storage = getData();

const formSubmit = () => {
    event.preventDefault();
    console.log("Submit");

    productData = {
        pname: proName.value,
        mname: modalName.value,
        proprice: price.value,
    }
    console.log(productData);

    storage = [...storage, productData];

    proName.value = "";
    modalName.value = "";
    price.value = "";

    localStorage.setItem("product", JSON.stringify(storage));

    viewData();

}

const viewData = () => {
    tbody.innerHTML = "";

    storage.forEach((rec) => {
        tbody.innerHTML += `<tr
                                    class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <i class="bi bi-cart-plus"></i>
                                        </a>
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                                                class="bi bi-pencil-square"></i> | <i class="bi bi-trash3"></i></a>
                                    </td>
                                </tr>`
    });
}
viewData();




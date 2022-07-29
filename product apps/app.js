
const product_form = document.getElementById('product_form');
const msg = document.querySelector('.msg');
const single_product = document.querySelector('.single-product');
const product_list = document.getElementById('product_list');
const product_update_form = document.getElementById('product_update_form');





const getAllProducts = () => {


    const data = readLSData('product');

    let list = '';
  
    if( !data || data.length == 0 ){
        list = `
            <tr>
                <td colspan="7" class="text-center"> No product found </td>
            </tr>
        `;
    }


    if( data && data.length > 0 ){


        let final_amount = 0;

    
        data.map((item, index) => {
            final_amount += ( item.price *  item.quantity );
            list += `
            <tr>
                <td>${  index + 1 }</td>
                <td><img style="width: 60px; height:60px; object-fit:cover; border-radius:4px;" src="${ item.photo }" alt=""></td>
                <td>${ item.name }</td>
                <td>${ item.price } BDT</td>
                <td>${ item.quantity }</td>
                <td>${ item.price * item.quantity } BDT</td>
                <td>
                    <a class="btn btn-info btn-sm product-view" data-bs-toggle="modal" product_index="${index}" href="#shop_single_modal"><i class="fas fa-eye"></i></a>
                    <a class="btn btn-warning btn-sm product-edit" product_index="${index}" data-bs-toggle="modal" href="#shop_edit_modal"><i class="fas fa-edit"></i></a>
                    <a class="btn btn-danger btn-sm product-delete" product_index="${index}" href=""><i class="fas fa-trash"></i></a>
                </td>
            </tr>
            `;

        });

        list += `<tr>
            <td colspan="6" class="text-end">Final Amount = ${final_amount} BDT</td>
            <td></td>
        </tr>`;
        
       

    }


    product_list.innerHTML = list;


}

getAllProducts();


product_form.onsubmit = (e) => {
    e.preventDefault();

  
    let form_data = new FormData(e.target);
    let productData = Object.fromEntries(form_data.entries());
    let { name, price, photo, quantity } = Object.fromEntries(form_data.entries());



   
    if( !name || !price || !photo || !quantity ) {
        msg.innerHTML = setAlert('All fields are required !'); 
    }else {

        createLSData('product', productData);

        msg.innerHTML = setAlert('Data stable !', 'success');
        e.target.reset(); 
        getAllProducts();
    }



}



product_list.onclick = (e) => {
    e.preventDefault(); 



    if( e.target.classList.contains('product-view') ){


        let index = e.target.getAttribute('product_index');
        let data = readLSData('product');

        const { name, price, photo, quantity } = data[index];

        single_product.innerHTML = `
            <img class="shadow" src="${ photo }" alt="">
            <h1>${ name }</h1>
            <p>Price : ${ price } BDT</p>
        `;

    }
    
    if( e.target.classList.contains('product-edit') ){

    let index = e.target.getAttribute('product_index');

    let data = readLSData('product');
    const { name, price, photo, quantity } = data[index];

    product_update_form.innerHTML = `<div class="my-3">
        <label for="">Name</label>
        <input name="name" type="text" value="${ name }" class="form-control">
        </div>
        <div class="my-3">
            <label for="">Price</label>
            <input name="price" type="text" value="${ price }" class="form-control">
        </div>
        <div class="my-3">
            <label for="">Quantity</label>
            <input name="quantity" type="text" value="${ quantity }" class="form-control">
        </div>
        <div class="my-3">
            <label for="">Quantity</label>
            <input name="index" type="hidden" value="${ index }" class="form-control">
        </div>
        <div class="my-3">
            <img class="w-100" src="${ photo }" alt="">
        </div>
        <div class="my-3">
            <label for="">Photo</label>
            <input name="photo" type="text" value="${ photo }" class="form-control">
        </div>
        <div class="my-3">
            <input type="submit" class="btn btn-primary w-100" value="Update now">
        </div>
    `;


    }
 
   if( e.target.classList.contains('product-delete') ){

        let conf = confirm('Are you sure ? ');

        if( conf ){
            let index = e.target.getAttribute('product_index');
            let data  = readLSData('product');
            data.splice(index, 1);
            updateLSData('product', data);
            getAllProducts();
        } else {
            alert('Your data safe ');
        }
        
        


   }
    


}




product_update_form.onsubmit = (e) => {
    e.preventDefault();


    const form_data = new FormData(e.target);
    const { name, price, quantity, photo, index } = Object.fromEntries(form_data.entries());



    let all_data = readLSData('product');
    all_data[index] = { name, price, quantity, photo };
  
    updateLSData('product', all_data);

    getAllProducts();
    
}


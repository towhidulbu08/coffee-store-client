import { useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee=useLoaderData()
    const { _id, name, quantity, supplier, taste, category, photo, details } = coffee;
    const handleUpdateCoffee=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value
        const quantity=form.quantity.value
        const supplier=form.supplier.value
        const taste=form.taste.value
        const category=form.category.value
        const photo=form.photo.value;
        const details=form.details.value;

        const updatedCoffee={name,quantity,supplier,taste,category,photo,details}
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Congratulations',
                    text: 'Coffee updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] md:p-10 max-w-[1240px] md:ml-[200px] md:mt-[130px] md:mb-[200px] md:mr-[200px] ">
      <h1 className="text-3xl font-bold text-center">Update Coffee:{name}</h1>
      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input  w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier"
                className="input  w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input  w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form Photo URL row */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input w-full input-bordered"
            />
          </label>
        </div>
        <div className="mt-4 mb-2">
          
          <input className="btn border-[2px] hover:bg-[#D2B48C] hover:border-[#331A15]  border-[#331A15] btn-block bg-[#D2B48C]" type="submit" value="Update Coffee" />
        </div>
      </form>
    </div>
    );
};

export default UpdateCoffee;
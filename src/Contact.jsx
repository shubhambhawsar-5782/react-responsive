import React, {useState} from 'react'

const Contact = () => {

    const [data, setData] = useState({
       fullname:"",
       email:"",
       contact:"",
       feedback:"",
    })

    const InputEvent=(event) =>{
        const{name,value} = event.target;
        
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(`Name:${data.fullname}`)
    }

    return (
        <>
        <div className="my-2">
            <h1 className="text-center" > Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form action="" onSubmit={formSubmit}>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Shubham Bhawsar"/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Contact</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" name="contact" value={data.contact} onChange={InputEvent} placeholder="7047205832"/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="feedback" value={data.feedback} onChange={InputEvent}></textarea>
                    </div>
                    <button type="button" class="btn btn-outline-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact

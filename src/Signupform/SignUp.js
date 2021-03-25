import react from "react";

         export class SignUp extends react.Component{
           
            constructor(props: SignUp) {
                super(props);
                this.state = {
                   username : null,
                   email : null,
                   password : null
                 }
             }
           
           
    render(){

        return (
            <div className='wrapper'>
              <div className='form-wrapper'>
                 <h1>Sign Up</h1>

                 <form onSubmit={this.handleSubmit} noValidate >
                    <div className='username'>
                       <label htmlFor="username">Username</label>
                       <input type='text' name='username' onChange={this.handleChange}/>
                    </div>

                    <div className='email'>
                       <label htmlFor="email">Email</label>
                       <input type='email' name='email' onChange={this.handleChange}/>
                    </div>

                    <div className='password'>
                       <label htmlFor="password">Password</label>
                       <input type='password' name='password' onChange={this.handleChange}/>
                    </div>  

                    <div className='confirmpassword'>
                       <label htmlFor="confirmpassword">Confirm Password</label>
                       <input type='confirmpassword' name='confirmpassword' onChange={this.handleChange}/>
                    </div>  

                    <div className='submit'>
                       <button>Submit</button>
                       <button>SignIn</button>
                       
                    </div>

                  </form>
           </div>
        </div>
       );
      }
     }



import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login';



 class Auth extends Component {
      state = {
          facebookData:[],
          googleData:[]
      }
      responseFacebook = (response) => {
         this.setState({facebookData:response})
         console.log(this.state.facebookData)
     }

     responseGoogle = (response) => {
         console.log(response);
         this.setState({ googleData: response })
     }
     

    render() {
        return (
            <div className="flex flex-wrap border-black border-2 bg-gray-50 mx-40 my-20">
                <div className=" flex-1 h-auto m-8 ">
                    <div>
                        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md w-full space-y-8">
                                <div>
                                    {/* <img className="mx-auto h-24 "  alt="Workflow" /> */}
                                    <h2 className="mt-6 text-center text-3xl font-bold text-green-700">
                                        Sign in to your account
      </h2>
                                    {/* <p className="mt-2 text-center text-sm text-gray-600">
                        Or
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            start your 14-day free trial
        </a>
                    </p> */}
                                </div>
                                <form className="mt-8 space-y-6" action="#" method="POST">
                                    <input type="hidden" name="remember" value="true" />
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div className="my-2">
                                            <label for="email-address" className="sr-only">Email address</label>
                                            <input id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                        </div>
                                        <div>
                                            <label for="password" className="sr-only">Password</label>
                                            <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                                            <label for="remember_me" className="ml-2 block text-sm text-gray-900">
                                                Remember me
          </label>
                                        </div>

                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-green-600 hover:text-green-500">
                                                Forgot your password?
          </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">


                                            </span>
          Sign in
        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
                <div className=" flex-1 m-8 flex flex-col justify-center flex-wrap content-left">
                <span className="m-4 ">
                <FacebookLogin
                    appId="1385706841774995"
                    fields="name,email,picture"
                    onClick={this.responseFacebook}
                    callback={this.responseFacebook}
                     />
                </span>   
                 <span className="m-4">
                <GoogleLogin
                        clientId="857897877790-snl8r8eqb3jt8ccastqnfuqk7njbcjth.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                 </span>
                </div>
                    
                     
                   
                    

                    
                
            </div>
        )
    }
}

export default Auth
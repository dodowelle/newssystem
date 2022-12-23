

function Login(props) {
    console.log('login===',props.history)
    const loginFn = () =>{
        localStorage.setItem('token', '13234254')
    }
    return (
        <div>
            Login
            <button onClick={loginFn}>登录</button>
        </div>
    )
}

export default Login
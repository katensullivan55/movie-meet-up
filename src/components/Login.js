import React from 'react';
import './Login.css';


export default function Login() {
    return (
        <link rel="stylesheet" href="Login.css">
        <form action="action_page.php" method="post">
            <div class="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>

            <div class="container">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot password?</span>
            </div>
        </form>
    )
};
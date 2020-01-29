import React, { Component } from "react";

class Admin extends Component {
    render(){
        this.state = {
            loggedIn: false
        }
        if (this.state.loggedIn){
            return (
                <p>
                  Admin
                </p>

            );
        }else {
            const handleClick = () => {
                alert("Submit Clicked!!");
                document.getElementById("username")
            }
            return (
                <>
                    <p>Please Log in!</p>
                    <form>
                        <input type="text" name="username" id="username"></input>
                        <label for="username">Username</label>

                        <input type="text" name="password" id="password"></input>
                        <label for="password">Password</label>
                        <input type="submit" onClick={handleClick}/>
                    </form>
                </>
            )
        }
    }
}

export default Admin;
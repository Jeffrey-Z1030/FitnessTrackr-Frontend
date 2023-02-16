import { useState } from "react";
import UserMe from "../Components/UserMe";
import { BASEURL, USER_ID, STORAGE_KEY } from "../Constants/constants";

export async function createAccount(props) {
    const body = JSON.stringify({

        username: props.username,
        password: props.password,

    });
    console.log(body)
    try {
        const response = await fetch(
            `${BASEURL}/users/register`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }
        )
        const json = await response.json();
        console.log(json)
        const replyToken = json.token;
        const userId = json.user.id
        localStorage.setItem(`${USER_ID}`, userId)
        console.log(userId)


        if (replyToken) {
            localStorage.setItem(`${STORAGE_KEY}`, replyToken)
        }

    } catch (error) {
        console.error(error)
    }

}

export async function loginAccount(props) {
    const body = JSON.stringify({

        username: props.username,
        password: props.password,

    });
    console.log(body)
    try {
        const response = await fetch(
            `${BASEURL}/users/login`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }
        )
        const json = await response.json();
        console.log(json)
        const replyToken = json.token;
        console.log(replyToken)
        const userId = json.user.id
        localStorage.setItem(`${USER_ID}`, userId)
        alert('Logged in successful!')



        if (replyToken) {
            localStorage.setItem(`${STORAGE_KEY}`, replyToken)
        }

    } catch (error) {
        console.error(error)
    }

}

export async function getRoutinesByUsername() {
    try {
        const username = localStorage.getItem('signedInUser')
        const response = await fetch(`${BASEURL}/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(result => {
            console.log(result)
        })
    } catch (error) {
        throw Error("Failed to get user's Routines", error)
    }
}









import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const router = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            router('/')
        }, 3000)
    }, [])

    return (
        <div>
            <h2>Page not found</h2>
            <p>Redirecting you in home in 3 sec..</p>
        </div>
    )
}

export default NotFound
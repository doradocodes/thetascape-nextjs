'use client'

export default function Page() {
    return (
        <form name="contact" method="POST" netlify>
            <p>
                <label>Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Password: <input type="password" name="password" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

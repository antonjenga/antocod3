'use client';

export default function({error, reset}:
    {error: Error & {digest?: string}
    reset: () => void}){
        return(
            <html>
                <body>
                    <h2>something went wrong!</h2>
                    <button onClick={() => reset()}>Try Again</button>
                </body>
            </html>
        )
    }
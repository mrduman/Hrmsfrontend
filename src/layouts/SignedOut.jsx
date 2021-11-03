import React from 'react'
import { Button} from 'semantic-ui-react'


export default function SignedOut({signIn}) {
    return (
        <div>
            <Button content= "Sign In" primary onClick={signIn}/>
            <Button content="Sign Up" primary/>
        </div>
    )
}

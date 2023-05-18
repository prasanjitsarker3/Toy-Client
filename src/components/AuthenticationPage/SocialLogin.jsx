import React, { useContext } from 'react';
import google from '../../assets/image/googleSociasl.png';
import { AuthContext } from './AuthProvider';
const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const handleGoogleSign = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="flex flex-col w-full text-center border-opacity-50">
                <div className="divider">OR</div>
                <div className='flex justify-center pb-2 cursor-pointer'>
                    <img onClick={handleGoogleSign} src={google} alt="" srcset="" width={'30px'} height={'30px'} />
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;